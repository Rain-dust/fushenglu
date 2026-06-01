const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const appUrl = `file:///${path.join(__dirname, "index.html").replaceAll("\\", "/")}`;
const outDir = path.join(__dirname, "qa");
const profileDir = path.join(outDir, `chrome-profile-${process.pid}-${Date.now()}`);
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(profileDir, { recursive: true });

const port = 9333 + Math.floor(Math.random() * 300);
const chrome = spawn(chromePath, [
  "--headless",
  "--no-first-run",
  "--disable-gpu",
  "--disable-software-rasterizer",
  "--disable-dev-shm-usage",
  "--disable-extensions",
  "--no-sandbox",
  "--disable-search-engine-choice-screen",
  "--remote-allow-origins=*",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  appUrl
], { stdio: "ignore" });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getDebuggerUrl() {
  for (let i = 0; i < 80; i++) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json`);
      const targets = await response.json();
      const page = targets.find((target) => target.type === "page" && target.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      await sleep(120);
    }
  }
  throw new Error("Chrome did not expose a debugger endpoint.");
}

async function main() {
  const ws = new WebSocket(await getDebuggerUrl());
  let nextId = 1;
  const pending = new Map();
  const errors = [];

  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.method === "Runtime.exceptionThrown") {
      errors.push(message.params.exceptionDetails.text || "Runtime exception");
    }
    if (message.id && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
  });

  await new Promise((resolve) => ws.addEventListener("open", resolve, { once: true }));

  function send(method, params = {}) {
    const id = nextId++;
    ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve) => pending.set(id, resolve)).then((message) => {
      if (message.error) throw new Error(`${method}: ${message.error.message}`);
      return message.result;
    });
  }

  async function shot(name) {
    await sleep(450);
    const result = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
    fs.writeFileSync(path.join(outDir, `${name}.png`), Buffer.from(result.data, "base64"));
  }

  async function evalJs(expression) {
    const result = await send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true
    });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
    return result.result.value;
  }

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 430,
    height: 932,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "no-preference" }]
  });
  await send("Page.navigate", { url: appUrl });
  await sleep(900);

  await shot("record");
  const rows = await evalJs("document.querySelectorAll('.note-row').length");
  if (rows < 3) throw new Error(`Expected at least 3 note rows, got ${rows}`);
  const appName = await evalJs("document.body.textContent.includes('浮生录')");
  if (!appName) throw new Error("Brand name missing.");
  const savedNav = await evalJs("Boolean(document.querySelector('[data-action=\"go-saved\"]'))");
  if (savedNav) throw new Error("Saved/collection should not be a separate bottom-nav destination.");
  const bottomSearchNav = await evalJs("Boolean(document.querySelector('.bottom-nav [data-action=\"go-search\"]'))");
  if (bottomSearchNav) throw new Error("Search should stay in the record toolbar, not bottom navigation.");
  const toolbarSearch = await evalJs("Boolean(document.querySelector('header [data-action=\"go-search\"]'))");
  if (!toolbarSearch) throw new Error("Record toolbar search entry is missing.");
  const categoryLabels = await evalJs("[...document.querySelectorAll('.tab')].map((item) => item.textContent.trim()).join('|')");
  if (categoryLabels !== "摘录|随笔") throw new Error(`Unexpected categories: ${categoryLabels}`);
  const literatiParts = await evalJs("document.querySelectorAll('.literati-scene span').length");
  if (literatiParts < 5) throw new Error("Literati atmosphere layer is missing.");

  await evalJs("document.querySelector('[data-action=\"go-quote\"]').click()");
  await sleep(350);
  await shot("quote");
  const dailyCat = await evalJs(`(() => {
    const cat = document.querySelector('.daily-cat');
    if (!cat) return false;
    const img = cat.querySelector('img');
    const isOutsideStack = !cat.closest('.daily-stack');
    const isPassive = getComputedStyle(cat).pointerEvents === 'none';
    const animation = getComputedStyle(cat).animationName;
    return Boolean(img?.complete && img.naturalWidth > 0) && isOutsideStack && isPassive && animation && animation !== 'none';
  })()`);
  if (!dailyCat) throw new Error("Daily quote cat should be an animated image layer outside the clickable paper stack.");
  const noTearText = await evalJs("!document.body.textContent.includes('撕下')");
  if (!noTearText) throw new Error("Visible '撕下' text found on page.");
  const dailySealPlaced = await evalJs(`(() => {
    const paper = document.querySelector('.daily-paper-current')?.getBoundingClientRect();
    const seal = document.querySelector('.daily-seal')?.getBoundingClientRect();
    if (!paper || !seal) return false;
    return seal.left > paper.left + paper.width * 0.62 && seal.top > paper.top + paper.height * 0.58;
  })()`);
  if (!dailySealPlaced) throw new Error("Daily quote seal should sit in the lower-right of the paper.");
  const dailySealText = await evalJs("document.querySelector('.daily-seal img')?.alt === '\\u6d6e\\u751f\\u5f55'");
  if (!dailySealText) throw new Error("Daily quote seal should use the Fu Sheng Lu image stamp.");
  const beforeDaily = await evalJs("document.querySelector('.daily-paper-current p')?.textContent");
  await evalJs("document.querySelector('.daily-stack').click()");
  await sleep(750);
  const afterDaily = await evalJs("document.querySelector('.daily-paper-current p')?.textContent");
  if (beforeDaily === afterDaily) throw new Error("Daily quote did not switch to the next note.");
  await evalJs("document.querySelector('[data-action=\"go-record\"]').click()");
  await sleep(350);

  await evalJs("document.querySelector('.note-row').click()");
  await shot("detail");
  const vertical = await evalJs("Boolean(document.querySelector('.detail-vertical'))");
  const wash = await evalJs("Boolean(document.querySelector('.mood-wash'))");
  const seal = await evalJs("Boolean(document.querySelector('.detail-seal'))");
  const detailAtmosphere = await evalJs("Boolean(document.querySelector('.scene-detail'))");
  if (!vertical || !wash || !seal || !detailAtmosphere) throw new Error("Detail page missing vertical text, wash, seal, or atmosphere.");
  const detailSealText = await evalJs("document.querySelector('.detail-seal img')?.alt === '\\u6d6e\\u751f\\u5f55'");
  if (!detailSealText) throw new Error("Detail seal should use the Fu Sheng Lu image stamp.");

  await evalJs("document.querySelector('[data-action=\"edit-entry\"]').click()");
  await shot("editor");
  const editorReady = await evalJs("Boolean(document.querySelector('.paper-stack .plain-textarea'))");
  if (!editorReady) throw new Error("Editor did not render.");
  const editorCategories = await evalJs("[...document.querySelectorAll('.plain-select option')].map((item) => item.value).join('|')");
  if (editorCategories !== "摘录|随笔") throw new Error(`Unexpected editor categories: ${editorCategories}`);

  await evalJs("document.querySelector('[data-action=\"save-entry\"]').click()");
  await sleep(350);
  await evalJs("document.querySelector('[data-action=\"toggle-favorite\"]').click()");
  await sleep(350);
  await evalJs("document.querySelector('[data-action=\"back-from-detail\"]').click()");
  await sleep(350);
  await shot("record-after-mark");
  const recordRowsAfterMark = await evalJs("document.querySelectorAll('.note-row').length");
  const markedRows = await evalJs("document.querySelectorAll('.note-favorite').length");
  if (recordRowsAfterMark < 3 || markedRows < 1) throw new Error("Record view should keep marked entries in the same list.");

  await evalJs("document.querySelector('[data-action=\"go-search\"]').click()");
  await sleep(350);
  await evalJs("document.querySelector('[data-field=\"search\"]').value = '浮生'; document.querySelector('[data-field=\"search\"]').dispatchEvent(new Event('input', { bubbles: true }))");
  await shot("search");
  const searchRows = await evalJs("document.querySelectorAll('.note-row').length");
  if (searchRows < 1) throw new Error("Search did not return expected rows.");

  await evalJs("document.querySelector('[data-action=\"go-profile\"]').click()");
  await shot("profile");
  const profileSeal = await evalJs("Boolean(document.querySelector('.stamp-preview'))");
  if (!profileSeal) throw new Error("Profile seal did not render.");
  const profileSealText = await evalJs("document.querySelector('.stamp-preview img')?.alt === '\\u6d6e\\u751f\\u5f55' && document.querySelector('#seal-text')?.value === '\\u6d6e\\u751f\\u5f55'");
  if (!profileSealText) throw new Error("Profile seal should use the Fu Sheng Lu image stamp and input text.");
  const themeChoices = await evalJs("document.querySelectorAll('[data-action=\"theme-font\"]').length");
  if (themeChoices < 12) throw new Error(`Expected many global font choices, got ${themeChoices}.`);
  await evalJs("document.querySelector('[data-action=\"theme-font\"][data-theme=\"songti\"]').click()");
  await sleep(250);
  const themeChanged = await evalJs("document.querySelector('#app').dataset.fontTheme === 'songti'");
  if (!themeChanged) throw new Error("Global font theme did not change.");

  if (errors.length) throw new Error(errors.join("\n"));
  console.log("QA smoke passed");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await sleep(300);
    chrome.kill();
  });

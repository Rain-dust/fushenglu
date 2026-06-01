const STORAGE = {
  entries: "fusheng.entries.v1",
  stamps: "fusheng.stamps.v1",
  activeStamp: "fusheng.activeStamp.v1",
  fontTheme: "fusheng.fontTheme.v1"
};

const LEGACY_STORAGE = {
  entries: "moji.entries.v1",
  stamps: "moji.stamps.v1",
  activeStamp: "moji.activeStamp.v1"
};

const CATEGORIES = ["摘录", "随笔"];

const ASSET = {
  paper: "./assets/textures/paper_texture_warm.png",
  paperBase: "./assets/textures/paper_texture_base.png",
  fiber: "./assets/textures/paper_fiber_overlay.png",
  rain: "./assets/images/covers/cover_rain_window.png",
  plum: "./assets/images/covers/cover_plum_branch.png",
  mountain: "./assets/images/illustrations/illus_mountain.png",
  bamboo: "./assets/images/illustrations/illus_bamboo.png",
  moon: "./assets/images/illustrations/illus_moon.png",
  window: "./assets/images/illustrations/illus_window.png",
  tea: "./assets/images/illustrations/illus_tea.png",
  cat: "./assets/images/illustrations/cat_lazy_black_v1.png",
  empty: "./assets/images/empty/empty_bookmark.png",
  icon: "./assets/images/app/app_icon_foreground.png",
  sealPhysical: "./assets/images/seal/seal_fushenglu_v1.png"
};

const IMAGE_CHOICES = [
  { name: "山水", path: ASSET.mountain, type: "ink" },
  { name: "早梅", path: ASSET.plum, type: "photo" },
  { name: "雨窗", path: ASSET.rain, type: "photo" },
  { name: "竹枝", path: ASSET.bamboo, type: "ink" },
  { name: "月水", path: ASSET.moon, type: "ink" },
  { name: "窗灯", path: ASSET.window, type: "ink" },
  { name: "茶盏", path: ASSET.tea, type: "ink" }
];

const ENTRY_FONT_CHOICES = [
  { id: "kai", name: "楷意" },
  { id: "song", name: "宋刻" },
  { id: "ui", name: "清正文" }
];

const THEME_FONTS = [
  { id: "wenkai", name: "霞鹜文楷", note: "温润耐读", stack: "'LXGW WenKai Screen', 'LXGW WenKai', '霞鹜文楷', 'Kaiti SC', 'KaiTi', serif" },
  { id: "kaiti", name: "系统楷体", note: "传统摘录", stack: "'Kaiti SC', 'STKaiti', 'KaiTi', serif" },
  { id: "songti", name: "思源宋体", note: "书卷清正", stack: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', 'SimSun', serif" },
  { id: "fangsong", name: "仿宋", note: "札记感", stack: "'FangSong', 'STFangsong', 'FangSong_GB2312', serif" },
  { id: "heiti", name: "思源黑体", note: "现代克制", stack: "'Noto Sans SC', 'Source Han Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif" },
  { id: "xingkai", name: "行楷", note: "轻书写", stack: "'STXingkai', 'Xingkai SC', 'KaiTi', serif" },
  { id: "lishu", name: "隶书", note: "古意标题", stack: "'LiSu', 'STLiti', 'SimLi', serif" },
  { id: "shuti", name: "书体", note: "题签味", stack: "'FZShuTi', 'STXingkai', 'KaiTi', serif" },
  { id: "youyuan", name: "幼圆", note: "柔和日常", stack: "'YouYuan', 'Yuanti SC', 'Microsoft YaHei', sans-serif" },
  { id: "harmony", name: "鸿蒙 Sans", note: "干净屏显", stack: "'HarmonyOS Sans SC', 'HarmonyOS Sans', 'PingFang SC', 'Microsoft YaHei', sans-serif" },
  { id: "misans", name: "MiSans", note: "清爽 UI", stack: "'MiSans', 'MiSans VF', 'PingFang SC', 'Microsoft YaHei', sans-serif" },
  { id: "puhuiti", name: "普惠体", note: "稳重商业", stack: "'Alibaba PuHuiTi', 'Alibaba-PuHuiTi', 'PingFang SC', 'Microsoft YaHei', sans-serif" },
  { id: "zcool", name: "站酷小薇", note: "复古标题", stack: "'ZCOOL XiaoWei', '站酷小薇LOGO体', 'Songti SC', serif" },
  { id: "mashan", name: "马善政", note: "厚笔书法", stack: "'Ma Shan Zheng', 'STXingkai', 'KaiTi', cursive" },
  { id: "longcang", name: "龙藏体", note: "古雅长线", stack: "'Long Cang', 'STKaiti', 'KaiTi', cursive" },
  { id: "wqy", name: "文泉驿", note: "开源清晰", stack: "'WenQuanYi Micro Hei', 'WenQuanYi Zen Hei', 'Noto Sans SC', sans-serif" }
];

const SEAL_CARVINGS = [
  { id: "han", name: "汉印厚边", note: "方整、厚重、适合姓名章" },
  { id: "yuanzhu", name: "元朱文", note: "细朱文、文人气、适合闲章" },
  { id: "baiwen", name: "白文凿石", note: "红底白字、刀口更强" },
  { id: "guxi", name: "古玺残石", note: "边残角缺、古拙自然" },
  { id: "birdworm", name: "鸟虫篆意", note: "线条盘曲、装饰性强" },
  { id: "zhu-bai", name: "朱白相间", note: "红白并置、收藏章感" },
  { id: "slender", name: "细边私印", note: "轻巧、留白多" },
  { id: "bold", name: "急就凿印", note: "粗犷、印泥厚" }
];

const defaultStamps = [
  {
    id: "stamp-fusheng",
    text: "浮生录",
    type: "image",
    url: ASSET.sealPhysical,
    style: "yang",
    shape: "square",
    color: "#ad281f",
    carving: "han",
    seed: "fusheng-default"
  }
];

const seedEntries = [
  {
    id: "entry-dream",
    title: "浮生若梦",
    category: "摘录",
    source: "李白《春夜宴从弟桃花园序》",
    dateLabel: "5月20日",
    timeLabel: "09:41",
    content: "浮生若梦，为欢几何。",
    image: ASSET.mountain,
    imageType: "ink",
    font: "kai",
    layout: "vertical",
    stampId: "stamp-fusheng",
    stampSeed: "entry-dream",
    favorite: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 10
  },
  {
    id: "entry-traveler",
    title: "远行客",
    category: "摘录",
    source: "古诗十九首《行行重行行》",
    dateLabel: "5月18日",
    timeLabel: "21:08",
    content: "人生天地间，忽如远行客。\n斗酒相娱乐，聊厚不为薄。\n驱车策驽马，游戏宛与洛。\n洛中何郁郁，冠带自相索。",
    image: ASSET.mountain,
    imageType: "ink",
    font: "song",
    layout: "vertical",
    stampId: "stamp-fusheng",
    stampSeed: "entry-traveler",
    favorite: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 36
  },
  {
    id: "entry-plum",
    title: "早梅",
    category: "摘录",
    source: "张谓《早梅》",
    dateLabel: "5月17日",
    timeLabel: "07:30",
    content: "万木冻欲折，孤根暖独回。\n前村深雪里，昨夜一枝开。",
    image: ASSET.plum,
    imageType: "photo",
    font: "kai",
    layout: "vertical",
    stampId: "stamp-fusheng",
    stampSeed: "entry-plum",
    favorite: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 58
  },
  {
    id: "entry-still",
    title: "静坐",
    category: "随笔",
    source: "随笔",
    dateLabel: "5月15日",
    timeLabel: "12:20",
    content: "静坐常思己过，闲谈莫论人非。\n能受苦乃为志士，肯吃亏不是痴人。",
    image: ASSET.tea,
    imageType: "ink",
    font: "kai",
    layout: "vertical",
    stampId: "stamp-fusheng",
    stampSeed: "entry-still",
    favorite: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 84
  },
  {
    id: "entry-rain",
    title: "雨窗",
    category: "随笔",
    source: "夜雨札记",
    dateLabel: "5月12日",
    timeLabel: "22:16",
    content: "雨声落在窗棂上，也落在心底未曾说出口的话里。\n有些思念，适合藏在雨里。",
    image: ASSET.rain,
    imageType: "photo",
    font: "kai",
    layout: "horizontal",
    stampId: "stamp-fusheng",
    stampSeed: "entry-rain",
    favorite: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 120
  }
];

const app = document.querySelector("#app");
const toastEl = document.querySelector("#toast");
const fileInput = document.querySelector("#hiddenImageInput");

const state = {
  view: "record",
  previousView: "record",
  selectedCategory: "摘录",
  search: "",
  detailId: null,
  draft: null,
  editingId: null,
  sheet: null,
  stampDraft: null,
  promptExpanded: false,
  promptSealText: "",
  pendingFileTarget: null,
  dailyIndex: 0,
  dailyTurning: false,
  dailyNextIndex: null,
  dailyFlipTimer: null
};

function readJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadEntries() {
  const fresh = readJson(STORAGE.entries);
  if (Array.isArray(fresh) && fresh.length) return fresh.map(normalizeEntry);

  const legacy = readJson(LEGACY_STORAGE.entries);
  if (Array.isArray(legacy) && legacy.length) return legacy.map(normalizeEntry);

  return clone(seedEntries).map(normalizeEntry);
}

function loadStamps() {
  const fresh = readJson(STORAGE.stamps);
  if (Array.isArray(fresh) && fresh.length) return fresh.map(normalizeStamp);

  const legacy = readJson(LEGACY_STORAGE.stamps);
  if (Array.isArray(legacy) && legacy.length) return legacy.map(normalizeStamp);

  return clone(defaultStamps);
}

function normalizeEntry(entry) {
  const createdAt = Number(entry.createdAt) || Date.now();
  const content = String(entry.content || "未写完的话，也可以先留下。").trim();
  const category = normalizeCategory(entry.category || entry.source);
  return {
    id: entry.id || uid("entry"),
    title: entry.title || titleFromContent(content),
    category,
    source: entry.source || category,
    dateLabel: entry.dateLabel || formatDateLabel(createdAt),
    timeLabel: entry.timeLabel || formatTimeLabel(createdAt),
    content,
    image: entry.image || ASSET.mountain,
    imageType: entry.imageType === "photo" ? "photo" : "ink",
    handwritingImage: entry.handwritingImage || "",
    font: ["kai", "song", "ui"].includes(entry.font) ? entry.font : "kai",
    layout: entry.layout === "horizontal" ? "horizontal" : "vertical",
    stampId: entry.stampId || activeStampId || defaultStamps[0].id,
    stampSeed: entry.stampSeed || entry.id || uid("seal"),
    favorite: Boolean(entry.favorite),
    createdAt
  };
}

function normalizeStamp(stamp) {
  const text = String(stamp.text || "浮生录").trim().slice(0, 4) || "浮生录";
  return {
    id: stamp.id || uid("stamp"),
    text,
    type: stamp.type || "dynamic",
    url: stamp.url || "",
    style: stamp.style === "yin" ? "yin" : "yang",
    shape: ["square", "rectangle", "circle"].includes(stamp.shape) ? stamp.shape : "square",
    color: stamp.color || "#ad281f",
    carving: SEAL_CARVINGS.some((item) => item.id === stamp.carving) ? stamp.carving : "han",
    seed: stamp.seed || stamp.id || text
  };
}

function buildSealPrompt(stamp, sealText = "") {
  const safeStamp = normalizeStamp(stamp);
  const promptSealText = String(sealText || "").trim().slice(0, 8) || "（请输入想刻的字）";
  const shapeLabel = {
    square: "方印",
    rectangle: "长方印",
    circle: "圆印"
  }[safeStamp.shape] || "方印";
  const styleLabel = safeStamp.style === "yin" ? "白文，红底留白字" : "朱文，白底朱砂字";
  const carvingLabel = (SEAL_CARVINGS.find((item) => item.id === safeStamp.carving)?.name || "传统篆刻");

  return [
    `请根据我上传的参考图制作一枚专属中文篆刻印章。印文：“${promptSealText}”。`,
    `印章类型：${shapeLabel}，${styleLabel}，${carvingLabel}风格，传统篆书章法，字形古拙有刀刻感，四字排布均衡，整体清晰可识别。`,
    "视觉要求：朱砂红印泥，手工钤印质感，边缘有自然残损、颗粒、轻微漏印和印泥浓淡变化，质感真实但画面干净。",
    "参考图用法：如果附有喜欢的印章参考图，只参考边框厚薄、章法布局、残损程度、印泥颗粒和古朴气质；必须替换成上述印文，不要保留参考图原文字。",
    "输出要求：正方形构图，印章居中，纯白背景或透明背景，只保留印章本体，适合抠图上传到 App。",
    "负面要求：不要装饰框、纸张纹理、花瓣、水墨背景、阴影、印泥飞溅、手、石料、印章盒、英文、水印、说明文字、多枚印章、模糊变形。"
  ].join("\n");
}

function normalizeFontTheme(theme) {
  return THEME_FONTS.some((item) => item.id === theme) ? theme : "wenkai";
}

function normalizeCategory(category = "随笔") {
  const value = String(category);
  if (CATEGORIES.includes(value)) return value;
  if (["全部", "句子", "诗词", "摘抄", "引用"].includes(value)) return "摘录";
  if (["笔记", "灵感", "日记", "札记"].includes(value)) return "随笔";
  return "随笔";
}

function titleFromContent(content) {
  const compact = String(content).replace(/\s+/g, "");
  return compact.slice(0, 8) || "未题";
}

function saveAll() {
  localStorage.setItem(STORAGE.entries, JSON.stringify(entries));
  localStorage.setItem(STORAGE.stamps, JSON.stringify(stamps));
  localStorage.setItem(STORAGE.activeStamp, activeStampId);
  localStorage.setItem(STORAGE.fontTheme, activeFontThemeId);
}

function uid(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}-${Date.now().toString(36)}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDateLabel(time) {
  return new Date(time).toLocaleDateString("zh-CN", { month: "numeric", day: "numeric" });
}

function formatTimeLabel(time) {
  return new Date(time).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
}

function hashString(value = "") {
  let hash = 2166136261;
  for (const char of String(value)) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededPercent(seed, offset = 0) {
  return 8 + ((hashString(`${seed}:${offset}`) % 840) / 10);
}

function sealChars(text = "浮生") {
  return [...String(text || "浮生").slice(0, 4)]
    .map((char) => `<span class="seal-char">${escapeHtml(char)}</span>`)
    .join("");
}

function getStamp(id = activeStampId) {
  const targetId = id === "stamp-physical" ? "stamp-fusheng" : id;
  return normalizeStamp(stamps.find((stamp) => stamp.id === targetId) || stamps.find(s => s.id === activeStampId) || stamps[0] || defaultStamps[0]);
}

function stampMarkup(stamp, className = "seal", seedKey = "") {
  const safeStamp = normalizeStamp(stamp);
  const count = [...safeStamp.text].length;
  const seed = `${safeStamp.seed}:${safeStamp.id}:${seedKey}`;
  const rot = ((hashString(seed) % 36) - 18) / 10;
  const x = seededPercent(seed, 1);
  const y = seededPercent(seed, 2);

  if (safeStamp.type === "image" && safeStamp.url) {
    return `
      <div class="${className} seal seal-image-type" 
        style="--seal-rot:${rot}deg;--seal-x:${x}%;--seal-y:${y}%">
        <img src="${safeStamp.url}" alt="${escapeHtml(safeStamp.text)}" />
      </div>
    `;
  }

  return `
    <div class="${className} seal ${safeStamp.shape} ${safeStamp.style} carving-${safeStamp.carving} chars-${Math.min(4, count)}"
      style="--seal-color:${safeStamp.color};--seal-x:${x}%;--seal-y:${y}%;--seal-rot:${rot}deg">
      <span class="seal-edge" aria-hidden="true"></span>
      <span class="seal-grid">${sealChars(safeStamp.text)}</span>
      <span class="seal-wear" aria-hidden="true"></span>
    </div>
  `;
}

function brandMark(compact = false) {
  return `
    <div class="brand-block ${compact ? "compact" : ""}">
      <div class="brand-cn">浮生录</div>
      <div class="brand-en">Fu Sheng Lu</div>
    </div>
  `;
}

function iconButton(label, action, extra = "") {
  return `<button class="icon-button ${extra}" data-action="${action}" aria-label="${escapeHtml(label)}">${label}</button>`;
}

function createDraft(entry) {
  if (entry) return clone(entry);
  const now = Date.now();
  return {
    id: uid("entry"),
    title: "",
    category: "随笔",
    source: "",
    dateLabel: formatDateLabel(now),
    timeLabel: formatTimeLabel(now),
    content: "",
    image: ASSET.mountain,
    imageType: "ink",
    handwritingImage: "",
    font: "kai",
    layout: "vertical",
    stampId: activeStampId,
    stampSeed: uid("seal"),
    favorite: false,
    createdAt: now
  };
}

function render() {
  app.dataset.fontTheme = activeFontThemeId;
  const view = state.view;
  const screenFunc = {
    quote: renderQuote,
    record: renderRecord,
    search: renderSearch,
    profile: renderProfile,
    detail: renderDetail,
    editor: renderEditor
  }[view];
  
  const content = screenFunc?.() || renderRecord();
  
  // Surgical update: only re-render if the view container doesn't exist or is different
  // This prevents the 'flicker' caused by replacing the entire screen shell every time.
  const currentScreen = app.querySelector(".screen");
  const isTransitioning = state.dailyTurning;
  
  if (currentScreen && currentScreen.dataset.view === view && isTransitioning) {
    const stack = app.querySelector(".daily-stack");
    if (stack) {
      stack.className = `daily-stack ${state.dailyTurning ? "daily-turning" : ""}`;
    }
  } else {
    app.innerHTML = content;
    hydrateTextareas();
  }
}

function renderShell(content, activeNav = state.view, className = "") {
  return `
    <section class="screen fade-in ${className}" data-view="${activeNav}">
      ${renderAtmosphere(activeNav)}
      ${content}
      ${renderBottomNav(activeNav)}
    </section>
  `;
}

function renderAtmosphere(view = "record") {
  return `
    <div class="literati-scene scene-${view}" aria-hidden="true">
      <span class="scene-mountain"></span>
      <span class="scene-plum"></span>
      <span class="scene-bamboo"></span>
      <span class="scene-orchid"></span>
      <span class="scene-chrysanthemum"></span>
    </div>
  `;
}

function renderQuote() {
  const dailyEntries = sortedEntries();
  const count = dailyEntries.length;
  const currIndex = state.dailyIndex % Math.max(1, count);
  const nextIndex = (currIndex + 1) % Math.max(1, count);
  
  const entry = dailyEntries[currIndex] || normalizeEntry(seedEntries[0]);
  const nextEntry = dailyEntries[nextIndex] || entry;
  const turning = state.dailyTurning;

  return renderShell(`
    <header class="quiet-top">
      ${brandMark()}
    </header>
    <main class="daily-stage">
      <div class="daily-cat" aria-hidden="true">
        <img src="${ASSET.cat}" alt="" />
      </div>
      <section class="daily-stack ${turning ? "daily-turning" : ""}" data-action="next-daily" aria-label="下一页">
        <article class="daily-paper daily-paper-back back-three" aria-hidden="true"></article>
        <article class="daily-paper daily-paper-back back-two" aria-hidden="true"></article>
        
        <article class="daily-paper daily-paper-next" aria-hidden="true">
          <div class="daily-kicker">下一笺</div>
          <p>${escapeHtml(firstSentence(nextEntry.content))}</p>
          <small>— ${escapeHtml(nextEntry.source || nextEntry.category)}</small>
        </article>

        <article class="daily-paper daily-paper-current">
          <div class="tear-corner" aria-hidden="true"></div>
          <div class="daily-kicker">每日一言</div>
          <p>${escapeHtml(firstSentence(entry.content))}</p>
          <small>— ${escapeHtml(entry.source || entry.category)}</small>
          ${stampMarkup(getStamp(entry.stampId), "daily-seal", entry.stampSeed)}
          <button class="tear-next" data-action="next-daily" aria-label="下一页"></button>
        </article>
      </section>
      <div class="daily-save">轻触纸角，换下一笺</div>
    </main>
  `, "quote", "quote-screen");
}

function renderRecord() {
  const filtered = entriesForCurrentCategory();
  return renderShell(`
    <header class="topbar">
      ${brandMark()}
      <div class="icon-row">
        ${iconButton("⌕", "go-search")}
        ${iconButton("+", "new-entry", "strong")}
      </div>
    </header>
    <main class="content record-content">
      ${renderTabs()}
      ${filtered.length ? `<section class="note-list">${filtered.map(renderNoteRow).join("")}</section>` : renderEmptyState("还没有留下句子")}
    </main>
  `, "record");
}

function renderSearch() {
  const q = state.search.trim();
  const results = q
    ? sortedEntries().filter((entry) => `${entry.title} ${entry.content} ${entry.source} ${entry.category}`.includes(q))
    : sortedEntries();
  return renderShell(`
    <header class="topbar">
      ${brandMark(true)}
      ${iconButton("+", "new-entry", "strong")}
    </header>
    <main class="content search-content">
      <label class="search-field">
        <span>⌕</span>
        <input data-field="search" value="${escapeHtml(state.search)}" placeholder="搜一句话、出处或题名" />
      </label>
      ${results.length ? `<section class="note-list">${results.map(renderNoteRow).join("")}</section>` : renderEmptyState("没有相合的句子")}
    </main>
  `, "search");
}

function renderProfile() {
  if (!state.stampDraft) state.stampDraft = clone(getStamp(activeStampId));
  const draft = normalizeStamp(state.stampDraft);
  const theme = THEME_FONTS.find((item) => item.id === activeFontThemeId) || THEME_FONTS[0];
  const promptSealText = String(state.promptSealText || "").slice(0, 8);
  const promptText = buildSealPrompt(draft, promptSealText);
  const promptExpanded = Boolean(state.promptExpanded);

  return renderShell(`
    <header class="topbar">
      ${brandMark()}
      <button class="text-button" data-action="save-stamp">收好</button>
    </header>
    <main class="content profile-content">
      
      <div class="profile-hero">
        <div class="profile-seal-wrap">
          ${stampMarkup(draft, "stamp-preview", draft.seed)}
        </div>
        <div class="profile-hero-input">
          <label for="seal-text">印文</label>
          <input id="seal-text" class="underlined-input" data-field="stamp.text" value="${escapeHtml(draft.text)}" maxlength="4" />
        </div>
      </div>

      <section class="config-section custom-seal-section">
        <div class="config-header">
          <h3>自定义实物印章</h3>
          <span>AI 绘图辅助</span>
        </div>
        
        <div class="prompt-box">
          <label class="prompt-input-row" for="prompt-seal-text">
            <span>想刻的字</span>
            <input id="prompt-seal-text" class="underlined-input" data-field="promptSealText" value="${escapeHtml(promptSealText)}" maxlength="8" placeholder="例如：清风、闲章、姓名" />
          </label>
          <button class="prompt-toggle" data-action="toggle-prompt" aria-expanded="${promptExpanded ? "true" : "false"}">
            <span>${promptExpanded ? "收起提示词" : "展开提示词"}</span>
            <b aria-hidden="true">${promptExpanded ? "−" : "+"}</b>
          </button>
          <div class="prompt-preview ${promptExpanded ? "expanded" : "collapsed"}">
            <p class="prompt-text">${escapeHtml(promptText)}</p>
          </div>
          <div class="prompt-actions">
            <button class="ghost-button" data-action="copy-prompt" ${promptSealText.trim() ? "" : "disabled"}>复制提示词</button>
            <button class="primary-button" data-action="upload-seal-image">上传生成的印章</button>
          </div>
        </div>
        <p class="hint-text">有喜欢的印章样式时，先把参考图上传到 AI 绘图工具，再复制这段提示词一起生成；完成后在此处上传即可替换。</p>
      </section>

      <section class="config-section">
        <div class="config-header">
          <h3>全局字风</h3>
          <span>${escapeHtml(theme.name)}</span>
        </div>
        
        <div class="config-row vertical-flow">
          <div class="config-options grid-options">
            ${THEME_FONTS.map((font) => `
              <button class="grid-card ${activeFontThemeId === font.id ? "active" : ""}" data-action="theme-font" data-theme="${font.id}" style="--sample-font:${font.stack}">
                <strong style="font-family: var(--sample-font)">${font.name}</strong>
                <small>${font.note}</small>
              </button>
            `).join("")}
          </div>
        </div>
      </section>

    </main>
  `, "profile", "profile-screen");
}

function renderDetail() {
  const entry = entries.find((item) => item.id === state.detailId) || entries[0];
  if (!entry) return renderRecord();
  const stamp = getStamp(entry.stampId);
  const vertical = entry.layout !== "horizontal";
  return `
    <section class="screen detail-screen fade-in" data-view="detail">
      ${renderAtmosphere("detail")}
      <img class="mood-wash ${entry.imageType === "photo" ? "photo" : "ink"}" src="${entry.image}" alt="" />
      <header class="detail-top">
        ${iconButton("‹", "back-from-detail")}
        <div class="detail-actions-top">
          <button class="icon-button ${entry.favorite ? "active" : ""}" data-action="toggle-favorite" aria-label="收藏">◇</button>
          ${iconButton("⎗", "export-entry")}
          ${iconButton("⋯", "edit-entry")}
        </div>
      </header>
      <main class="detail-canvas ${vertical ? "vertical" : "horizontal"}">
        <article class="detail-text ${vertical ? "detail-vertical" : "detail-horizontal"} font-${entry.font}">
          ${vertical ? verticalColumns(entry.content) : escapeHtml(entry.content)}
        </article>
        <aside class="detail-source">
          <b>${escapeHtml(entry.source || entry.category)}</b>
        </aside>
        ${entry.handwritingImage ? `<img class="legacy-handwriting" src="${entry.handwritingImage}" alt="手写照片" />` : ""}
        <div class="detail-seal-wrap">
          ${stampMarkup(stamp, "detail-seal", entry.stampSeed)}
        </div>
      </main>
    </section>
  `;
}

function renderEditor() {
  const draft = state.draft || createDraft();
  const stamp = getStamp(draft.stampId);
  return `
    <section class="screen editor-screen fade-in" data-view="editor">
      ${renderAtmosphere("editor")}
      <header class="editor-top">
        <button class="text-button" data-action="${state.editingId ? "back-from-editor" : "go-record"}">取消</button>
        ${brandMark(true)}
        <button class="text-button" data-action="save-entry">保存</button>
      </header>
      <main class="editor-content">
        <article class="paper-stack">
          <div class="field-row">
            <input class="plain-input title-input" data-field="draft.title" value="${escapeHtml(draft.title)}" placeholder="题名" />
            <select class="plain-select" data-field="draft.category">
              ${CATEGORIES.map((category) => `<option value="${category}" ${draft.category === category ? "selected" : ""}>${category}</option>`).join("")}
            </select>
          </div>
          <input class="plain-input source-input" data-field="draft.source" value="${escapeHtml(draft.source)}" placeholder="出处" />
          <textarea class="plain-textarea font-${draft.font} ${draft.layout === "vertical" ? "writing-preview" : ""}" data-field="draft.content" placeholder="浮生若梦，为欢几何。">${escapeHtml(draft.content)}</textarea>
          <div class="editor-seal-line">
            <span>共 ${[...draft.content.trim()].length} 字</span>
            ${stampMarkup(stamp, "editor-seal", draft.stampSeed)}
          </div>
        </article>
      </main>
      <nav class="editor-toolbar">
        <button data-action="sheet-image">景</button>
        <button data-action="sheet-font">字</button>
        <button data-action="sheet-layout">排</button>
        <button data-action="go-profile">印</button>
        <button data-action="save-entry">存</button>
        ${state.editingId ? `<button data-action="delete-entry" class="danger">删</button>` : ""}
      </nav>
      ${renderToolSheet()}
    </section>
  `;
}

function renderToolSheet() {
  if (!state.sheet) return "";
  const draft = state.draft || createDraft();

  if (state.sheet === "image") {
    return `
      <section class="tool-sheet open">
        <div class="sheet-head">
          <span>意境</span>
          <button data-action="close-sheet">收起</button>
        </div>
        <div class="image-choice-list">
          ${IMAGE_CHOICES.map((item) => `
            <button class="image-choice ${draft.image === item.path ? "active" : ""}" data-action="choose-image" data-path="${item.path}" data-type="${item.type}">
              <img src="${item.path}" alt="" />
              <span>${item.name}</span>
            </button>
          `).join("")}
          <button class="image-choice upload" data-action="upload-image">上传</button>
        </div>
      </section>
    `;
  }

  if (state.sheet === "font") {
    return `
      <section class="tool-sheet open">
        <div class="sheet-head">
          <span>字感</span>
          <button data-action="close-sheet">收起</button>
        </div>
        <div class="choice-grid">
          ${ENTRY_FONT_CHOICES.map((font) => `<button class="soft-choice ${draft.font === font.id ? "active" : ""}" data-action="choose-font" data-font="${font.id}">${font.name}</button>`).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="tool-sheet open">
      <div class="sheet-head">
        <span>排版</span>
        <button data-action="close-sheet">收起</button>
      </div>
      <div class="choice-grid">
        <button class="soft-choice ${draft.layout === "vertical" ? "active" : ""}" data-action="choose-layout" data-layout="vertical">竖排</button>
        <button class="soft-choice ${draft.layout === "horizontal" ? "active" : ""}" data-action="choose-layout" data-layout="horizontal">横排</button>
      </div>
    </section>
  `;
}

function renderTabs() {
  return `
    <nav class="tabs" aria-label="分类">
      ${CATEGORIES.map((category) => `
        <button class="tab ${state.selectedCategory === category ? "active" : ""}" data-action="set-category" data-category="${category}">
          ${category}
        </button>
      `).join("")}
    </nav>
  `;
}

function renderNoteRow(entry) {
  const stamp = getStamp(entry.stampId);
  const content = firstSentence(entry.content);
  return `
    <article class="note-row" data-action="open-detail" data-id="${entry.id}">
      <div class="note-main">
        <p>${escapeHtml(content)}</p>
        <small>— ${escapeHtml(entry.source || entry.category)}</small>
      </div>
      <div class="note-side">
        ${entry.favorite ? `<span class="note-favorite" aria-label="已标记">◇</span>` : ""}
        ${entry.image ? stampMarkup(stamp, "micro-seal", entry.stampSeed) : ""}
        <time>${escapeHtml(entry.dateLabel)}</time>
      </div>
    </article>
  `;
}

function renderEmptyState(text) {
  return `
    <div class="empty-state">
      <img src="${ASSET.empty}" alt="" />
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function renderBottomNav(active) {
  const items = [
    ["quote", "一言", "〇"],
    ["record", "记录", "☰"],
    ["profile", "我的", "印"]
  ];
  return `
    <nav class="bottom-nav" aria-label="主导航">
      ${items.map(([view, text, icon]) => `
        <button class="nav-item ${active === view ? "active" : ""}" data-action="go-${view}">
          <span>${icon}</span>
          <b>${text}</b>
        </button>
      `).join("")}
    </nav>
  `;
}

function sortedEntries() {
  return [...entries].sort((a, b) => b.createdAt - a.createdAt);
}

function entriesForCurrentCategory() {
  if (!CATEGORIES.includes(state.selectedCategory)) {
    state.selectedCategory = CATEGORIES[0];
  }
  return sortedEntries().filter((entry) => entry.category === state.selectedCategory);
}

function firstSentence(content) {
  const line = String(content || "").split(/\n/).find(Boolean) || "";
  return line.replace(/\s+/g, " ").trim();
}

function verticalColumns(content) {
  return String(content || "")
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => `<p>${escapeHtml(line.trim())}</p>`)
    .join("");
}

function hydrateTextareas() {
  document.querySelectorAll("textarea").forEach((textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.max(280, textarea.scrollHeight)}px`;
  });
}

function goView(view) {
  const next = ["quote", "record", "search", "profile"].includes(view) ? view : "record";
  state.view = next;
  state.detailId = null;
  state.sheet = null;
  state.draft = null;
  state.editingId = null;
  if (next !== "profile") state.stampDraft = null;
  render();
  if (next === "search") requestAnimationFrame(() => document.querySelector("[data-field='search']")?.focus());
}

function openDetail(id) {
  state.previousView = state.view;
  state.view = "detail";
  state.detailId = id;
  state.sheet = null;
  render();
}

function setCategory(category) {
  state.selectedCategory = category || CATEGORIES[0];
  render();
}

function nextDaily() {
  if (state.dailyFlipTimer || state.dailyTurning) return;
  const total = Math.max(1, entries.length);
  state.dailyTurning = true;
  
  // Trigger animation without full render
  const stack = app.querySelector(".daily-stack");
  if (stack) {
    stack.classList.add("daily-turning");
  } else {
    render();
  }

  state.dailyFlipTimer = setTimeout(() => {
    state.dailyIndex = (state.dailyIndex + 1) % total;
    state.dailyTurning = false;
    state.dailyFlipTimer = null;
    if (state.view === "quote") render();
  }, 640);
}

function openEditor(id) {
  const entry = entries.find((item) => item.id === id);
  state.previousView = state.view === "detail" ? "detail" : state.view;
  state.view = "editor";
  state.editingId = id || null;
  state.draft = createDraft(entry);
  state.sheet = null;
  render();
}

function backFromEditor() {
  if (state.editingId) {
    state.view = "detail";
    state.detailId = state.editingId;
  } else {
    state.view = "record";
  }
  state.sheet = null;
  state.draft = null;
  state.editingId = null;
  render();
}

function saveEntry() {
  if (!state.draft) return;
  const now = state.draft.createdAt || Date.now();
  const draft = normalizeEntry({
    ...state.draft,
    title: state.draft.title.trim() || titleFromContent(state.draft.content),
    content: state.draft.content.trim() || "未写完的话，也可以先留下。",
    source: state.draft.source.trim() || state.draft.category,
    stampId: state.draft.stampId || activeStampId,
    createdAt: now,
    dateLabel: state.draft.dateLabel || formatDateLabel(now),
    timeLabel: state.draft.timeLabel || formatTimeLabel(now)
  });

  const index = entries.findIndex((entry) => entry.id === draft.id);
  if (index >= 0) entries[index] = draft;
  else entries.unshift(draft);

  saveAll();
  state.view = "detail";
  state.detailId = draft.id;
  state.editingId = null;
  state.sheet = null;
  state.draft = null;
  showToast("已存入浮生录");
  render();
}

function deleteEntry() {
  const entry = entries.find((item) => item.id === state.detailId);
  if (!entry) return;
  if (!confirm(`删除《${entry.title || "未题"}》？`)) return;
  entries = entries.filter((item) => item.id !== entry.id);
  saveAll();
  showToast("已删除");
  goView("record");
}

function toggleFavorite() {
  const entry = entries.find((item) => item.id === state.detailId);
  if (!entry) return;
  entry.favorite = !entry.favorite;
  saveAll();
  showToast(entry.favorite ? "已标记" : "已取消标记");
  render();
}

function openSheet(sheet) {
  if (!state.draft) state.draft = createDraft();
  state.sheet = sheet;
  render();
}

function closeSheet() {
  state.sheet = null;
  render();
}

function chooseImage(path, type) {
  if (!state.draft) state.draft = createDraft();
  state.draft.image = path;
  state.draft.imageType = type === "photo" ? "photo" : "ink";
  render();
}

function uploadImage() {
  state.pendingFileTarget = "cover";
  fileInput.click();
}

function chooseFont(font) {
  if (!state.draft) state.draft = createDraft();
  state.draft.font = font;
  render();
}

function chooseThemeFont(theme) {
  activeFontThemeId = normalizeFontTheme(theme);
  saveAll();
  render();
}

function chooseLayout(layout) {
  if (!state.draft) state.draft = createDraft();
  state.draft.layout = layout === "horizontal" ? "horizontal" : "vertical";
  render();
}

function updateStampDraft(key, value) {
  if (!state.stampDraft) state.stampDraft = clone(getStamp(activeStampId));
  state.stampDraft[key] = value;
  render();
}

function saveStamp() {
  const draft = normalizeStamp({
    ...(state.stampDraft || getStamp(activeStampId)),
    seed: state.stampDraft?.seed || uid("stamp-seed")
  });
  const index = stamps.findIndex((stamp) => stamp.id === draft.id);
  if (index >= 0) stamps[index] = draft;
  else stamps.push({ ...draft, id: uid("stamp") });
  activeStampId = draft.id;
  entries = entries.map((entry) => entry.stampId ? entry : { ...entry, stampId: activeStampId });
  saveAll();
  showToast("印章已收好");
  render();
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toastEl.classList.remove("show"), 1500);
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Copy command failed");
}

async function copyText(text) {
  if (!text) throw new Error("Nothing to copy");
  if (!navigator.clipboard?.writeText) {
    fallbackCopyText(text);
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    fallbackCopyText(text);
  }
}

async function exportCurrentEntry() {
  const entry = entries.find((item) => item.id === state.detailId);
  if (!entry) return;
  try {
    const canvas = await renderEntryCanvas(entry);
    const link = document.createElement("a");
    link.download = `fusheng-${entry.title || "note"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("已导出图片");
  } catch (error) {
    console.error(error);
    showToast("导出失败");
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function renderEntryCanvas(entry) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1800;
  const ctx = canvas.getContext("2d");

  const paper = await loadImage(ASSET.paper);
  const pattern = ctx.createPattern(paper, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 252, 244, 0.52)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  await drawWatermark(ctx, entry, 0, 730, 1080, 900);

  ctx.fillStyle = "#2a2726";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (entry.layout === "horizontal") {
    ctx.font = `58px ${canvasFont(entry.font)}`;
    drawMultilineText(ctx, entry.content, 150, 520, 780, 90);
    ctx.font = `30px ${canvasFont("song")}`;
    ctx.fillStyle = "rgba(84, 76, 68, 0.82)";
    ctx.fillText(`— ${entry.source || entry.category}`, 540, 430);
  } else {
    ctx.font = `48px ${canvasFont(entry.font)}`;
    drawVerticalCanvasText(ctx, entry.content, 780, 310, 820, 78, 72);
    ctx.save();
    ctx.translate(248, 640);
    ctx.rotate(Math.PI / 2);
    ctx.font = `28px ${canvasFont("song")}`;
    ctx.fillStyle = "rgba(84, 76, 68, 0.74)";
    ctx.fillText(`— ${entry.source || entry.category}`, 0, 0);
    ctx.restore();
  }

  const stamp = getStamp(entry.stampId);
  if (stamp.type === "image" && stamp.url) {
    const img = await loadImage(stamp.url);
    ctx.save();
    ctx.translate(150 + 71, 1450 + 71);
    ctx.rotate((((hashString(`${stamp.seed}:${entry.stampSeed}`) % 30) - 15) / 10) * Math.PI / 180);
    ctx.globalAlpha = 0.92;
    ctx.globalCompositeOperation = "multiply";
    ctx.drawImage(img, -71, -71, 142, 142);
    ctx.restore();
  } else {
    drawStampOnCanvas(ctx, stamp, 150, 1450, 142, entry.stampSeed);
  }
  
  return canvas;
}

async function drawWatermark(ctx, entry, x, y, width, height) {
  const image = await loadImage(entry.image || ASSET.mountain);
  const scale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  ctx.save();
  ctx.globalAlpha = entry.imageType === "photo" ? 0.14 : 0.22;
  ctx.filter = entry.imageType === "photo"
    ? "grayscale(1) sepia(0.22) saturate(0.2) contrast(0.92)"
    : "grayscale(1) sepia(0.16) saturate(0.12) contrast(0.86)";
  const gradient = ctx.createLinearGradient(0, y, 0, y + height);
  gradient.addColorStop(0, "rgba(0,0,0,0)");
  gradient.addColorStop(0.22, "rgba(0,0,0,0.85)");
  gradient.addColorStop(0.82, "rgba(0,0,0,0.72)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
  ctx.restore();
  ctx.fillStyle = "rgba(247, 244, 239, 0.32)";
  ctx.fillRect(0, 0, 1080, 1800);
}

function canvasFont(font) {
  if (font === "song") return "'Songti SC', SimSun, serif";
  if (font === "ui") return "'PingFang SC', 'Microsoft YaHei', sans-serif";
  return "KaiTi, 'Kaiti SC', serif";
}

function drawMultilineText(ctx, text, x, y, maxWidth, lineHeight) {
  const paragraphs = String(text).split("\n");
  let cursorY = y;
  for (const paragraph of paragraphs) {
    if (!paragraph.trim()) {
      cursorY += lineHeight * 0.7;
      continue;
    }
    const lines = wrapText(ctx, paragraph, maxWidth);
    for (const line of lines) {
      ctx.fillText(line, x + maxWidth / 2, cursorY);
      cursorY += lineHeight;
    }
  }
}

function drawVerticalCanvasText(ctx, text, startX, startY, maxHeight, columnGap, lineHeight) {
  let x = startX;
  let y = startY;
  for (const char of [...String(text).replace(/\n/g, "　")]) {
    if (char === "　") {
      x -= columnGap;
      y = startY;
      continue;
    }
    if (y > startY + maxHeight) {
      x -= columnGap;
      y = startY;
    }
    ctx.fillText(char, x, y);
    y += lineHeight;
  }
}

function wrapText(ctx, text, maxWidth) {
  const chars = [...text];
  const lines = [];
  let line = "";
  for (const char of chars) {
    const next = line + char;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawStampOnCanvas(ctx, stamp, x, y, size, seedKey = "") {
  const safeStamp = normalizeStamp(stamp);
  const color = safeStamp.color || "#ad281f";
  const seed = hashString(`${safeStamp.id}:${seedKey}`);
  const width = safeStamp.shape === "rectangle" ? size * 1.28 : size;
  const outerLine = sealOuterLine(safeStamp.carving);
  const innerLine = safeStamp.carving === "slender" ? 0 : Math.max(0.8, outerLine * 0.26);
  ctx.save();
  ctx.translate(x + width / 2, y + size / 2);
  ctx.rotate((((seed % 30) - 15) / 10) * Math.PI / 180);
  ctx.translate(-width / 2, -size / 2);
  ctx.globalAlpha = 0.9;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  if (safeStamp.style === "yin") {
    roughRect(ctx, 0, 0, width, size, safeStamp.shape, seed);
    ctx.fill();
  }
  drawCarvedFrame(ctx, 0, 0, width, size, safeStamp.shape, seed, color, false, outerLine);
  if (innerLine) drawCarvedFrame(ctx, 15, 15, width - 30, size - 30, safeStamp.shape, seed + 7, color, true, innerLine);
  ctx.globalAlpha = 0.92;
  ctx.fillStyle = safeStamp.style === "yin" ? "#f8efe4" : color;
  ctx.font = `800 ${Math.round(size * sealFontScale(safeStamp.carving))}px ${sealCanvasFont(safeStamp.carving)}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const chars = [...safeStamp.text.slice(0, 4)];
  const cells = chars.length <= 2
    ? chars.map((char, index) => ({ char, cx: width / 2, cy: size * (0.32 + index * 0.36) }))
    : chars.map((char, index) => ({ char, cx: width * (index % 2 === 0 ? 0.34 : 0.66), cy: size * (index < 2 ? 0.34 : 0.66) }));
  for (const cell of cells) {
    ctx.save();
    ctx.translate(cell.cx, cell.cy);
    ctx.scale(sealXScale(safeStamp.carving), sealYScale(safeStamp.carving));
    ctx.fillText(cell.char, 0, 0);
    ctx.restore();
  }
  drawSealWear(ctx, width, size, seed);
  ctx.restore();
}

function sealOuterLine(carving) {
  if (carving === "slender") return 1.9;
  if (carving === "yuanzhu") return 2.4;
  if (carving === "bold" || carving === "baiwen") return 5.6;
  if (carving === "guxi") return 4.2;
  return 3.8;
}

function sealFontScale(carving) {
  if (carving === "yuanzhu" || carving === "slender") return 0.27;
  if (carving === "birdworm") return 0.33;
  if (carving === "bold" || carving === "baiwen") return 0.34;
  return 0.31;
}

function sealCanvasFont(carving) {
  if (carving === "birdworm") return "STXingkai, FZShuTi, KaiTi, serif";
  if (carving === "yuanzhu" || carving === "slender") return "'Songti SC', SimSun, serif";
  return "LiSu, STLiti, STXingkai, 'Songti SC', SimSun, serif";
}

function sealXScale(carving) {
  if (carving === "birdworm") return 0.62;
  if (carving === "yuanzhu" || carving === "slender") return 0.74;
  return 0.72;
}

function sealYScale(carving) {
  if (carving === "birdworm") return 1.55;
  if (carving === "bold" || carving === "baiwen") return 1.34;
  return 1.38;
}

function drawCarvedFrame(ctx, x, y, width, height, shape, seed, color, inner = false, lineWidth = inner ? 3 : 8) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "square";
  ctx.lineJoin = "miter";
  ctx.globalAlpha = inner ? 0.42 : 0.88;
  if (shape === "circle") {
    ctx.beginPath();
    ctx.arc(x + width / 2, y + height / 2, Math.min(width, height) / 2 - ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    return;
  }
  roughLine(ctx, x, y, x + width, y, seed + 1);
  roughLine(ctx, x + width, y, x + width, y + height, seed + 2);
  roughLine(ctx, x + width, y + height, x, y + height, seed + 3);
  roughLine(ctx, x, y + height, x, y, seed + 4);
  ctx.restore();
}

function roughLine(ctx, x1, y1, x2, y2, seed) {
  const steps = 5;
  ctx.beginPath();
  ctx.moveTo(x1 + jitter(seed, 1), y1 + jitter(seed, 2));
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const x = x1 + (x2 - x1) * t + jitter(seed, i * 3);
    const y = y1 + (y2 - y1) * t + jitter(seed, i * 3 + 1);
    ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function drawSealWear(ctx, width, height, seed) {
  ctx.save();
  ctx.fillStyle = "rgba(248, 241, 230, 0.72)";
  ctx.globalCompositeOperation = "source-over";
  for (let i = 0; i < 46; i++) {
    const x = (hashString(`${seed}:wear-x:${i}`) % 1000) / 1000 * width;
    const y = (hashString(`${seed}:wear-y:${i}`) % 1000) / 1000 * height;
    const r = 0.6 + (hashString(`${seed}:wear-r:${i}`) % 24) / 10;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 0.82;
  for (let i = 0; i < 10; i++) {
    const side = hashString(`${seed}:chip-side:${i}`) % 4;
    const span = 4 + (hashString(`${seed}:chip-span:${i}`) % 9);
    const depth = 1.5 + (hashString(`${seed}:chip-depth:${i}`) % 7) / 2;
    const t = (hashString(`${seed}:chip-t:${i}`) % 1000) / 1000;
    if (side === 0) ctx.fillRect(width * t, -1, span, depth);
    if (side === 1) ctx.fillRect(width - depth + 1, height * t, depth, span);
    if (side === 2) ctx.fillRect(width * t, height - depth + 1, span, depth);
    if (side === 3) ctx.fillRect(-1, height * t, depth, span);
  }
  ctx.restore();
}

function jitter(seed, value) {
  return ((hashString(`${seed}:${value}`) % 13) - 6) * 0.42;
}

function roughRect(ctx, x, y, width, height, shape, seed) {
  if (shape === "circle") {
    ctx.beginPath();
    ctx.arc(x + width / 2, y + height / 2, Math.min(width, height) / 2, 0, Math.PI * 2);
    return;
  }
  const n = (value) => ((hashString(`${seed}:${value}`) % 9) - 4) * 0.7;
  ctx.beginPath();
  ctx.moveTo(x + n(1), y + n(2));
  ctx.lineTo(x + width + n(3), y + n(4));
  ctx.lineTo(x + width + n(5), y + height + n(6));
  ctx.lineTo(x + n(7), y + height + n(8));
  ctx.closePath();
}

// --- Initialization ---

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action.startsWith("go-")) return goView(action.replace("go-", ""));
  if (action === "open-detail") return openDetail(target.dataset.id);
  if (action === "next-daily") return nextDaily();
  if (action === "back-from-detail") return goView(state.previousView || "record");
  if (action === "back-from-editor") return backFromEditor();
  if (action === "set-category") return setCategory(target.dataset.category);
  if (action === "new-entry") return openEditor();
  if (action === "edit-entry") return openEditor(state.detailId);
  if (action === "save-entry") return saveEntry();
  if (action === "delete-entry") return deleteEntry();
  if (action === "toggle-favorite") return toggleFavorite();
  if (action === "export-entry") return exportCurrentEntry();
  if (action === "sheet-image") return openSheet("image");
  if (action === "sheet-font") return openSheet("font");
  if (action === "sheet-layout") return openSheet("layout");
  if (action === "close-sheet") return closeSheet();
  if (action === "choose-image") return chooseImage(target.dataset.path, target.dataset.type);
  if (action === "upload-image") return uploadImage();
  if (action === "choose-font") return chooseFont(target.dataset.font);
  if (action === "choose-layout") return chooseLayout(target.dataset.layout);
  if (action === "theme-font") return chooseThemeFont(target.dataset.theme);
  if (action === "stamp-shape") return updateStampDraft("shape", target.dataset.shape);
  if (action === "stamp-style") return updateStampDraft("style", target.dataset.style);
  if (action === "stamp-carving") return updateStampDraft("carving", target.dataset.carving);
  if (action === "stamp-color") return updateStampDraft("color", target.dataset.color);
  if (action === "save-stamp") return saveStamp();
  if (action === "upload-seal-image") {
    state.pendingFileTarget = "seal";
    fileInput.click();
    return;
  }
  if (action === "toggle-prompt") {
    state.promptExpanded = !state.promptExpanded;
    render();
    return;
  }
  if (action === "copy-prompt") {
    const promptSealText = String(state.promptSealText || "").trim();
    if (!promptSealText) {
      showToast("请先输入想刻的字");
      return;
    }
    const prompt = buildSealPrompt(state.stampDraft || getStamp(activeStampId), promptSealText);
    copyText(prompt).then(() => showToast("已复制提示词")).catch(() => showToast("复制失败"));
    return;
  }
});

app.addEventListener("input", (event) => {
  const field = event.target.dataset.field;
  if (!field) return;

  if (field === "search") {
    state.search = event.target.value;
    return;
  }

  if (field === "promptSealText") {
    state.promptSealText = event.target.value.slice(0, 8);
    const promptBox = event.target.closest(".prompt-box");
    const promptText = promptBox?.querySelector(".prompt-text");
    const copyButton = promptBox?.querySelector('[data-action="copy-prompt"]');
    if (promptText) promptText.textContent = buildSealPrompt(state.stampDraft || getStamp(activeStampId), state.promptSealText);
    if (copyButton) copyButton.disabled = !state.promptSealText.trim();
    return;
  }

  if (field.startsWith("draft.")) {
    if (!state.draft) state.draft = createDraft();
    state.draft[field.split(".")[1]] = event.target.value;
    if (event.target.tagName === "TEXTAREA") hydrateTextareas();
    return;
  }

  if (field.startsWith("stamp.")) {
    if (!state.stampDraft) state.stampDraft = clone(getStamp(activeStampId));
    state.stampDraft[field.split(".")[1]] = event.target.value.slice(0, 4);
  }
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files && fileInput.files[0];
  if (!file || !["cover", "handwriting", "seal"].includes(state.pendingFileTarget)) return;
  const reader = new FileReader();
  reader.onload = () => {
    if (state.pendingFileTarget === "seal") {
      if (!state.stampDraft) state.stampDraft = clone(getStamp(activeStampId));
      state.stampDraft.type = "image";
      state.stampDraft.url = reader.result;
      saveStamp();
    } else {
      if (!state.draft) state.draft = createDraft();
      if (state.pendingFileTarget === "cover") {
        state.draft.image = reader.result;
        state.draft.imageType = "photo";
      }
      if (state.pendingFileTarget === "handwriting") {
        state.draft.handwritingImage = reader.result;
      }
      render();
    }
    state.pendingFileTarget = null;
    fileInput.value = "";
  };
  reader.readAsDataURL(file);
});

let entries = loadEntries();
let stamps = loadStamps();

let activeStampId = localStorage.getItem(STORAGE.activeStamp)
  || localStorage.getItem(LEGACY_STORAGE.activeStamp)
  || stamps[0].id;

const builtInStamp = clone(defaultStamps[0]);
const legacyStampIds = new Set(["stamp-physical", "stamp-fusheng"]);
stamps = [
  builtInStamp,
  ...stamps.filter((stamp) => !legacyStampIds.has(stamp.id) && stamp.text !== "汪禹辰")
];
activeStampId = "stamp-fusheng";
entries = entries.map((entry) => ({ ...entry, stampId: "stamp-fusheng" }));

let activeFontThemeId = normalizeFontTheme(localStorage.getItem(STORAGE.fontTheme));

if (!stamps.some((stamp) => stamp.id === activeStampId)) {
  activeStampId = stamps[0].id;
}

saveAll();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

render();

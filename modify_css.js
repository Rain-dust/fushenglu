const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// 1. Update variables
css = css.replace(/:root \{[\s\S]*?\}/, `:root {
  --paper: #F7F4EF;
  --paper-deep: #ede3d4;
  --paper-card: rgba(255, 252, 246, 0.85);
  --ink: #2A2726;
  --ink-soft: #5E5855;
  --ink-faint: #9b9287;
  --line: rgba(38, 31, 25, 0.12);
  --seal: #AD281F;
  --seal-dark: #8B1C15;
  --shadow: 1px 1px 0px rgba(0, 0, 0, 0.05);
  --font-song: 'NotoSerifSC-Regular', 'Songti SC', 'Noto Serif SC', 'SimSun', serif;
  --font-kai: 'LXGWWenKai-Regular', 'Kaiti SC', 'STKaiti', 'KaiTi', serif;
  --font-ui: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}`);

// 2. Floating Add button
css = css.replace(/\.floating-add \{[\s\S]*?\}/, `.floating-add {
  position: absolute;
  z-index: 4;
  right: 24px;
  bottom: 84px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--seal-dark);
  background: transparent;
  border: 1px solid rgba(139, 28, 21, 0.3);
  box-shadow: none;
  font-size: 30px;
  opacity: 0.8;
}`);

// 3. Bookmark card
css = css.replace(/\.bookmark-card \{[\s\S]*?\}/, `.bookmark-card {
  position: relative;
  min-height: 380px;
  padding: 24px 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  overflow: hidden;
  background: var(--paper-card) url('./assets/textures/paper_texture_warm.png') center / 560px repeat;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 160ms ease;
}`);

css = css.replace(/\.bookmark-card\.has-handwriting \{[\s\S]*?\}/, `.bookmark-card.has-handwriting {
  /* handled by flex layout */
}`);

// 4. Card art
css = css.replace(/\.card-art \{[\s\S]*?\}/, `.card-art {
  min-height: 100px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: rgba(238, 228, 211, 0.32);
}`);

css = css.replace(/\.tile-handwriting \{[\s\S]*?\}/, `.tile-handwriting {
  min-height: 60px;
  border-radius: 2px;
  overflow: hidden;
  background: rgba(250, 247, 240, 0.72);
  border: 1px solid rgba(70, 55, 42, 0.1);
}`);

// 5. Card text
css = css.replace(/\.card-text \{[\s\S]*?\}/, `.card-text {
  flex: 1;
  font-family: var(--font-kai);
  font-size: 18px;
  line-height: 1.9;
  letter-spacing: 0.05em;
  color: var(--ink);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  max-height: 280px;
  margin: 0 auto;
  overflow: hidden;
}`);

// 6. Immersive Detail Page
css = css.replace(/\.detail-paper \{[\s\S]*?\}/, `.detail-paper {
  border-radius: 0;
  overflow: visible;
  background: transparent;
  border: 0;
  box-shadow: none;
  width: 80%;
  margin: 0 auto;
}`);

css = css.replace(/\.detail-content \{[\s\S]*?\}/, `.detail-content {
  padding: 0 0 112px;
  background: url('./assets/textures/paper_texture_base.png') center / 720px repeat;
  width: 100%;
}`);

css = css.replace(/\.hero-image \{[\s\S]*?\}/, `.hero-image {
  width: 100%;
  aspect-ratio: 1 / 1.2;
  border-radius: 2px;
  overflow: hidden;
  background: rgba(236, 226, 211, 0.5);
  -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent);
  mask-image: linear-gradient(to bottom, black 85%, transparent);
}`);

css = css.replace(/\.detail-actions \{[\s\S]*?\}/, `.detail-actions {
  position: absolute;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  bottom: 32px;
  height: 48px;
  display: flex;
  gap: 24px;
  align-items: center;
  background: transparent;
  border: none;
  box-shadow: none;
}`);

css = css.replace(/\.detail-action \{[\s\S]*?\}/, `.detail-action {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  background: rgba(255, 252, 246, 0.3);
  padding: 0 12px;
  border-radius: 2px;
}`);

// 7. Immersive Editor Page
css = css.replace(/\.editor-card \{[\s\S]*?\}/, `.editor-card {
  position: relative;
  margin-top: 2px;
  border: none;
  border-radius: 0;
  overflow: visible;
  background: transparent;
  box-shadow: none;
}`);

css = css.replace(/\.editor-cover \{[\s\S]*?\}/, `.editor-cover {
  position: relative;
  height: 280px;
  background: transparent;
  overflow: hidden;
  -webkit-mask-image: radial-gradient(circle, black 60%, transparent 100%);
  mask-image: radial-gradient(circle, black 60%, transparent 100%);
}`);

css = css.replace(/\.search-panel input,\s*\.plain-input,\s*\.plain-select,\s*\.plain-textarea \{[\s\S]*?\}/, `.search-panel input,
.plain-input,
.plain-select,
.plain-textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 2px;
  background: transparent;
  color: var(--ink);
  outline: none;
  caret-color: var(--seal-dark);
}`);

css = css.replace(/\.plain-input,\s*\.plain-select \{[\s\S]*?\}/, `.plain-input,
.plain-select {
  height: 45px;
  padding: 0 13px;
  border: none;
  border-bottom: 1px dashed var(--line);
  background: transparent;
}`);

css = css.replace(/\.plain-textarea \{[\s\S]*?\}/, `.plain-textarea {
  min-height: 275px;
  resize: none;
  padding: 12px 13px;
  line-height: 1.9;
  font-family: var(--font-kai);
  font-size: 21px;
  border: none;
  background: transparent;
  color: var(--ink);
}`);

// 8. Seal styles
css = css.replace(/\.soft-button\.active,\s*\.choice\.active \{[\s\S]*?\}/, `.soft-button.active,
.choice.active {
  color: var(--seal);
  background: transparent;
  border-color: transparent;
}`);

css = css.replace(/\.small-button,\s*\.soft-button,\s*\.primary-button \{[\s\S]*?\}/, `.small-button,
.soft-button,
.primary-button {
  min-height: 38px;
  border-radius: 2px;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--line);
  background: rgba(255, 252, 246, 0.54);
  color: var(--ink-soft);
  position: relative;
}`);

css += `
.soft-button.active::after {
  content: "◯";
  position: absolute;
  color: var(--seal);
  font-size: 10px;
  top: 4px;
  right: 4px;
}
`;

fs.writeFileSync('styles.css', css);
console.log('CSS transformed successfully.');

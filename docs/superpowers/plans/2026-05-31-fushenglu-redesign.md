# 浮生录 Frontend Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing Moji PWA into “浮生录”, a quiet ink-wash Chinese literary accumulation notebook.

**Architecture:** Keep the no-framework PWA and localStorage model, but replace the bookmark-wall UI with a note-list information architecture, immersive vertical detail view, restrained editor, stable seal rendering, and matching PNG export. Preserve old `moji.*` localStorage by migrating it into `fusheng.*`.

**Tech Stack:** Plain HTML, CSS, JavaScript, localStorage, Canvas export, existing static image assets.

---

### Task 1: Brand, Data, and Routing

**Files:**
- Modify: `index.html`
- Modify: `manifest.webmanifest`
- Modify: `sw.js`
- Modify: `app.js`

- [ ] Rename visible product text and PWA metadata from “墨记” to “浮生录 / Fu Sheng Lu”.
- [ ] Add `fusheng.entries.v1`, `fusheng.stamps.v1`, and `fusheng.activeStamp.v1` storage keys.
- [ ] Migrate legacy `moji.*.v1` data on first load.
- [ ] Replace old route names with: `quote`, `record`, `saved`, `search`, `profile`, `detail`, and `editor`.

### Task 2: 素笺列表 Home

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

- [ ] Replace bookmark-grid/card markup with line-based `.note-list`.
- [ ] Each row shows quote excerpt, source, date, and a tiny mood indicator when an image exists.
- [ ] Keep category tabs: 全部、笔记、句子、诗词、随笔.
- [ ] Make “记录” the default bottom-nav section.

### Task 3: Immersive Detail

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

- [ ] Render detail pages as full-paper surfaces with a low-opacity image watermark.
- [ ] Default to vertical right-to-left typesetting.
- [ ] Place the stable red personal seal as the visual signature.
- [ ] Keep back, favorite, edit, export, and delete actions as quiet icon controls.

### Task 4: 落笔成文 Editor

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

- [ ] Replace the image-card editor with a paper-stack writing surface.
- [ ] Support content, source, category, font, layout, image, seal, save.
- [ ] Keep handwriting data compatibility but hide handwriting upload from the main toolbar.

### Task 5: Seal and Export

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

- [ ] Make seal texture deterministic using entry/stamp seed keys.
- [ ] Upgrade seal styling toward a Chinese literary square seal.
- [ ] Update canvas export to match the vertical detail page and watermark treatment.

### Task 6: Verification

**Files:**
- Modify: `qa-smoke.js`
- Modify: `qa-runner.html`

- [ ] Update smoke checks to assert note-list, vertical detail, editor, profile seal, saved, and search.
- [ ] Run `npm.cmd run check`.
- [ ] Run local server and open the UI for visual review.

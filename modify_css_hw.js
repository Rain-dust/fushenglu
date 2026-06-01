const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(/\.handwriting-photo \{[\s\S]*?\}/, `.handwriting-photo {
  position: relative;
  border: none;
  border-radius: 0;
  overflow: hidden;
  background: transparent;
  -webkit-mask-image: radial-gradient(circle, black 60%, transparent 100%);
  mask-image: radial-gradient(circle, black 60%, transparent 100%);
}`);

css = css.replace(/\.handwriting-photo::after \{[\s\S]*?\}/, `.handwriting-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: url('./assets/textures/paper_fiber_overlay.png') center / 520px repeat;
  opacity: 0.18;
}`);

css = css.replace(/\.handwriting-photo img \{[\s\S]*?\}/, `.handwriting-photo img {
  width: 100%;
  display: block;
  max-height: 260px;
  object-fit: contain;
  filter: grayscale(0.25) contrast(1.08) drop-shadow(0 0 0 transparent);
  mix-blend-mode: multiply;
}`);

fs.writeFileSync('styles.css', css);

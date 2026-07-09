import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootEl = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Prerendered routes ship with real markup inside #root - hydrate it so the
// static HTML crawlers/first paint see becomes interactive in place instead
// of being thrown away and rebuilt (dev server / unprerendered routes still
// start with an empty #root, so fall back to a normal client render).
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}

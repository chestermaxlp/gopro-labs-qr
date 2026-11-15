// Offline cache for Labs QR-пульт. Bump VERSION when files change.
const VERSION = 'labsqr-v7';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-180.png', './icon-192.png', './icon-512.png', './vendor/qrcode.min.js', './vendor/jsQR.js', './i18n.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) {
    // fonts: try network, fall back to cache
    e.respondWith(caches.open(VERSION).then(c => fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => c.match(req))));
    return;
  }
  // own files: network first (to pick up updates), cache when offline
  e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r; }).catch(() => caches.match(req, {ignoreSearch: true}).then(r => r || caches.match('./index.html'))));
});

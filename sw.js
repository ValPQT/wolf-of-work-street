// Service worker: keeps the app working offline.
// When you change a file, change the version number below (v1 -> v2...)
// so that phones download the new version.
const CACHE = 'wows-v8';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './sounds/howl.mp3',
  './fonts/archivo-black-latin-400-normal.woff2',
  './fonts/familjen-grotesk-latin-700-normal.woff2',
  './fonts/familjen-grotesk-latin-400-italic.woff2',
  './fonts/archivo-latin-500-normal.woff2',
  './fonts/archivo-latin-600-normal.woff2',
  './fonts/archivo-latin-700-normal.woff2',
  './fonts/archivo-latin-700-italic.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

// 1. Install: save all the files in the cache
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

// 2. Activate: delete the old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 3. Fetch: answer from the cache first, then from the network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});

const CACHE_NAME = "isforus-cache-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./logo.jpg",
  "./manifest.json",
  "./data/diagrams.js",
  "./data/algorithms.js",
  "./data/sql.js",
  "./data/networks.js",
  "./data/git.js",
  "./data/os-linux.js",
  "./data/qa.js",
  "./data/cybersecurity.js",
  "./data/pc-architecture.js",
  "./data/is-implementation.js",
  "./data/db-management.js",
  "./data/content-management.js",
  "./data/comparisons.js",
  "./data/faq.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
const CACHE_NAME = "isforus-cache-v4";
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

// Сначала берём свежие файлы из сети и обновляем кэш; если интернета нет — отдаём кэш
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
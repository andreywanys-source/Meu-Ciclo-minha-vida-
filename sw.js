const CACHE_NAME = 'nexus-routine-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png' // Certifique-se de que a imagem da flor tenha este nome
];

// Instala o Service Worker e armazena os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde às requisições usando o cache quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

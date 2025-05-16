self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cache-v1').then(cache => cache.addAll([
      'index.html', 'manifest.json', '72.png'
    ]))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

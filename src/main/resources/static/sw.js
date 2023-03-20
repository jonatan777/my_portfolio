

const staticDevCoffee = "dev-site-v7"
const assets = [
  '/',
  '/about',
]



this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(staticDevCoffee)
      .then((cache) =>
        cache.addAll([
          "/",
          "/about",
        ])
      )
  );
});


self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(staticDevCoffee) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});
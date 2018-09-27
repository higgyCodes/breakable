const CACHE = 'cache-v1';
const RUNTIME = 'runtime';

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(precache());
});

function precache() {
  return caches.open(CACHE).then(function(cache) {
    return cache.addAll(['index.html', 'index.js']);
  });
}

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [CACHE, RUNTIME];
  console.log('cache stuff here', caches);
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName),
        );
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', function(evt) {
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request, evt));
});

function fromCache(request) {
  return caches.open(CACHE).then(function(cache) {
    console.log('CACHE', cache);
    return cache.match(request).then(function(matching) {
      //console.log('MATCHING REQUEST', matching);
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request, evt) {
  return caches.open(CACHE).then(function(cache) {
    return fetch(request).then(function(response) {
      console.log('The service worker is serving the asset.');
      console.log(response);
      return cache.put(request, response);
    });
  });
}

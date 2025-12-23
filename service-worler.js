self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('triplox-cache').then(function(cache) {
            return cache.addAll([
                './index.html',
                './Build/UnityLoader.js',
                './Build/Triplox.data',
                './Build/Triplox.wasm',
                './Build/Triplox.framework.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

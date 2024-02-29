self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('pwa-example').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'js/index.js',
                'css/index.css',
                'logo.png',
                'pyicon.png'
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

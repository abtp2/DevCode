self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('devcode-api').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'js/index.js',
                'css/index.css',
                'logo.png',
                'pyicon.png',
                'ace/jquery.min.js',
                'js/skulpt.min.js',
                'js/skulpt-stdlib.js',
                'js/jquery.min.js',
                'icons/boxicons.css',
                'js/ace.js',
                'ace/theme-github_dark.js',
                'ace/theme-twilight.js',
                'ace/theme-one_dark.js',
                'ace/theme-dracula.js',
                'ace/theme-tomorrow_night.js',
                'ace/theme-clouds_midnight.js',
                'js/ext-language_tools.min.js',
                'ace/ext-beautify.js',
                'ace/mode-python.js',
                'js/iro@5.js',
                'js/index.js',
                'js/editor.js'
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

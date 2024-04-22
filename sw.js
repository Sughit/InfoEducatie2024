self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./style.css", "./pagini/mecanica.html", "./pagini/termodinamica.html", "./pagini/electromecanica.html", "./pagini/optica.html", "./logos/logo192.png", "./logos/logo512.png"]);
        })
    );
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

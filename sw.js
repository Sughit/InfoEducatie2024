const assets = [
    "./index.html",
    "./style.css",
    "./index.js",
    "./login.html",
    "./register.html",
    "./mecanica.html",
    "./termodinamica.html",
    "./electromecanica.html",
    "./optica.html",
    "./logos/logo192.png",
    "./logos/logo512.png",
    "./teorieMecanica.html",
    "./teorieTermodinamica.html",
    "./teorieElectromecanica.html",
    "./teorieOptica.html"
]

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(assets);
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

const assets = [
    "./index.html",
    "./style.css",
    "./style2.css",
    "./index.js",
    "./login.js",
    "./register.js",
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
    "./teorieOptica.html",
    "./img/setariIcon.png",
    "./img/lege1_alt.png",
    "./img/lege1.png",
    "./img/lege2.png",
    "./img/optica1.png",
    "./img/optica2.png",
    "./img/optica3.png",
    "./img/optica4.png",
    "./img/optica5.png",
    "./img/optica6.png",
    "./img/transformari.png"
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

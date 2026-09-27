importScripts("assets/index-t6p2d8.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(clients.claim()));

addEventListener("fetch", (e) => {
  if (zka2.shouldRoute(e)) {
    e.respondWith(zka2.route(e));
  }
});

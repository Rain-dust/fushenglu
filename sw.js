const CACHE_NAME = "fusheng-cache-v34";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/textures/paper_texture_base.png",
  "./assets/textures/paper_texture_warm.png",
  "./assets/textures/paper_fiber_overlay.png",
  "./assets/images/app/app_icon_foreground.png",
  "./assets/images/app/splash_ink_mark.png",
  "./assets/images/backgrounds/ink_atmosphere_v1.png",
  "./assets/images/backgrounds/ink_atmosphere_v2.png",
  "./assets/images/covers/cover_rain_window.png",
  "./assets/images/covers/cover_plum_branch.png",
  "./assets/images/illustrations/illus_mountain.png",
  "./assets/images/illustrations/illus_bamboo.png",
  "./assets/images/illustrations/illus_moon.png",
  "./assets/images/illustrations/illus_window.png",
  "./assets/images/illustrations/illus_tea.png",
  "./assets/images/illustrations/cat_lazy_black_v1.png",
  "./assets/images/seal/seal_edge_rough_mask.png",
  "./assets/images/seal/seal_physical_v1.png",
  "./assets/images/seal/seal_fushenglu_v1.png",
  "./assets/images/seal/seal_ink_noise.png",
  "./assets/images/seal/seal_press_shadow.png",
  "./assets/images/empty/empty_bookmark.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && event.request.url.startsWith(self.location.origin)) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

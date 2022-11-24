'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e84568e9270cf37be4280022b4e2358b",
"assets/assets/fonts/Manrope-Regular.ttf": "e506b64ab60eae396e058916603b61cf",
"assets/assets/fonts/Manrope-SemiBold.ttf": "9e7aaa1e74322a45c153c790fdbacf90",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/icons/addimagefromcamera.svg": "9a3da7d3b1412d68426d341bea651f2d",
"assets/assets/icons/addimagefromgallery.svg": "2c60c7902844d90fec71373f808bd5d3",
"assets/assets/icons/addnewad.svg": "93be0e5dec96749d61be832b44690a3b",
"assets/assets/icons/adslist.svg": "887bd59451e9b2f09ba8cc12614c6da1",
"assets/assets/icons/arrow_back.svg": "859bae569ce82057d244189f4491e415",
"assets/assets/icons/bookmark.svg": "6119dd21f2c7d58d2a68ca7275d1e74c",
"assets/assets/icons/call.svg": "48117dc1b02f700894fa82051ea1335f",
"assets/assets/icons/cancel_sign.svg": "a82314d4b9873142b734e110f6df577a",
"assets/assets/icons/clear_cross.svg": "95ee7c047bd1115371dca37f2458b9a1",
"assets/assets/icons/delete.svg": "81b54fe69156cbc57917bce9e6d5d0d3",
"assets/assets/icons/edit_profile.svg": "f00906a565887a26470317964412a75a",
"assets/assets/icons/email.svg": "dda369cd5ed547fe626520ed216b4c79",
"assets/assets/icons/facebook.svg": "fab162f07ae57b438a3dbb8199d75111",
"assets/assets/icons/favorite_border.svg": "a359500451a11ec96e3f0d2a8974ab26",
"assets/assets/icons/filter.svg": "238989829b47bedb353507f3d50215ea",
"assets/assets/icons/google.svg": "bda8f5ad44c46aca455ab9c6d7b755c0",
"assets/assets/icons/google_icon.svg": "14137f89247c1ab0eb29e8b75ef6e9d6",
"assets/assets/icons/home.svg": "353eec458f9c56fc3a308901686dc833",
"assets/assets/icons/images.svg": "6791e7befa2029d227df6126dcac0306",
"assets/assets/icons/location.svg": "45fa5224438814b53b7f7380b4fc4a0d",
"assets/assets/icons/login.svg": "bc87127f28be13d449f57a4e39b05bc0",
"assets/assets/icons/logout.svg": "9c5abc443a6d8c834682fb00dc014196",
"assets/assets/icons/menu.svg": "ef3a1b83a9e8f2bf5655015593da9072",
"assets/assets/icons/notification.svg": "46381694a00fc3d8fe8ce4c837f5da3e",
"assets/assets/icons/notification_on.svg": "eb201b2f7cf1d3810648a3a4501c494f",
"assets/assets/icons/password.svg": "b79836a706e0624ec56888545c1f2aeb",
"assets/assets/icons/person.svg": "928f852aba313793bdbde8b0ccc1929f",
"assets/assets/icons/search.svg": "e881ca66e7ea1275641b99f2eb4190e2",
"assets/assets/icons/whatsapp.svg": "ffd49f1dc45a443cdfe81245c9e4c26e",
"assets/assets/images/holding-phone.png": "90d8a60b21ea30840c8a89f8b6ab500f",
"assets/assets/images/logo.png": "665a0bb7872808d1ca1d7d43592414af",
"assets/assets/images/onboarding.jpeg": "bd44d2e4edfb4d68418d990e995b69f1",
"assets/FontManifest.json": "0890c7491bdb1d65130a7481d7cb9614",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "82ec2b644c4cd5c73469320a4411f71c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "9a2416e234842daee195d645cb7345c2",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bb17ff84dfabea5ab6c37169c2b399f2",
"/": "bb17ff84dfabea5ab6c37169c2b399f2",
"main.dart.js": "6675312a457a6dc10ee6e9bd177eed27",
"manifest.json": "ca7ded7b4202dfd804ca91bcd663c314",
"version.json": "cd404799706b7fad8b5a7e1d2e0c4d3d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

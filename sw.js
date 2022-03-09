/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-77b5c400'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/index.4aec4257.css",
    "revision": null
  }, {
    "url": "assets/index.e531659b.js",
    "revision": null
  }, {
    "url": "assets/vendor.d72b9cf0.js",
    "revision": null
  }, {
    "url": "docs/assets/index.4aec4257.css",
    "revision": null
  }, {
    "url": "docs/assets/index.6e2a45c3.js",
    "revision": null
  }, {
    "url": "docs/assets/vendor.d72b9cf0.js",
    "revision": null
  }, {
    "url": "docs/index.html",
    "revision": "611de2781f42d1bc841e25dc8d446ac9"
  }, {
    "url": "docs/sw.js",
    "revision": "38cb8a079c7bce25682a90d40072aec5"
  }, {
    "url": "docs/workbox-77b5c400.js",
    "revision": "b6ab270417e0912c755a7a468246fa89"
  }, {
    "url": "index.html",
    "revision": "69b771b67794587498e3ebdd1349d5e8"
  }, {
    "url": "src/App.css",
    "revision": "231d00f71d90195bf0134abd356bc3be"
  }, {
    "url": "src/index.css",
    "revision": "6c2104b8d219ed99234ae2d6329f4357"
  }, {
    "url": "src/pages/Home.css",
    "revision": "246f1739aad5689111bd2602d7b3280a"
  }, {
    "url": "src/ReloadPrompt.css",
    "revision": "f8fc2182ae81d9c31b0c761325f3200f"
  }, {
    "url": "favicon.svg",
    "revision": "71dcfd191507c31dc79efe3341dfa3b9"
  }, {
    "url": "pwa-192x192.png",
    "revision": "f24c9384006bbc8de95ed69990459dca"
  }, {
    "url": "pwa-512x512.png",
    "revision": "4db5b8fe442a8f8fdc6e35cd40138057"
  }, {
    "url": "manifest.webmanifest",
    "revision": "7e32a248dc4e60b1f0d8291552d50843"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
//# sourceMappingURL=sw.js.map

/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","784e43d855043214cc11601f73a71ce9"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","f083892cd54c98fd747aea4fc90cfe70"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","05820b25684d4eaa6d48eade26f7396a"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","04372b0f14a3f7c2ff337e2315c0c773"],["D:/hexo/public/2019/09/15/13. Maps/index.html","3a4ce83ca4a9c27b6cc24ec646562a7c"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","d9f4c01e8f25dac89ce6752ff5380d6f"],["D:/hexo/public/2019/09/15/15. 指针/index.html","7b740cce3d188dd355ac815a4f9aa07f"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","9695277ab3e847c19e4e6afbaf598498"],["D:/hexo/public/2019/09/15/17. 方法/index.html","375178f301805594977c7027180a8c2f"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","606c8e18ba90cc7e55bae9763e7639bb"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","c7599ae9617f3168c949af7d8ba4b2e3"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","1e7923fa73e8925b44c3442919c6606a"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","628d45c9f5dc3e9abb8152bff68d40f5"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","bfb50f7174c1d6a322b44826b253d7d0"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","f16a23bceefee81235dcfc2b38f5266a"],["D:/hexo/public/2019/09/15/24. Select/index.html","4d241c68bc43f41f51864f6ff0d2146b"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","381f4feb64dc753a57b2f8f1511cecd0"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","d1a8deb0a3c46c939ef525d5f46ff88b"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","2e0c76581fdc713d7a6253a2f219e146"],["D:/hexo/public/2019/09/15/28. 多态/index.html","0fa2ddd00e680d971b0de5bef0e557dc"],["D:/hexo/public/2019/09/15/29. Defer/index.html","2a2d6907c53ccb8ab3a72fe6522ae2b9"],["D:/hexo/public/2019/09/15/3. 变量/index.html","7509ec1a4cc2d0273f576bde0a378312"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","e9740bcf2debe2f5d641c1f32678cfa2"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","621fc41102e9ea98073a95fd4a5935c0"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","681e0aa7c6cdf65153d995c7d3025a1b"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","e6ff34d30a492db78bb679a3228a4274"],["D:/hexo/public/2019/09/15/34. 反射/index.html","63720a47f623fe067c3e2549a61341df"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","33e7c5010d729a107dedb710c4ca605c"],["D:/hexo/public/2019/09/15/4. 类型/index.html","382aa13c1bbb0ca928b668e810c0d0e0"],["D:/hexo/public/2019/09/15/5. 常量/index.html","40b6e048dc779791685433b7e559edf8"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","9a3dc8735b1540c1c0d57b41533dcb54"],["D:/hexo/public/2019/09/15/7. 包/index.html","263c12b95c2747ae162d3e65d03329d0"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","9129ba25079a03a51fa773000973e3e6"],["D:/hexo/public/2019/09/15/9. 循环/index.html","1f52b3209bc31d879a54d40e6fc9ac8d"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","56928db33a1f3640ea582ca9f5658814"],["D:/hexo/public/2019/09/17/关于celery的一些操作/index.html","d523111b8b590c578b79c502425ab127"],["D:/hexo/public/2019/09/23/MarkDown语法/index.html","81e735da1b8be0a12e5413e7b75256ec"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","19e8dee314bfd7a008cb2e699c044d07"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","dc86c83411616577f2c39318b34a7973"],["D:/hexo/public/2019/10/28/django使用锁/index.html","5b16f617171a82719a48c7a5329efe32"],["D:/hexo/public/about/index.html","577dcbdcc1b0e031d04656eb93e35c38"],["D:/hexo/public/archives/2019/09/index.html","3f6b20ad5d5c15e54588989a3200ea7a"],["D:/hexo/public/archives/2019/09/page/2/index.html","62b9a5562fc748572fb11b2a851bb0b1"],["D:/hexo/public/archives/2019/09/page/3/index.html","91eae830c04c424356fe54e981199f8d"],["D:/hexo/public/archives/2019/09/page/4/index.html","546f392e46d3730b4a5675a1a001e4a2"],["D:/hexo/public/archives/2019/10/index.html","5190cb136e365f5130de5539a264a37d"],["D:/hexo/public/archives/2019/index.html","c730690ae292be144184a6d95815c258"],["D:/hexo/public/archives/2019/page/2/index.html","f040134c890538d65588bc8932d60059"],["D:/hexo/public/archives/2019/page/3/index.html","3ae58ec94a4613044e216af03b0a1a62"],["D:/hexo/public/archives/2019/page/4/index.html","8b8eb949394ab69c23c3685508ce0a3c"],["D:/hexo/public/archives/index.html","7c3ec66dea6a00a73c6d6ad9ad7bf1ac"],["D:/hexo/public/archives/page/2/index.html","0a1778c762f62fa9c9398be76fa735b3"],["D:/hexo/public/archives/page/3/index.html","c79baa35ebb7d0935420f5f426d285fe"],["D:/hexo/public/archives/page/4/index.html","ce39beac1e73a134ffac9902d7463b94"],["D:/hexo/public/categories/GoGoGo/index.html","65b56d791332a76b6b0ccdc476fa711b"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","f6f24882e1c4fedae717fa8677ecc271"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","2c5254135c9823eee870e099458a1837"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","a2c57295da5d99bb71ec133865617f43"],["D:/hexo/public/categories/Linux/index.html","ed30f4d41d852634ff5d820d12a21fcc"],["D:/hexo/public/categories/index.html","c8f68c539977639688d6273120bd5ef7"],["D:/hexo/public/categories/python/index.html","eb32f52d44caad4eddb79e63affe81c8"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","fec81b368df7812a25a95ecc3f63a7b7"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/celery.jpg","03f0af7b8ee68d10f81fcfdadd42c41f"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","85be70a11b39e49d19bc761d0e8a3097"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","e466ead70c7e544e26a7b93d5d869673"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","590d71490ab163f3c7aa0b2c3e464552"],["D:/hexo/public/page/2/index.html","6289209fc5c8b863aef57669bdac197f"],["D:/hexo/public/page/3/index.html","115cb0fa5203112182d74434d193512c"],["D:/hexo/public/page/4/index.html","de64f16f7d02b865120a05afcaaefe14"],["D:/hexo/public/tags/DarkDown基础语法/index.html","021736b3c1ed286c655b25c6ba3f881a"],["D:/hexo/public/tags/Golang/index.html","132fa40d3cd57305a5c7b0b2174962df"],["D:/hexo/public/tags/Golang/page/2/index.html","487d45c192c2835d59aa8928b302f393"],["D:/hexo/public/tags/Golang/page/3/index.html","129b626053fd16f7c825ff5bbe3b27d3"],["D:/hexo/public/tags/Golang/page/4/index.html","5cbec868815bb5aaf4cdfd3e95c5c8e3"],["D:/hexo/public/tags/Linux/index.html","ffb0a21d638282c35d4d52f045a4e4de"],["D:/hexo/public/tags/django-ORM/index.html","6d2442046199a596cb2eb97da6929b8f"],["D:/hexo/public/tags/django-redis-锁/index.html","f3c036d8268cf6ad7e5a5b44be4707c7"],["D:/hexo/public/tags/index.html","90af705f1ffa6fc4dd430511d602f2da"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








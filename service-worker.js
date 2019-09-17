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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","a499b334dd8a266dddbba757f8d5808d"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","5cffdc14069d24b59f2d7595f74e1a0d"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","143ca9ea7d0fa92f6ab4d23b22bedcbb"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","93a29b48a4e5cb94f70756114aaf4dd5"],["D:/hexo/public/2019/09/15/13. Maps/index.html","c6aafef2274aec753aa0793b02043982"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","dfcd697971cb3a0cc95e90f1338bf9ea"],["D:/hexo/public/2019/09/15/15. 指针/index.html","5462683ddc4e33803401fa099e3f428b"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","9b5ab39ee0d92b4b71d2498a632faee7"],["D:/hexo/public/2019/09/15/17. 方法/index.html","bcead020afd90ce2c2ce1a618bc7cbbe"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","bd0ef572cd028fd728db606410aea8e3"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","e41eaa62476de3ae1baffb236429ca07"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","2a6d2433c9b0ceed8943912354a908b9"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","f2a11df06e4c5ba37ecfd2e684afdfec"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","b487ea6dacfd43be6d6798ff48b3891f"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","48800b8409718de21a19bb7bb926f7d9"],["D:/hexo/public/2019/09/15/24. Select/index.html","aee6b6d22936324653259f98b4c007e2"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","5f9c6b2cce8e69aa017d36fe3ac8001a"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","1232b8c51c94e985817736f5743764e4"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","89a299f0e4973484b949f0716a3ae459"],["D:/hexo/public/2019/09/15/28. 多态/index.html","c2fc3de29b13aee8e6ed80279c43b102"],["D:/hexo/public/2019/09/15/29. Defer/index.html","9b21702ccb8a1b880fdb7428f3e285ae"],["D:/hexo/public/2019/09/15/3. 变量/index.html","c6d4c49af780e9472289c886227756b7"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","69a29cceb656c1bf5d18940868391402"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","509a51c3cea0616b8a94daaf36fd10f8"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","75ac88dd63dba4f1ca1b429d66bf875a"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","9a570997b0802572b7a61798c54f87d5"],["D:/hexo/public/2019/09/15/34. 反射/index.html","2dd8b4d1b29b0100e3696666e5c6edba"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","c23adec911a888f6d3c7a41b0df33289"],["D:/hexo/public/2019/09/15/4. 类型/index.html","547841d1b8293c189106dd04f88614f3"],["D:/hexo/public/2019/09/15/5. 常量/index.html","aa30a389e3b068cf5b2cdabfbcd2f4b9"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","c8e00328410ed9b5701b8f01ac808e99"],["D:/hexo/public/2019/09/15/7. 包/index.html","8d64b2d2b053aeff1e6f8dab9aa2c643"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","88b0549fb241cffef8a81289f4b1ce26"],["D:/hexo/public/2019/09/15/9. 循环/index.html","d15a5137f15786f8606d78e40bb9bafd"],["D:/hexo/public/about/index.html","21c3fcaa76103c5fbe66d57828a01486"],["D:/hexo/public/archives/2019/09/index.html","2e2a61bc51d1b9970e1506133c47d744"],["D:/hexo/public/archives/2019/09/page/2/index.html","2882216ccc3f13167b7fcc2ea6ac19ed"],["D:/hexo/public/archives/2019/09/page/3/index.html","c0ad3f0ad7956d382964456b4475058d"],["D:/hexo/public/archives/2019/09/page/4/index.html","3705ff3e9b312b13c560580455ef2918"],["D:/hexo/public/archives/2019/index.html","6a16117e6e06e78c36bf684791e3a93b"],["D:/hexo/public/archives/2019/page/2/index.html","0e13d461f5eab88f075ca233f5630cd8"],["D:/hexo/public/archives/2019/page/3/index.html","46e5ac64dfa0afb478847b39e5ccdcb2"],["D:/hexo/public/archives/2019/page/4/index.html","88fb099f49bd20a5cc12f397a82f5a3b"],["D:/hexo/public/archives/index.html","322f5c810f0ed81d342ff80c6110a0b8"],["D:/hexo/public/archives/page/2/index.html","6f2dd853e20b63d6dac3c0bd96874099"],["D:/hexo/public/archives/page/3/index.html","df7dbdfb73aa1573f967d35b86013d2f"],["D:/hexo/public/archives/page/4/index.html","cd29eb59849eec449b67a58514ba248c"],["D:/hexo/public/categories/GoGoGo/index.html","473c511aa7ad84a7a51d9699fb46e99b"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","2a186009d623f3db9eb415f5c5235120"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","28711e250f43dd2726d40c12c5d43e52"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","22b61e0272c58240fc4681628cc0563a"],["D:/hexo/public/categories/index.html","9a6581ed48d05cd837d856459b35f147"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","3ee609e4dc620d703ee35ffea237c70c"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","84dbf49a4e15816a5adb9c9d863aa45b"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","825a7465e1c92d4643aa4302fa0c855a"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","84392dcf2208f974dbb1e870447a4db1"],["D:/hexo/public/page/2/index.html","559dd0b4abfb189f516e58477119a561"],["D:/hexo/public/page/3/index.html","038a8ca0a8ec6365ed895e0eb48b9368"],["D:/hexo/public/page/4/index.html","e9d5a355426dc502a1c141417cdda256"],["D:/hexo/public/tags/Golang/index.html","ec6f0b03f2212a5da196b3abd618c398"],["D:/hexo/public/tags/Golang/page/2/index.html","b1e322e7f6aff322b280c22e347b2187"],["D:/hexo/public/tags/Golang/page/3/index.html","45e1972b0948ae61d390454d08ad2150"],["D:/hexo/public/tags/Golang/page/4/index.html","a4d81f985a0078882d3909dcbfffc988"],["D:/hexo/public/tags/index.html","3cd7d7cf606b9bc7c649ce2cb3699955"]];
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








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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","a771de10fe5494c40e4c6cafd7ab2f81"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","c86fbac670227db403a0bc20d4891556"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","9f0352ad93c4d066c8cb953d18e3c5d2"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","86151a863faa2adbde487db2dbdb1c14"],["D:/hexo/public/2019/09/15/13. Maps/index.html","8f4be915a039dec5ab6e9001cfd69be6"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","4146adfcca1abde6d4b477df84d67828"],["D:/hexo/public/2019/09/15/15. 指针/index.html","31fda3d0fc6ca1710fb5928ad097e7c7"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","86c8abf08b44fac4028ddf748946662d"],["D:/hexo/public/2019/09/15/17. 方法/index.html","a6da173fcc75ffc4fa5787104d175f69"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","5c40ee8d96412302ddfefba40f58f306"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","b70d6caecf6c58fe61a9583106bed2a7"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","f2944e7c8d482284b5daf53bc7c5a271"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","021315a4edec0718b7bb5d1579d07ff9"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","acc206e0890fa7df17b7d6b7dc4dae45"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","78b1e01d74f27d4db00c3d9de7100fcd"],["D:/hexo/public/2019/09/15/24. Select/index.html","868fb20ad2963b1bb36ec64c17970c3d"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","fa862c591c04ea7c917331f0249ce086"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","0d16cd91098628d97b4a3389221b8622"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","2e3b5cba9e7337859d5eef0dc53128fa"],["D:/hexo/public/2019/09/15/28. 多态/index.html","e912063c3baa82ca00b1e7704e484c71"],["D:/hexo/public/2019/09/15/29. Defer/index.html","9175b8b7295f03bac5eb8d65e16d3b91"],["D:/hexo/public/2019/09/15/3. 变量/index.html","e8663d6da78179e2bcecca6d3f166b13"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","ba2bc1570067929a78099eba303c4970"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","68e331f20aad897a6c010d88b66b400b"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","020fb46b7b61bd099d2ebabd793aaa99"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","d92945570f93974a394e8160a87d1e10"],["D:/hexo/public/2019/09/15/34. 反射/index.html","ea319f947d7d30344243e68ae2d5b3cb"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","5135261dba8d814b3f0276715d5fb9e4"],["D:/hexo/public/2019/09/15/4. 类型/index.html","ebaf90f4f7cc38d7db901ed5e39b83d7"],["D:/hexo/public/2019/09/15/5. 常量/index.html","5159e4c5f327a6ed5b787b3d6566306e"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","642d4a2763253069e713e2b8ed2bdc8e"],["D:/hexo/public/2019/09/15/7. 包/index.html","b4355e96634a71954f44ff8dea7c78dd"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","9e40a89b11264e60dc7ec84914ba3ea1"],["D:/hexo/public/2019/09/15/9. 循环/index.html","2992531952a5a80c2cb5bb0d83997579"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","4aad418247f060957e3b8b1ff5107db6"],["D:/hexo/public/about/index.html","fb8fd8f5bfff9dd6e9a8b24093b505c9"],["D:/hexo/public/archives/2019/09/index.html","1d7323e2c654c02276816408de9dc44d"],["D:/hexo/public/archives/2019/09/page/2/index.html","9f94258bc6a44c81654489f084b536e8"],["D:/hexo/public/archives/2019/09/page/3/index.html","ed486f64c3af5e80d27b8526eec1fcca"],["D:/hexo/public/archives/2019/09/page/4/index.html","0f61232fd9188e62cc090703b73b8506"],["D:/hexo/public/archives/2019/index.html","e169230c64ff6931380339b91b6676b3"],["D:/hexo/public/archives/2019/page/2/index.html","95ea62cf68e9bb92149c2c28414991ad"],["D:/hexo/public/archives/2019/page/3/index.html","2df0bd3a4969cdac1af6f1b7010cb74a"],["D:/hexo/public/archives/2019/page/4/index.html","2c1e605a29471c6edafcd14fd6ae31ba"],["D:/hexo/public/archives/index.html","e8cb1cac3ab647ba9c93b61d363ee73e"],["D:/hexo/public/archives/page/2/index.html","84c06858b96eb15f74a973ce854ad38d"],["D:/hexo/public/archives/page/3/index.html","5bbd92e83a388d6577df40078ddcf2e3"],["D:/hexo/public/archives/page/4/index.html","f661fa9dc4b87f9d3d2672b1e7c52317"],["D:/hexo/public/categories/GoGoGo/index.html","9015e4775c30279e902c7ec7533aabb6"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","0918251d00f05ed4aaa4fbcfb58e18d7"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","1db1474e2f4b516c1e3ed34d65ee8418"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","92b5f1d27dcb46adffa13074602c0fec"],["D:/hexo/public/categories/Linux/index.html","aeb598dc6e6d536fd5d168710fa1e215"],["D:/hexo/public/categories/index.html","f14b60e1c32ef6c4acfb49f4473d5c4f"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","8ca140e54269bbf004075e8796bb829e"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","d69a612ef92f8c8cc3537f8f77e985f0"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","4118d593ff82fa4fa6420adc21d97901"],["D:/hexo/public/page/2/index.html","59d0d7ecafc6ce8e516f980214bfa216"],["D:/hexo/public/page/3/index.html","d230afe9fdc8836827d6ba530b1c7d39"],["D:/hexo/public/page/4/index.html","b425952e4393d8687e7832e01f461acf"],["D:/hexo/public/tags/Golang/index.html","b64e32085d81734c796f02178504253e"],["D:/hexo/public/tags/Golang/page/2/index.html","c75c463c11020960fa2ddbf38c9d9ba5"],["D:/hexo/public/tags/Golang/page/3/index.html","f32ebb6c4ccfec369d6d359843c4cc5a"],["D:/hexo/public/tags/Golang/page/4/index.html","a2e5457cc92da2e30e8ce2296307dd7f"],["D:/hexo/public/tags/Linux/index.html","5bc9074a15b47cbbf29b81b212c1998f"],["D:/hexo/public/tags/index.html","4adee1471d441ed5903d9aa4f3e153f5"]];
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








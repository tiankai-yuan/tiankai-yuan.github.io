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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","07b008dbca2fc5f4bd30466512413d7b"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","4dffb9655c7dec6fdc0dccff468c2d56"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","a8ab659d7e4ea1f89b4ba96583352d1f"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","97cd8887ffa8dc03bd2efb1add9c960b"],["D:/hexo/public/2019/09/15/13. Maps/index.html","e313285e04d549449b80a0688b9ebbc6"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","e8e2f3895e0dc34883defc9d8810887a"],["D:/hexo/public/2019/09/15/15. 指针/index.html","1012d5249469164657fedf91dcce4b26"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","64d2fee324131ce7253496d165b7fb36"],["D:/hexo/public/2019/09/15/17. 方法/index.html","1b86869f77b398a01b9f5c15da09eb7d"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","a73cb1a90c2b2972d1e645463db5f088"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","2602fdaa289c82da6352395eff98b060"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","8e279bcb51c6510a669c51a7e8efd8f6"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","f7ac2f63f69058d3c9ce378fd89c14a2"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","674dfe5be816517a84894c7732ab05d2"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","088ea6af9388a991be7e979a8f4ed813"],["D:/hexo/public/2019/09/15/24. Select/index.html","8c1e3fd9e16543edf7edcf9652487d29"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","62bd47f8353ceaa66bde2e757a72dbe2"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","53f94450e2d422901ac6b2420ac7a449"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","dc1edd16a74143377e001a65ada559c2"],["D:/hexo/public/2019/09/15/28. 多态/index.html","05cee34da9679642ec19e8cba9428c44"],["D:/hexo/public/2019/09/15/29. Defer/index.html","77e3c916a8ce3ac8669f95c8800289e2"],["D:/hexo/public/2019/09/15/3. 变量/index.html","32ee73bac19d50f137bcd7aac06dff80"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","a834d057a9e7af9bb91629022cb9fee6"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","8b11379975550bdd84bf638808fa3b84"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","6394fd2293f88f0968ae84598347dc8d"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","3b9e2bc3be207126816ded03eedf6711"],["D:/hexo/public/2019/09/15/34. 反射/index.html","8fe6549fc3c1e1eb6191622e149d7a39"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","f4481a36291ba16be8a8eb2862c3d540"],["D:/hexo/public/2019/09/15/4. 类型/index.html","0191a822df4acfe5cd60e12620e8afc3"],["D:/hexo/public/2019/09/15/5. 常量/index.html","80203d553d334cb4045252fe8148819c"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","2734ad4adc366b636a53077841bb797c"],["D:/hexo/public/2019/09/15/7. 包/index.html","e99e9af0abe8b737746829c4dab3b433"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","88b151e063e7aedcdb8b7d3391b543b7"],["D:/hexo/public/2019/09/15/9. 循环/index.html","ba6a1d5921d23f6114a508138a729a2d"],["D:/hexo/public/about/index.html","f49686a5454e85eb352f2af25b485c64"],["D:/hexo/public/archives/2019/09/index.html","ddd6bbc5bf905c56278b4eeddd5b39a6"],["D:/hexo/public/archives/2019/09/page/2/index.html","6391eac15060326c8ce8ffa23e58e91f"],["D:/hexo/public/archives/2019/09/page/3/index.html","4bc051b314f29670fb7e5a149a7d74dc"],["D:/hexo/public/archives/2019/09/page/4/index.html","c543bccd4b0d10b61db3fb0cb35ee6e7"],["D:/hexo/public/archives/2019/index.html","3560d173455e042ff427b0a34c1a5058"],["D:/hexo/public/archives/2019/page/2/index.html","ed3cdb8f7aadb04644bb8cda33989b83"],["D:/hexo/public/archives/2019/page/3/index.html","947adc6d2a69e5c1e98b49c510017e25"],["D:/hexo/public/archives/2019/page/4/index.html","9ca01a309c521a8be5d1542adbd6596d"],["D:/hexo/public/archives/index.html","337d7eb6bf9f4e20cc80529d9d04049f"],["D:/hexo/public/archives/page/2/index.html","a4b1b39227c25ace6dd4c9ce652422ca"],["D:/hexo/public/archives/page/3/index.html","faab42b6db898d1ee6a31082c506ddc1"],["D:/hexo/public/archives/page/4/index.html","79b94362a30e93445689e270fe2ae95c"],["D:/hexo/public/categories/GoGoGo/index.html","a725fc95b8e7f9598fc46ec86ed287e1"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","717e4767a4a29b0b2cf5cf53d31d02ca"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","0a14ac9704778b5b0a8bdc5ebd97e738"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","80e46734f7e85cb9d8ed575d4a2d0421"],["D:/hexo/public/categories/index.html","d4a24cbc059a9c0f482f24862cf1f390"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","3d4fd3786610f8a5fe2a72f4dac6837c"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","84dbf49a4e15816a5adb9c9d863aa45b"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","f0db939eec499bdab97fb3c093319336"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","c853a8ea9df09a7dfbcc97f33530d1dc"],["D:/hexo/public/page/2/index.html","d4e3a2d13e6280c5a433ec6df723ea4e"],["D:/hexo/public/page/3/index.html","e601b6008baae5be3f3d96b77e9824d6"],["D:/hexo/public/page/4/index.html","c6cccb9923481c9218755297faaef74b"],["D:/hexo/public/tags/Golang/index.html","1fccf3477b8960e49ae62733e7009e57"],["D:/hexo/public/tags/Golang/page/2/index.html","0a7e6f4d7a626233026237ce45b95d69"],["D:/hexo/public/tags/Golang/page/3/index.html","ede5f94b660103e0d7152c9d5fd4463b"],["D:/hexo/public/tags/Golang/page/4/index.html","8108b4d4c37dd5f0b63d2ae2fb17d5c7"],["D:/hexo/public/tags/index.html","393b1facb2c68c988cba91ff9d323d2c"]];
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








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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","8e60a4b39790461479c4fcc0060beb51"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","dd88e3d289b6052b43bd23b575f63612"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","912c7cfbef70f241c799aadc41c0fba1"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","f8e5741ac9a14b8b8ca63bc9531400c0"],["D:/hexo/public/2019/09/15/13. Maps/index.html","4dc34d58af39c49ce79c741bc3fc3871"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","717b36994e490a1892c80845201e0072"],["D:/hexo/public/2019/09/15/15. 指针/index.html","d4c64ce83c90320ee57f4eef1489e3b7"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","3e66dcd9edec88ad6f8ae5eca9af5725"],["D:/hexo/public/2019/09/15/17. 方法/index.html","2815da093efbd9e9495d39137d4e4bfa"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","cade2c75a85abd5eecc181d278657a32"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","0f6de6ec3e5ac109de3c616e668a9d12"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","5ad242fa31117e577fb5c9481ba1756f"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","905847e3c816825834ceec506e6a8d23"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","1f7f121355a2c73d2a48cc5dbd5d8ad2"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","c1370ed6572ecad9bc29341a2ab0aa9c"],["D:/hexo/public/2019/09/15/24. Select/index.html","8e609e4f29c4d390cbb2ad3cbbf14e4a"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","4c11c066911152faf3e8f8984d22cabf"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","db3018d07d52a5df8171a44297bc45a2"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","d5291834c953932b7811889eba2d1855"],["D:/hexo/public/2019/09/15/28. 多态/index.html","3facc671a04a48a8516794bebab3dead"],["D:/hexo/public/2019/09/15/29. Defer/index.html","4a53168cad18f38022ab644794dab0fd"],["D:/hexo/public/2019/09/15/3. 变量/index.html","d64552a9938cbb6d11adda597a938bb3"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","c3d37a393b4d65b26420cb304aaa0152"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","361840122be7da6e659de23ebcb545eb"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","1a6340c7eb67f9877d385492fb64a1f8"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","50939e901128b2d4aba62c3ad616a028"],["D:/hexo/public/2019/09/15/34. 反射/index.html","124a21058a584cbba26978ab8d4a103f"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","c557ea464e2a7aa84ecd63ab2a3c5ccb"],["D:/hexo/public/2019/09/15/4. 类型/index.html","424f71a74e79482635a0c10b920d720c"],["D:/hexo/public/2019/09/15/5. 常量/index.html","659ba157b755fbb09121bef58afa918a"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","2aa201bce233eeee4f7ee32bef06dbf0"],["D:/hexo/public/2019/09/15/7. 包/index.html","ed1b2c8e91b5ab97b12674c5d52c581c"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","09da70f0703fe11726ef55c7aea42ebc"],["D:/hexo/public/2019/09/15/9. 循环/index.html","9a0259f3e7b7ba83d8fb226c38f21e05"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","84ccc1729d57a2d37debab2e3f0c6eab"],["D:/hexo/public/2019/09/23/MarkDown语法/index.html","76301175fa1156a50c2604f7dc21882d"],["D:/hexo/public/about/index.html","96f2372f00a6c4b729aac8a6e6387377"],["D:/hexo/public/archives/2019/09/index.html","47b861b946c54de944650508fb36dd06"],["D:/hexo/public/archives/2019/09/page/2/index.html","4704432ca03ed97a459c3d02ea69247f"],["D:/hexo/public/archives/2019/09/page/3/index.html","f51df88732e93c3869afca8e82d31fd3"],["D:/hexo/public/archives/2019/09/page/4/index.html","97282c184357edfa27afe2657287bdd2"],["D:/hexo/public/archives/2019/index.html","4f7c770b67f9fe90044f916b0765e23f"],["D:/hexo/public/archives/2019/page/2/index.html","5299ea9171871853e198c3a90eb172e0"],["D:/hexo/public/archives/2019/page/3/index.html","6a71057c0d180c56f96781498fc5aeb5"],["D:/hexo/public/archives/2019/page/4/index.html","06fa7c6e989b0e41ecf6541f23d0b67a"],["D:/hexo/public/archives/index.html","eee672986f4ebb02ff5de72fccc0486f"],["D:/hexo/public/archives/page/2/index.html","d061091fb653a9f251eb761d3541448e"],["D:/hexo/public/archives/page/3/index.html","cc9f23b55331a585c7748fc0e42407fb"],["D:/hexo/public/archives/page/4/index.html","60eee1c635b8f1223a0e1bb75dd09a36"],["D:/hexo/public/categories/GoGoGo/index.html","6cc8555e42cccda0487950691677d33d"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","c8ab6af40099061dc97d205b796660c4"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","2a1083126d423285ad36a57227304e48"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","04eb49ef4030a08474604ba70d731a75"],["D:/hexo/public/categories/Linux/index.html","e9c0c91fb6cd88bb2911df86576dd439"],["D:/hexo/public/categories/index.html","d1b6b24a1c94e0370b8518ed74facc84"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","0895fe7c32de9574c7e75308626111f4"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","d52f5549137f8da1816c526f8fd9cfbd"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","aacafa5e328fe9db65b42f5295e1a058"],["D:/hexo/public/page/2/index.html","6692225ac9f0bdb3ce34258c1f34eb7f"],["D:/hexo/public/page/3/index.html","c38c0573c7facd8a10a47e0aa96a6b62"],["D:/hexo/public/page/4/index.html","0e1916e57d5f87ae9c5af5eff8ba8676"],["D:/hexo/public/tags/DarkDown基础语法/index.html","4a728c0ab9510bff8089b76ebb5d637b"],["D:/hexo/public/tags/Golang/index.html","9c9319783780897b964d7d760e3c58c8"],["D:/hexo/public/tags/Golang/page/2/index.html","a84dd42b9a3ef395787829deba7af6a4"],["D:/hexo/public/tags/Golang/page/3/index.html","d5ce843b74e2226d0cefba2c07cea6d4"],["D:/hexo/public/tags/Golang/page/4/index.html","55e8b1fb661e3b73e1dfc13de3f7a5ef"],["D:/hexo/public/tags/Linux/index.html","933eefa9286b09a0fe6a02ebb8e6ef48"],["D:/hexo/public/tags/index.html","29bfc793d927d08edc848f6ceb93f711"]];
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








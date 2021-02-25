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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","93a9451333eafe6ce674f9b600e8e74c"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","ed2ce017aefb6c7cfb87ed50f2b21ef8"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","0a33dcc5dee8477e38689fb8802a3c3a"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","44150f954817f4bb50d4f3bc1e27d540"],["D:/hexo/public/2019/09/15/13. Maps/index.html","3fcc4cedbb8fc5c7b2976b0b23322f87"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","84be26324f6ae77e842cfb4a71b1b755"],["D:/hexo/public/2019/09/15/15. 指针/index.html","8a519e960c77fbb9323ffd855ff06e0e"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","aa4c2cf7bb224e73b6d7b1b0bef0a7cd"],["D:/hexo/public/2019/09/15/17. 方法/index.html","9d03968026e89bc92629894196c9f4e5"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","83d1c63592f86cd84ce390752cf27b67"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","8b8e6616abb42353f9320ba8eb085abe"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","a7dff8bbedea6810fdffd3f97e959048"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","cdbce9392e50d3ceca436d6531481012"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","0f1d5ab9eedd69b9da5beff91275af11"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","fb7c5d0f2a09756e1a40d95a4b5a9d92"],["D:/hexo/public/2019/09/15/24. Select/index.html","0f9905a89d7f52574f44f0ef37af1546"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","413ff8f36081aa94ffb28266a5b538ca"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","1a48ba91825ac24c2d22efd7398a8f34"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","dfc5165c746a9320988466f1b5f7337f"],["D:/hexo/public/2019/09/15/28. 多态/index.html","9ad9c532ac62bf1cbf4e307fe2d19755"],["D:/hexo/public/2019/09/15/29. Defer/index.html","cc3f9741d0314904c00ee22d0eaee993"],["D:/hexo/public/2019/09/15/3. 变量/index.html","32771621912d4726044a377ef88ab020"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","042bdb939d3508b2a31f1864560c3bf9"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","47f762c990ce135b4ef4e0239939d31b"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","b5c0933436db8f8fefb6723a49372b7e"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","a7ecb57d8b54aed91911c3307d9f4671"],["D:/hexo/public/2019/09/15/34. 反射/index.html","3a89a9594c0e3dbf3e08b1328109249b"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","c208db1a0c1bad92eb5443cc1e9981de"],["D:/hexo/public/2019/09/15/4. 类型/index.html","f0bf4cf92a8750bf9348ffec6a8e620b"],["D:/hexo/public/2019/09/15/5. 常量/index.html","915dd40a5250c1232e03572cf825dec4"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","456a71ac6f9f0adeadaa6f280abaceab"],["D:/hexo/public/2019/09/15/7. 包/index.html","3b3a8c1cb238e2a5ffec9a8cf9bcac79"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","8aa14810330968297dceaaeefa9b144c"],["D:/hexo/public/2019/09/15/9. 循环/index.html","333f7421cf54a0b3f8658d938701567a"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","4d601c5637ec31b016045875ba88e69e"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","7f4f981e61d1ab5076e1ee7647f64254"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","a09f8e914cd403e4c1c18007f820a14b"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","dbb512a27ad70587e35dd8d4027b6202"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","8e5c0ed72bc365bd0d1cde530fa9f403"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","ce3e409cdb120c2e20df89296f00d682"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)-基础概念/index.html","df041c81529a5ce7be9c9a5c53086691"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/03/28/5. K8S之Pod(2)-生命周期/index.html","5eccdafcbf5a1d4d80f911459b7742f8"],["D:/hexo/public/2020/04/13/7. K8S之安装/index.html","22d962d24c8fa07305ae9feabb077509"],["D:/hexo/public/2020/04/15/8. K8S之常用命令/index.html","44958fc411d4c9906fafe2c66257e892"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","191515f3ec214e0140e83ec2560c0d1f"],["D:/hexo/public/2020/10/12/django使用锁/index.html","5e7f4a1f7b1b02df31297b96e739feae"],["D:/hexo/public/2021/02/25/6. K8S之资源对象/index.html","f71dcfd1d043aed2559d91615a0b4da4"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","d6618a9826f8b1f11126e71e450869a2"],["D:/hexo/public/archives/2019/09/index.html","1ee27faf04e45305c1380d96f4d247a5"],["D:/hexo/public/archives/2019/09/page/2/index.html","d6460c220bc5279b8009c2b0c8c34c3c"],["D:/hexo/public/archives/2019/09/page/3/index.html","94a0ee696da323459abd355bf1e1d4d9"],["D:/hexo/public/archives/2019/09/page/4/index.html","e61392e12ac6591a4e4598beb09ee1f6"],["D:/hexo/public/archives/2019/10/index.html","346717fe1c07a7cfef5649db8fc86088"],["D:/hexo/public/archives/2019/index.html","624b00b6a92f3cf3b02e1b4fcb24d847"],["D:/hexo/public/archives/2019/page/2/index.html","c7c072efb9dcbc0ac1284c686ae8cf0b"],["D:/hexo/public/archives/2019/page/3/index.html","8a3fc4e6046e24223e0e476c3417d7cc"],["D:/hexo/public/archives/2019/page/4/index.html","42bff7dbef17fbf33e3be2c68cc098ea"],["D:/hexo/public/archives/2020/03/index.html","1db588aceff657ca34665d5d3acd64ec"],["D:/hexo/public/archives/2020/04/index.html","52bc05a9d6d5fabecc212a631e20c17e"],["D:/hexo/public/archives/2020/10/index.html","17e45bf655d1c35e7b8422fe23f0c6d6"],["D:/hexo/public/archives/2020/index.html","d170d431a9bcf7084811486b78b3e824"],["D:/hexo/public/archives/2021/02/index.html","bd9c2e5853fc40909ea24313cc8d4a23"],["D:/hexo/public/archives/2021/index.html","e0df80ccd660f02947f315d74316fba5"],["D:/hexo/public/archives/index.html","2ddf6e2b6630ac98ca0ba28e9648c7ef"],["D:/hexo/public/archives/page/2/index.html","5a6020ccafaf56f4e202ef60bf918ea1"],["D:/hexo/public/archives/page/3/index.html","87446e91b26ba20762b8acd9d38b4cb5"],["D:/hexo/public/archives/page/4/index.html","f52dee00e73448fce6921b9f496b9919"],["D:/hexo/public/archives/page/5/index.html","b85c1147c1e268b74f80ee0021773440"],["D:/hexo/public/categories/GoGoGo/index.html","042fd277145b43c411d7d641e86bfba2"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","bfdf00d55a5d884bea883aee16ca5f69"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","a297446c4f5bc6816632c1139bc62174"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","6edccaa0ee1dbb2e9c2e3e17e11db1fd"],["D:/hexo/public/categories/Kubernetes/index.html","7f13dc10c0548e32434399c50e611dd0"],["D:/hexo/public/categories/Linux/index.html","bb2b7650c7cd8eea309e902e9a3d3b37"],["D:/hexo/public/categories/index.html","ba97ee9da2c32200eced50026b8a3e96"],["D:/hexo/public/categories/python/index.html","4aafdea88a219cf1124a9402925ab994"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","d39a2d67f0b6a86b7acedcf9551f0297"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","82fe5d79929a40e67be571b55cc09ff9"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","b70827440fd90c56b585f7fd4c623016"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","28e62e167d8625aed25dd003c2a6f67b"],["D:/hexo/public/page/2/index.html","bd68d3307e4eb8b23f2982d62e05bad9"],["D:/hexo/public/page/3/index.html","68d1e37b5b44d469c7746776a5213f71"],["D:/hexo/public/page/4/index.html","dafb0aa5f051d5ebbc010cac1557a06a"],["D:/hexo/public/page/5/index.html","8c1a9c4007e712f076e6f20408ebe8c5"],["D:/hexo/public/tags/DarkDown基础语法/index.html","d603683673aa22eff58572e78eb65ea0"],["D:/hexo/public/tags/Golang/index.html","9bc09035da40a3808ca7acc8040324cb"],["D:/hexo/public/tags/Golang/page/2/index.html","f5202046b0f147f8d1d62e10ffb1fbd5"],["D:/hexo/public/tags/Golang/page/3/index.html","e60111e12e119b22c60f1e720517c5a1"],["D:/hexo/public/tags/Golang/page/4/index.html","b0ba5eae7030421f7a10a09e4755253e"],["D:/hexo/public/tags/K8S/index.html","e64fc9d99264d7f0f436954cd6d758c5"],["D:/hexo/public/tags/Linux/index.html","7278a4eee15bd4f424817a97cdc09f3e"],["D:/hexo/public/tags/django-ORM/index.html","c72e9931c6d780cd0f7ce7bb801d01d2"],["D:/hexo/public/tags/django-redis-锁/index.html","afc9de72c116862123bdb7a7c37cfd66"],["D:/hexo/public/tags/index.html","53f94673cd7287aba7ae19dd3d45e6d7"]];
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








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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","484f21672a95429468eadf6390ab1387"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","63bc2c1b9dc53ecad8669d7afbcb31fb"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","518a5c7be59ced6110d1f9437be251e7"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","6c3da323fd77584a907d4c7377c244b4"],["D:/hexo/public/2019/09/15/13. Maps/index.html","16948cf5ad428f8271282233cb6a43fd"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","be95a936ba8f4e03f8b2d1bbda6c477d"],["D:/hexo/public/2019/09/15/15. 指针/index.html","78627d5a50fa5dfafbd23d504329bb51"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","a4151eb82b34ce385d36612e57cc19d2"],["D:/hexo/public/2019/09/15/17. 方法/index.html","5b99da38f8963e56b0f1c1b04194489c"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","5beb62c509d5410aaa13670f7e37f121"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","eccd3fe4d0ebb314dd01775de2e8e710"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","14ad3e3ae5389f3bdf0c41a65c2895c1"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","7ac56f14135ea90aa765980415db305a"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","8ece372ad0ca85d83c1986ac7737595b"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","17b1dacc9e3af88d2b6ddb93cfbb54be"],["D:/hexo/public/2019/09/15/24. Select/index.html","c17144a971751292d0764d41961c5ecc"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","74fcec43e27c3a58d4b41bee3cbba967"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","2ef0320c7a5f2d1ca491dfe711389d26"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","26f41d562697dcb4e78d7dd69e72f74c"],["D:/hexo/public/2019/09/15/28. 多态/index.html","60e07e023bb9316765b0570e4e49d671"],["D:/hexo/public/2019/09/15/29. Defer/index.html","d583273fea1e1daaef3b8491f6e81988"],["D:/hexo/public/2019/09/15/3. 变量/index.html","5c9078c9cf17f5a54863f47bc1c46e4f"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","139336a788216c6fbcc550468918ac0b"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","7b4c08daba78f9cdebaee61a75803ded"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","168e22795fdfc1a9c1b1e0c65ca5d964"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","02494eaa0df634dc48d95a5ec8998ba6"],["D:/hexo/public/2019/09/15/34. 反射/index.html","0079efcab824eac31dff18cd64419a38"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","dbe122eaa46715a42bb320c50a485936"],["D:/hexo/public/2019/09/15/4. 类型/index.html","b7821fb43b00d9ee3d31a657eb0d7dd8"],["D:/hexo/public/2019/09/15/5. 常量/index.html","36f8ce8b07ae02fb2f76eceb46c0a838"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","36a9ba316a04f34d6bd522087587aaa4"],["D:/hexo/public/2019/09/15/7. 包/index.html","e2620c2508d5988ffd88e35ed4fca108"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","d04142fe16953cfe4ba0b5213dd77c51"],["D:/hexo/public/2019/09/15/9. 循环/index.html","76f37088ce0edf755dafd9aee3b259f5"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","d639f76767dbe7c720f03087bd688ffa"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","c3be57234283b27a2b9dbe0bc026ec3f"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","755a89b876cbce2d51d25917d5d36626"],["D:/hexo/public/2020/03/21/1. k8s课程简介/index.html","346806b294176cabc0aac2f8d6ce1da5"],["D:/hexo/public/2020/03/22/2. k8s知识图谱/index.html","510b6285c44510dd06a091b50a351496"],["D:/hexo/public/2020/03/22/3. K8S 之组件说明/index.html","9fc6b2b8cc2e53af6ac753196854ec1f"],["D:/hexo/public/2020/03/27/4. Pod(1)/index.html","25ddf9f1b647cd5fdf7e36a3db6b8460"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","29ad91e442e7be8018728bfcbc1a7309"],["D:/hexo/public/2020/10/12/django使用锁/index.html","8afb0a5fcadc702326de53ae9f5bb9d4"],["D:/hexo/public/about/index.html","5b89daef1ab4ad3d3760457b06805947"],["D:/hexo/public/archives/2019/09/index.html","9fdd3f9a1842b676ee5e43c88ceb276d"],["D:/hexo/public/archives/2019/09/page/2/index.html","f51fafa341c69204862ed900d1e10ff2"],["D:/hexo/public/archives/2019/09/page/3/index.html","94551bc774b1e523c873b5fd4dfbacc2"],["D:/hexo/public/archives/2019/09/page/4/index.html","e4055d79d363fd4b57eb36e07577d8ee"],["D:/hexo/public/archives/2019/10/index.html","11706007a165b887ae83856feb6da2b7"],["D:/hexo/public/archives/2019/index.html","c9d0d04e06a770c1ebda9fe035bcb03e"],["D:/hexo/public/archives/2019/page/2/index.html","dd8a8faa791a3e9251b88ed4142c4c6f"],["D:/hexo/public/archives/2019/page/3/index.html","450a910874a9df6b44fbb26a77ef5b81"],["D:/hexo/public/archives/2019/page/4/index.html","297335e8edab362dd7a7583965c0b3e9"],["D:/hexo/public/archives/2020/03/index.html","38efd7d69c88748cb3f6f9306f5a6673"],["D:/hexo/public/archives/2020/10/index.html","7973757a961fd74fa718370b82397778"],["D:/hexo/public/archives/2020/index.html","b2fe1a2e077448e2ad347967128ecc2d"],["D:/hexo/public/archives/index.html","9b53c7b729d5b77fd74936530ac18c5a"],["D:/hexo/public/archives/page/2/index.html","ef96e30bee29372dc890d513f0d787fe"],["D:/hexo/public/archives/page/3/index.html","92db185aa819b39eaaee9046c14e81f9"],["D:/hexo/public/archives/page/4/index.html","a47b00db47adab805489e07acea547d5"],["D:/hexo/public/archives/page/5/index.html","9218be36394aeafdc0523cf3d6fc5842"],["D:/hexo/public/categories/GoGoGo/index.html","2a38a4703b692e676218b8c6ad4c32a8"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","8d41f0dfca635dd31e1209cb72312bef"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","640c6fcd8ad0c033ad72df639c88b5f9"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","7cd6be9bca0d0cd59cd67c6af8284b65"],["D:/hexo/public/categories/Kubernetes/index.html","cdfc98be398ecd12122adbf5e855004c"],["D:/hexo/public/categories/Linux/index.html","0e5bc4fd7d65468cc1bc77c8d11f30a8"],["D:/hexo/public/categories/index.html","b585275d8bbd4c4b9121973e08a8a7c6"],["D:/hexo/public/categories/python/index.html","762f989660e0f9fe72f81cdfcaca519c"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","18fdb1ecb734d9cf09e03b4c06d11aa4"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","d18186230d03f01c1a50ee8033f2898b"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","7dde7f88ca66b390e7581168a4f0fa27"],["D:/hexo/public/page/2/index.html","54dc95700c5da41e3e9b1ad6e5222065"],["D:/hexo/public/page/3/index.html","e81a8f659ce2e98df32f30ba1931be0f"],["D:/hexo/public/page/4/index.html","8abc213a606690f3e6bb913574da1d32"],["D:/hexo/public/page/5/index.html","31a340ef90da2e3334ebaaf592a9d342"],["D:/hexo/public/tags/DarkDown基础语法/index.html","9e6f4d0f856fbbd555065eebaf908b6f"],["D:/hexo/public/tags/Golang/index.html","83689f20510cd1e1bd55dc2f0ff1a28f"],["D:/hexo/public/tags/Golang/page/2/index.html","e6b7ed0f7eb71ce76910b73cc18c8258"],["D:/hexo/public/tags/Golang/page/3/index.html","e466d650e91861291383e5d689c05da9"],["D:/hexo/public/tags/Golang/page/4/index.html","2207de9875237fb52db75bfd814b1154"],["D:/hexo/public/tags/K8S/index.html","079d8dbdc493c1449d66b83ddcce6215"],["D:/hexo/public/tags/Linux/index.html","20a125307dbd7ad38b44b9c04454a319"],["D:/hexo/public/tags/django-ORM/index.html","3b6aca9d4827bb29fa707642a3fcf37b"],["D:/hexo/public/tags/django-redis-锁/index.html","efa2cd64f593e08b1dedf2929078d003"],["D:/hexo/public/tags/index.html","6996b20ac2824fdb3fb7aaf400b9ac0f"]];
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








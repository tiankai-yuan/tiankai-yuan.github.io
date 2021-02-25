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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","160b6b1d4f142cca0d045db87e784c57"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","3a12df0b1343fa5b88e7a6df5edd7a67"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","b6a1632c9b9a9186632f966f338d56a7"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","8cc1902472ecd6f5d0ccabd7ab1d5704"],["D:/hexo/public/2019/09/15/13. Maps/index.html","bc6ec7e08d427503660133b085b8a0ac"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","5931b38bd75658887e29656de638098a"],["D:/hexo/public/2019/09/15/15. 指针/index.html","3541885a8c4a8c31bf4efdf282daec85"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","80b566c005cf7f1ce2ab1fa8425f43df"],["D:/hexo/public/2019/09/15/17. 方法/index.html","0841e7bafcd108ba36d906de3b34a85e"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","76a2c49666218ba34aea33f43a913ea9"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","fa04004f5d442f045473243754859630"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","e185809490a8818d038bc2a66ec73b30"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","f8e9155b94f4f67d048061027ef5e88f"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","a3540cdb5267982aa960244c759aa6e7"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","de2429b32a146af1b99517300a6feca8"],["D:/hexo/public/2019/09/15/24. Select/index.html","19feef0afb233962fc5f1224127c71c7"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","014227d5310c0b57860180d1fe8346d4"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","6fa2b7ee0c1115a0833c00f1f14ffb2c"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","655831705dcbf50f2120626feb9a3e78"],["D:/hexo/public/2019/09/15/28. 多态/index.html","11edd3ae3494dffeb1b13eee91a11ec3"],["D:/hexo/public/2019/09/15/29. Defer/index.html","a04e02c1124930424dedfc14ab5a85ca"],["D:/hexo/public/2019/09/15/3. 变量/index.html","a934aeef103ba39d6153c19843f59226"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","3e3b85bd860f3c97eb530026f91d0060"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","ab697deb02ebad3f4bb73eba7c52364a"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","f747efe65aede9b5452e2c81aecd6fac"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","9c17393d286c9eb1078279015e1a9f6b"],["D:/hexo/public/2019/09/15/34. 反射/index.html","849cf91332bc5f7922c47a6992296248"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","c1384d33dc969841569275fa11c28433"],["D:/hexo/public/2019/09/15/4. 类型/index.html","02f50d55e18ac5ae289a083cf51ac5b9"],["D:/hexo/public/2019/09/15/5. 常量/index.html","43865ba34cb5abf2e37f6742d9ce0e25"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","3f155c5d3ffe3444b849c7e9eeab4e93"],["D:/hexo/public/2019/09/15/7. 包/index.html","cd9001287e689201335227734f4fb964"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","9143465bc3fa384487c107a0ee1b0c91"],["D:/hexo/public/2019/09/15/9. 循环/index.html","65004f984cd9e4327b2877b1031ab5be"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","88d592cdc594964e59e8482934c72abf"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","e2c107cd232e171ee3ffad8048882487"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","8c97c8377353a8ece798a4301a4d1474"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","2a686d779bd2c13f1ff6f33115295675"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","5812b418c9ea6ad02698db33242e5387"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","f9ad22fcfaf9048cd78f434d2775553a"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)-基础概念/index.html","3c92c7b9c2c72484f5bc257c26d9f3d9"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/03/28/5. K8S之Pod(2)-生命周期/index.html","ed2fff117e940ded7e30dafbc43e0ee6"],["D:/hexo/public/2020/04/13/7. K8S之安装/index.html","e98d0b6717a0f3f39b71156f679a129b"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","629404e15ebf5c44b2f20ffadb2c5050"],["D:/hexo/public/2020/10/12/django使用锁/index.html","31411bd6ef2c91a05dc98cdfd0e2bafb"],["D:/hexo/public/2021/02/25/6. K8S之资源对象/index.html","26f77d40fb01f91aaf3ee15110179a22"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","97913ae9e7fb84d607c6ea5460935872"],["D:/hexo/public/archives/2019/09/index.html","ee797358621d43917daa79b59136c902"],["D:/hexo/public/archives/2019/09/page/2/index.html","4f758ffe52c8f3650b7958bf14a4400c"],["D:/hexo/public/archives/2019/09/page/3/index.html","3c6b317a19dea7edbdef50677ce48e86"],["D:/hexo/public/archives/2019/09/page/4/index.html","320f02e4bd332779e1d625ce6e8f57d6"],["D:/hexo/public/archives/2019/10/index.html","bd6b3e5a3a4c4af777c43ea123c7fb6b"],["D:/hexo/public/archives/2019/index.html","8f71ac469f9f3a919e5e955a4e14f322"],["D:/hexo/public/archives/2019/page/2/index.html","7147eb4368d8f3c6b5d252240237365a"],["D:/hexo/public/archives/2019/page/3/index.html","39163078d212a50ef70b6d1302571a9b"],["D:/hexo/public/archives/2019/page/4/index.html","c097d29700865a7152f1deb47c794345"],["D:/hexo/public/archives/2020/03/index.html","1889170b5522665ffc1ccaef35261ea7"],["D:/hexo/public/archives/2020/04/index.html","fbc8e635f56f88ba5de48703386e77c2"],["D:/hexo/public/archives/2020/10/index.html","892c3458dbcb8a83455570fb0f2f9aa7"],["D:/hexo/public/archives/2020/index.html","f6ad209e08c3dad3dc6165c6a1ed43e1"],["D:/hexo/public/archives/2021/02/index.html","9c9ae24c12a5e02e1ce6bf03e5bbd2fb"],["D:/hexo/public/archives/2021/index.html","f72913b7f8d21f5dd2695a224bf62e4c"],["D:/hexo/public/archives/index.html","da07ab95642e4c67a0c2d71871df63e7"],["D:/hexo/public/archives/page/2/index.html","f188562a2d49f2794a6a86d07bbe1b4b"],["D:/hexo/public/archives/page/3/index.html","b151cf38a49d809271d5d66aa6ffe4af"],["D:/hexo/public/archives/page/4/index.html","0ec884bc2bdbb952bb1f6545b07470ac"],["D:/hexo/public/archives/page/5/index.html","414f5e9042ac5439759cee7c91b697a2"],["D:/hexo/public/categories/GoGoGo/index.html","8e20c81480e2bb23014a729d3a68c279"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","d029ab5df4f56e1a11d8fbb6fdb98f96"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","d6540495046711fe215836b723d1718c"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","b94d5760df728e407340d7684e4910ee"],["D:/hexo/public/categories/Kubernetes/index.html","41348e49de41667ee76867f16700b7c2"],["D:/hexo/public/categories/Linux/index.html","d9919306f391391fb333c76ee7a46f12"],["D:/hexo/public/categories/index.html","eb2001ab2387ec39212aa5b69b760dda"],["D:/hexo/public/categories/python/index.html","b8a7e32c21dcf29cc1d4af698010cf25"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","f9d3d427e1ed9aaa86b48abded9a1f1e"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","82fe5d79929a40e67be571b55cc09ff9"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","87efff45246e597d9e161f69ad613d58"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","96091f1f1cdfdce21afc46c6e0aefcd5"],["D:/hexo/public/page/2/index.html","8bb2deb1947dfab6ba00134c5617b7a5"],["D:/hexo/public/page/3/index.html","4bbe7d97484eb7e67c3458e8421c2302"],["D:/hexo/public/page/4/index.html","2cdf1bd5f8edf58c5983a17c00a31197"],["D:/hexo/public/page/5/index.html","b70c0d7e6420f8d37b8259a4cc9e08a6"],["D:/hexo/public/tags/DarkDown基础语法/index.html","f9fc08bf644507329676ab4389cc94bc"],["D:/hexo/public/tags/Golang/index.html","a58871278caac58c105c5f752c1b69a9"],["D:/hexo/public/tags/Golang/page/2/index.html","3c4673c4ade8277380489804fd6291a5"],["D:/hexo/public/tags/Golang/page/3/index.html","ac8b520b2276faadb263d56b4198eb87"],["D:/hexo/public/tags/Golang/page/4/index.html","d7c84de359e6d1d3639b53006b16bbc1"],["D:/hexo/public/tags/K8S/index.html","6f25d5051c4cb01d172362acb09758dc"],["D:/hexo/public/tags/Linux/index.html","895fb7608a4c633fb04efbab767fe967"],["D:/hexo/public/tags/django-ORM/index.html","edb7e38a709d682854ff46d481ee2f1e"],["D:/hexo/public/tags/django-redis-锁/index.html","2b28eacaa12fc0c8ffebcc9467c9f5b0"],["D:/hexo/public/tags/index.html","2b25aa3635de05275493960a5c270455"]];
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








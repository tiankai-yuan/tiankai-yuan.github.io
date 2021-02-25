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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","484f21672a95429468eadf6390ab1387"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","63bc2c1b9dc53ecad8669d7afbcb31fb"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","518a5c7be59ced6110d1f9437be251e7"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","6c3da323fd77584a907d4c7377c244b4"],["D:/hexo/public/2019/09/15/13. Maps/index.html","16948cf5ad428f8271282233cb6a43fd"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","be95a936ba8f4e03f8b2d1bbda6c477d"],["D:/hexo/public/2019/09/15/15. 指针/index.html","1115a2c7d4461471e6c359c7d1dc1c85"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","a4151eb82b34ce385d36612e57cc19d2"],["D:/hexo/public/2019/09/15/17. 方法/index.html","5b99da38f8963e56b0f1c1b04194489c"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","5beb62c509d5410aaa13670f7e37f121"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","eccd3fe4d0ebb314dd01775de2e8e710"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","14ad3e3ae5389f3bdf0c41a65c2895c1"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","7112ef2a5f5f69314f460e3ac22bcd3a"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","8ece372ad0ca85d83c1986ac7737595b"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","17b1dacc9e3af88d2b6ddb93cfbb54be"],["D:/hexo/public/2019/09/15/24. Select/index.html","c17144a971751292d0764d41961c5ecc"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","162b6844fd7719e43fb1f155c8f6e7d8"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","2ef0320c7a5f2d1ca491dfe711389d26"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","26f41d562697dcb4e78d7dd69e72f74c"],["D:/hexo/public/2019/09/15/28. 多态/index.html","60e07e023bb9316765b0570e4e49d671"],["D:/hexo/public/2019/09/15/29. Defer/index.html","d583273fea1e1daaef3b8491f6e81988"],["D:/hexo/public/2019/09/15/3. 变量/index.html","5c9078c9cf17f5a54863f47bc1c46e4f"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","139336a788216c6fbcc550468918ac0b"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","7b4c08daba78f9cdebaee61a75803ded"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","168e22795fdfc1a9c1b1e0c65ca5d964"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","02494eaa0df634dc48d95a5ec8998ba6"],["D:/hexo/public/2019/09/15/34. 反射/index.html","0079efcab824eac31dff18cd64419a38"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","dbe122eaa46715a42bb320c50a485936"],["D:/hexo/public/2019/09/15/4. 类型/index.html","b7821fb43b00d9ee3d31a657eb0d7dd8"],["D:/hexo/public/2019/09/15/5. 常量/index.html","36f8ce8b07ae02fb2f76eceb46c0a838"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","36a9ba316a04f34d6bd522087587aaa4"],["D:/hexo/public/2019/09/15/7. 包/index.html","e2620c2508d5988ffd88e35ed4fca108"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","d04142fe16953cfe4ba0b5213dd77c51"],["D:/hexo/public/2019/09/15/9. 循环/index.html","76f37088ce0edf755dafd9aee3b259f5"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","d639f76767dbe7c720f03087bd688ffa"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","c3be57234283b27a2b9dbe0bc026ec3f"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","6a8227e3f9407590b5f7c8c892d43d87"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","3de5ae743977c31e035cada8bb8f2351"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","7476a1a8f9bd7fc3e8aecf472ddcc5d1"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","f1594613cb023ac6a76f326276bce9c1"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","29ad91e442e7be8018728bfcbc1a7309"],["D:/hexo/public/2020/10/12/django使用锁/index.html","7de69dbfaf563d04304a42490238a34d"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","fa32841515d8c2ceba34679ad37fd0ae"],["D:/hexo/public/archives/2019/09/index.html","329db6c7c235edd4a5a99aee85ff3465"],["D:/hexo/public/archives/2019/09/page/2/index.html","8fedc64eb6090442cf7afe15a9901263"],["D:/hexo/public/archives/2019/09/page/3/index.html","1ae84921c1becdb3b8218b459b4346e9"],["D:/hexo/public/archives/2019/09/page/4/index.html","58fe8f553b2c74b892dae15bc66c3e20"],["D:/hexo/public/archives/2019/10/index.html","06010c508c9a6e0858d2ce1d11fd5c18"],["D:/hexo/public/archives/2019/index.html","c717d8423e4b2745083a0e4bb6a3e977"],["D:/hexo/public/archives/2019/page/2/index.html","d94829a0816b9491c1c21822ab07b3b9"],["D:/hexo/public/archives/2019/page/3/index.html","b7d198c314b2904ef048884277ed3354"],["D:/hexo/public/archives/2019/page/4/index.html","33c549ec0fe315eae764010b9ea201c8"],["D:/hexo/public/archives/2020/03/index.html","ee80291f8326a831727860faa7d0cc24"],["D:/hexo/public/archives/2020/10/index.html","8858f7ef8d6d37cffe6c294cecd983f9"],["D:/hexo/public/archives/2020/index.html","5481392a2cef59d35c838d26f9f4b2b8"],["D:/hexo/public/archives/2021/02/index.html","1a703f1c9fd0d6f061480c06f6503ab3"],["D:/hexo/public/archives/2021/index.html","0935ae8c1c57b09aba78918c2c011eb3"],["D:/hexo/public/archives/index.html","8a12012e7b3760677cea879bd05f0eba"],["D:/hexo/public/archives/page/2/index.html","7915d26bbf6fd179aba38ae594013413"],["D:/hexo/public/archives/page/3/index.html","1f22803635c55754dc86ca3660f802d5"],["D:/hexo/public/archives/page/4/index.html","4f95de82406a792381d4dbcccb90991d"],["D:/hexo/public/archives/page/5/index.html","76d776a4aa4c1149d4e9e88a13865430"],["D:/hexo/public/categories/GoGoGo/index.html","b96de11ed7ab057ec45afae95d4a70f5"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","9cb2d676ef01316b9b1e305c5d7e7db3"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","e944d0516e16c618a4014415bf13bb63"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","81cdb34c959ff25adfbd6e66155c1fdf"],["D:/hexo/public/categories/Kubernetes/index.html","576e8d7912c4a5f864cdd14cec62e087"],["D:/hexo/public/categories/Linux/index.html","df4612dec2a870d6a0e85360c996c70b"],["D:/hexo/public/categories/index.html","fadaf8fa689359033493b258c6479196"],["D:/hexo/public/categories/python/index.html","45926084b327e1d4e007b6a49db1963f"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","f8231c2875ea0521010594c24fc4dc40"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","3207891f45152fb7b6b4ce23d4f027bd"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","368eaf731e2c82ac8123d9cbaa723778"],["D:/hexo/public/page/2/index.html","48bac6c38468180c64ba26e8d2f43f84"],["D:/hexo/public/page/3/index.html","37adb9d7a15f30734476201f688e381f"],["D:/hexo/public/page/4/index.html","5cf98ca9980742cea2055f01c1840a1b"],["D:/hexo/public/page/5/index.html","90663bc26ba8ffe414373a67b492d332"],["D:/hexo/public/tags/DarkDown基础语法/index.html","936183b65c0fb069ba0c771bf696bc30"],["D:/hexo/public/tags/Golang/index.html","f0ac18022e40fdf55e80ccf873103e88"],["D:/hexo/public/tags/Golang/page/2/index.html","3755be2f57cf32e997a234768354bb20"],["D:/hexo/public/tags/Golang/page/3/index.html","7ce93979440bec1d63fb563c2c533fbf"],["D:/hexo/public/tags/Golang/page/4/index.html","32e6916a92af033fb0a20c1e8555ff13"],["D:/hexo/public/tags/K8S/index.html","a1602f440dcaba906d046e90140a53ed"],["D:/hexo/public/tags/Linux/index.html","8208cfb7c643c49d253a58033a3c7b87"],["D:/hexo/public/tags/django-ORM/index.html","8222c74ae35c1bdf965e3f7fb4290c95"],["D:/hexo/public/tags/django-redis-锁/index.html","91b2b2d625dacd187078d9a8010b6d01"],["D:/hexo/public/tags/index.html","2c82c41a2033949a55f288ef32335471"]];
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








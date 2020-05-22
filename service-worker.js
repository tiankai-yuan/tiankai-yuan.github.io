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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","6086a60390f2c4cbd869ea231ea598a3"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","f739cde56a1c092d8f33841c3eedffee"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","fc845480a5bb0831fa8d91e4d9c4ded2"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","f9d3e062eefc071754b25b01145bf832"],["D:/hexo/public/2019/09/15/13. Maps/index.html","3909d762c776da320ca6110f995ad4cb"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","4414b5ec5ced32456f73120e8967fe13"],["D:/hexo/public/2019/09/15/15. 指针/index.html","fdc9e04ecdb50c998c484292326000ea"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","19e95b8e34be912699a7347638202bd0"],["D:/hexo/public/2019/09/15/17. 方法/index.html","4812e5d55a0d20693248bc7794309e4d"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","ecdbc4bb4519c3690545162f9a61d7bd"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","fb498f9423239c3577f47d39748c8beb"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","9b4409324d71e949e7af064e8eeeceb7"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","11eafa58011bede7f62bdf9466318834"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","74b1796181d1034e78ec3605c935f4e1"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","25065189a76981c625eeeb7806cc7208"],["D:/hexo/public/2019/09/15/24. Select/index.html","c70de14ae95778eef5d22a6253077262"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","24019bcbeb7fe7d0b81b08f461b14c9d"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","7a5a2ad170a7c88fd7158070382f804f"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","b9176063f2bd5477676424e0e01b51cf"],["D:/hexo/public/2019/09/15/28. 多态/index.html","22def28b9eeec8a27d9afbfeb2ea5763"],["D:/hexo/public/2019/09/15/29. Defer/index.html","74f1386c94423b1218045fccf3aaae71"],["D:/hexo/public/2019/09/15/3. 变量/index.html","f6d15124ebc2b1de57327380feec41da"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","1c00de5f161388fdbf9423bb19d608b2"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","376d307920945a399560571d06c0d3e1"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","44c5fd07d40db0a78ee5d38bb3710a42"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","a7c53ef177b3a69660254e63d3e0852c"],["D:/hexo/public/2019/09/15/34. 反射/index.html","46ad7ee8926a4cd1013215df18cc2fdf"],["D:/hexo/public/2019/09/15/4. 类型/index.html","e05e4ddc9f90741c184533b3b0908e76"],["D:/hexo/public/2019/09/15/5. 常量/index.html","63bea8faceecf4ac936dc9ebfb590593"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","232e2523152a414755cc2b215e95d5c2"],["D:/hexo/public/2019/09/15/7. 包/index.html","6f7d512d3548c5169599369e651046d1"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","a749be078c96d7e2eb996ce8f3007268"],["D:/hexo/public/2019/09/15/9. 循环/index.html","fb2d0edffe67d27e844aea8866e962b1"],["D:/hexo/public/2019/09/17/35. 读取文件/index.html","ba4737b460cb07df1b03d2db897c5084"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","3884029fc9e67e78c8e7bef923413127"],["D:/hexo/public/2019/09/17/关于celery的一些操作/index.html","d523111b8b590c578b79c502425ab127"],["D:/hexo/public/2019/09/23/MarkDown语法/index.html","30508fef0f643a9355ba6c4687290d48"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","b480fbbf2f00f06e7e489b8e9ea157b8"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","a5e93ab44e82c4a125b94203966ac5ff"],["D:/hexo/public/2019/10/28/django使用锁/index.html","8d0f0fa6481a7ff54bd21296ea81bfb4"],["D:/hexo/public/2020/03/22/# K8S 之组件说明/index.html","c904d6cf727d318e243efa07d8ce3d92"],["D:/hexo/public/2020/03/22/k8s知识图谱/index.html","c777c11b9b8939bdd11c108b38a82a0c"],["D:/hexo/public/2020/03/22/k8s课程简介/index.html","24408dbc68d0cc8fe5af8c345332716b"],["D:/hexo/public/2020/05/22/k8s知识图谱/index.html","52715b83303dc25e21c67e8f51d06280"],["D:/hexo/public/2020/05/22/k8s课程简介/index.html","aedf5c2e86cc8e7a24d80379bbcee238"],["D:/hexo/public/about/index.html","529b82dcabe9765c116aa29ebeebcb07"],["D:/hexo/public/archives/2019/09/index.html","b84b909e405151cfdccaaeff413452dc"],["D:/hexo/public/archives/2019/09/page/2/index.html","976736148e9f4ef0fac1ae61d367f6e4"],["D:/hexo/public/archives/2019/09/page/3/index.html","ca8cc47b9fc4ef31d4b5ac8ec2c7effb"],["D:/hexo/public/archives/2019/09/page/4/index.html","4bfff9b9469d4b1b2b51b8a80968a39b"],["D:/hexo/public/archives/2019/10/index.html","23de2f90cdea160226b7f21901d31d4d"],["D:/hexo/public/archives/2019/index.html","b2c7091c211ae008d7b1b596aeed8103"],["D:/hexo/public/archives/2019/page/2/index.html","e3a907cf1c1244b8b919c4c62d2534fc"],["D:/hexo/public/archives/2019/page/3/index.html","23a7949a69bdc97af8559447c565daf4"],["D:/hexo/public/archives/2019/page/4/index.html","de3eec89b5808dc0b7d843aac9d890a3"],["D:/hexo/public/archives/2020/03/index.html","64ca6b278c2102f927ed0cb2582f6d6e"],["D:/hexo/public/archives/2020/05/index.html","9ff9934bcd83953df5a376f9b1c0c53f"],["D:/hexo/public/archives/2020/index.html","cb80f8644188c257e9d51dd867f9ab83"],["D:/hexo/public/archives/index.html","7cbc17386f7a9e41663a95a6104dcfd4"],["D:/hexo/public/archives/page/2/index.html","7940875a7334a4a0a43ff6d184748718"],["D:/hexo/public/archives/page/3/index.html","21570a40878b8040598fee6b1ec2ba06"],["D:/hexo/public/archives/page/4/index.html","21ae122a7864407a42a3eb2ee50ec300"],["D:/hexo/public/archives/page/5/index.html","abffe2d7060b7171e18b98961e7895e6"],["D:/hexo/public/categories/GoGoGo/index.html","45315ffe6a64e4e7fa0644a1e131d5b9"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","59f9ded04f907b0e117e280b68aabc5f"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","4532f23f6c833c254914f3cdb63dada5"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","fd6698c7d96196a8a89c0aac371a7bf8"],["D:/hexo/public/categories/Kubernetes/index.html","2dcf3adf2e97f36724d10f0db79f87aa"],["D:/hexo/public/categories/Linux/index.html","43ab5fc80461fcbc7666b7e8e975733a"],["D:/hexo/public/categories/index.html","3990406fc34b7552624f23e73df66be3"],["D:/hexo/public/categories/python/index.html","12a99d004b99504539e6f44029c40c70"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","eca4414b167638c0a52a627f695ee653"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/celery.jpg","03f0af7b8ee68d10f81fcfdadd42c41f"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","85be70a11b39e49d19bc761d0e8a3097"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","e43ba0582dd22cd055a6571f749cea2d"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","62d7033d801fd845dce6483bd948209d"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","04a46a7491362e5d19d065a911b7114b"],["D:/hexo/public/page/2/index.html","e35a144dff03dbba360fbc8980f10d78"],["D:/hexo/public/page/3/index.html","0d7c5972d8104c703eb786eb7f88c16e"],["D:/hexo/public/page/4/index.html","81713b65ac325fefee048525075850c0"],["D:/hexo/public/page/5/index.html","bf6cb7b24cb170c3f71f8bca74d5043d"],["D:/hexo/public/tags/DarkDown基础语法/index.html","4fb8bbe210a8e3169e71a167fef98977"],["D:/hexo/public/tags/Golang/index.html","fd099a765c2f0af278fcf56ad62f69e7"],["D:/hexo/public/tags/Golang/page/2/index.html","8ce616716ae026f26f7bd0f497871383"],["D:/hexo/public/tags/Golang/page/3/index.html","d14ab6d576245251bb13ee22550e448c"],["D:/hexo/public/tags/Golang/page/4/index.html","0da7728361dc7c3be278a5acf9f742eb"],["D:/hexo/public/tags/K8S/index.html","98959f30e04e5f7c9fe95cf72df49c39"],["D:/hexo/public/tags/Linux/index.html","48625e1d73d1e764eca850223166a692"],["D:/hexo/public/tags/django-ORM/index.html","c55f61f54f8a5aba2d2e56dc91380335"],["D:/hexo/public/tags/django-redis-锁/index.html","ba601e327c288f75e01b01692fed132a"],["D:/hexo/public/tags/index.html","8bb6588cb2f92020bbfb87806289c791"]];
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








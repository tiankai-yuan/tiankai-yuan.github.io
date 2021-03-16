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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","46150402cbcc9190be589cf2171fa524"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","8020f31f089996f599169123e251fdf9"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","894d270f1a1b8d5f2ed67689bdea892d"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","6975e0d0a9e22e3bd8d3b9c83304394b"],["D:/hexo/public/2019/09/15/13. Maps/index.html","6414b3bfd4b113ecbc6fffee87b250c8"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","ddb95705fe7e1f4815734faa68fb9831"],["D:/hexo/public/2019/09/15/15. 指针/index.html","88720055ab931520a32b698d9fb70251"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","4a7d75124bd5339f5749d7f263642e6a"],["D:/hexo/public/2019/09/15/17. 方法/index.html","4c58eadd4c9f14f03b48a6b15dbb3dbc"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","3e8e2240b7cd9774ad2228458919a28b"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","775e233f805b5b5e35ce0587118ac91e"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","2772f3f9a234174cad574e70f25ab75e"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","c6190a596cd3f52b9a51979276675d88"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","7e745bd78017794b1ec89fa8ee62d93b"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","17baf9ba14b47e1517131e27cee02164"],["D:/hexo/public/2019/09/15/24. Select/index.html","15c1488ce36b35a295389bc0d7667f4b"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","91e730deb5c88cc5c33934a77838bf49"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","f616e005973285800bf9dfe1f907772e"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","b5b9fb44c38931646b5296be3dc9442e"],["D:/hexo/public/2019/09/15/28. 多态/index.html","493652e78dfa332273516e1626691602"],["D:/hexo/public/2019/09/15/29. Defer/index.html","a7fe1621ee391d141b821bd6f927d7cd"],["D:/hexo/public/2019/09/15/3. 变量/index.html","48c2cd157cc19dae7d196a48cf90a1a9"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","6bda2b21b3fb9a593b48a963e772f21b"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","821dcd3743c9c96e3f15c625c5641e6a"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","89c323681d966016653f2eacf446acb9"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","616e428c40e94c56ac71a5cb9d2f5ead"],["D:/hexo/public/2019/09/15/34. 反射/index.html","66bed1017b5ff219a309c33fc75a1bcb"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","907ada66d08b9a7c6bc0edd5741b5f0d"],["D:/hexo/public/2019/09/15/4. 类型/index.html","2a7ee6dfb1421d7e9024d68f6d63e6d4"],["D:/hexo/public/2019/09/15/5. 常量/index.html","bbe7f8225c2d52b287c877a33b5fa64a"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","9b2814bae5070ba28ad54ac2bc997c88"],["D:/hexo/public/2019/09/15/7. 包/index.html","aa6c822415048a3aa031ac2f6823ac82"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","255766f5b3eaecf5fd6f6da364b94e8f"],["D:/hexo/public/2019/09/15/9. 循环/index.html","b39f4b7f16f0fcda8713e90fdb58feca"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","d7a227d7eecd06e1e3c492f3945d80b2"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","c9426a5491ce30aa0e262117dcb5ba3d"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","1f7834fed68959834edd0fb4df382e0b"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","bcb0952fdf8f8e093d1cf911eb3cca94"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","07d3074df699ad9901525d383342b78c"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","9744c3aa6d1c946f0736d1a60155576b"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)-基础概念/index.html","d2cff57eb7e99ab90ef5de78c37d7fd7"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/03/28/5. K8S之Pod(2)-生命周期/index.html","2e80aa5c5a59014d23373104f56043a3"],["D:/hexo/public/2020/04/11/6. K8S之资源对象/index.html","3432a73eea04d204a58efb836fbebfc4"],["D:/hexo/public/2020/04/13/7. K8S之安装/index.html","775f3337f879e3e8669bf4cba0823567"],["D:/hexo/public/2020/04/15/8. K8S之常用命令/index.html","7d106111e5064507a5535febbfec999c"],["D:/hexo/public/2020/05/20/10. K8S之svc/index.html","0645179be41ef2b94cb15d7afa9bf3e3"],["D:/hexo/public/2020/05/20/9. K8S之deployment/index.html","420523f3de17a6622e88678db1cbc5d7"],["D:/hexo/public/2020/05/22/11. K8S之Ingress/index.html","523339b6e406c59bf1a86894ef9fc196"],["D:/hexo/public/2020/05/22/12. K8S之configMap/index.html","9d14090439ebae308ea5f8c3bf847d3d"],["D:/hexo/public/2020/06/03/源服务器搭建以及deb包制作文档/index.html","b0fe9a2ff160f67524ab022a342397d2"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","ffc38759da9dc0dce9bbc36e7ecfcc7b"],["D:/hexo/public/2020/10/12/django使用锁/index.html","c253b0c1bb85a1f48bbce4a8a94e6d8b"],["D:/hexo/public/2021/02/25/6. K8S之资源对象/index.html","a0c8c60db77874d1cb52906a61bbe4f8"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","1d99978a17a14751283c446895d9462a"],["D:/hexo/public/archives/2019/09/index.html","8613fd4e5def9d5a631d833a08ede9d4"],["D:/hexo/public/archives/2019/09/page/2/index.html","0ec8b4ef2759b8ff20fb5ae5986725fa"],["D:/hexo/public/archives/2019/09/page/3/index.html","a9a73e6b1117f730285d07e37bdee5f1"],["D:/hexo/public/archives/2019/09/page/4/index.html","6164fbeb6fbd53646db06d04730ddff8"],["D:/hexo/public/archives/2019/10/index.html","a3dae0491a46b397e1cf7b5f5a9eee4a"],["D:/hexo/public/archives/2019/index.html","b848d57ee6bc5a3ba23e86d17b18133f"],["D:/hexo/public/archives/2019/page/2/index.html","cd926b85e147d1c1d80e481c4fc5288f"],["D:/hexo/public/archives/2019/page/3/index.html","268508a7eff040e713f77faee977b9c7"],["D:/hexo/public/archives/2019/page/4/index.html","a419c073a82ce09c01ca580aa4f732bd"],["D:/hexo/public/archives/2020/03/index.html","2130bcab6e666ea3d9a021c65f5dce0a"],["D:/hexo/public/archives/2020/04/index.html","2c4da0832dc6752102e19ccc1980b4db"],["D:/hexo/public/archives/2020/05/index.html","29343ec83638cc6b6d59398bdbdd9de8"],["D:/hexo/public/archives/2020/06/index.html","2694e680d970c82780c9036bbd2e6432"],["D:/hexo/public/archives/2020/10/index.html","73157e17ad11ac61dc9c7c8ba810c0e2"],["D:/hexo/public/archives/2020/index.html","af8699e262ada7645ccffda2955a9204"],["D:/hexo/public/archives/2020/page/2/index.html","235573cdef2b4dd83fdc2c6ce0f9d7b7"],["D:/hexo/public/archives/2021/02/index.html","249f3b64798173efafe1467ecada1888"],["D:/hexo/public/archives/2021/index.html","6753faedfcce4c9e78ae0f4797de7061"],["D:/hexo/public/archives/index.html","c1a9d9f43efe29f110f39093e3ecbf55"],["D:/hexo/public/archives/page/2/index.html","8852b3d2c8f9d5fd28f0537e9e215f2b"],["D:/hexo/public/archives/page/3/index.html","9d068f4d3c6eaaa5248025818b1e819c"],["D:/hexo/public/archives/page/4/index.html","3f6f11b601b93ab75e29fbcd98e2a878"],["D:/hexo/public/archives/page/5/index.html","e9cb969cd2fca088a187372190e71b4a"],["D:/hexo/public/archives/page/6/index.html","49768cabe8ba0c23469912acd92605d9"],["D:/hexo/public/categories/GoGoGo/index.html","5738b062d9b138a1c688b6f65a670a49"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","9185d54f16f0440e07da7e241ea8c414"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","ec6c98c4154779fac66d8e35d7ebcbd0"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","16ead622d5dfb9c82bb549dcd73e492c"],["D:/hexo/public/categories/Kubernetes/index.html","037e3cd94045aeef89516b2d491a0bee"],["D:/hexo/public/categories/Kubernetes/page/2/index.html","996f9019dc77b0215a1fd62adf27a381"],["D:/hexo/public/categories/Linux/index.html","0266cbbcb339e50d5033063c88c7b537"],["D:/hexo/public/categories/index.html","8ab34a879ad1b34d3a07f652e6dfd229"],["D:/hexo/public/categories/python/index.html","a95cb68d36f2dd3468bdeddbdadfa698"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","9dc3214d4a7fd075c18ba9f424bdc29f"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","82fe5d79929a40e67be571b55cc09ff9"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","eac27142c157a1275a20a7aaae1db9d5"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","cf1eac29c0e9a59b3c865f2fffcca9e8"],["D:/hexo/public/page/2/index.html","9cdad0112664cf8266ed6e3b116165f4"],["D:/hexo/public/page/3/index.html","336fa1c3f18912442ebdce66d5b44d8d"],["D:/hexo/public/page/4/index.html","a90fb606a3e321cc00666db8ba665d0d"],["D:/hexo/public/page/5/index.html","c592e8225a610786da725def11920c18"],["D:/hexo/public/page/6/index.html","f22c37636a879cfad8801d513dd97af1"],["D:/hexo/public/tags/DarkDown基础语法/index.html","c4e3cbb862e88ecbe8315e1ebcb88ebf"],["D:/hexo/public/tags/Golang/index.html","d6b1d007cfd6b0e1e7ae9ee2cdfd886b"],["D:/hexo/public/tags/Golang/page/2/index.html","ee1b2c480a580a3d53fd6b4eaf21d092"],["D:/hexo/public/tags/Golang/page/3/index.html","dcfb3b9eaeea3fc35df94515ab073043"],["D:/hexo/public/tags/Golang/page/4/index.html","601228c28c5df2d30f385675666ed4bb"],["D:/hexo/public/tags/K8S/index.html","ef50fc501ba517b059bd5aec867152c9"],["D:/hexo/public/tags/K8S/page/2/index.html","a152f765337e080c68235043dba4d1bd"],["D:/hexo/public/tags/Linux/index.html","7e299a3bb9cc17b530fad631b2584c61"],["D:/hexo/public/tags/django-ORM/index.html","773c396c2d115bc12e9f6d5f1b0bb34f"],["D:/hexo/public/tags/django-redis-锁/index.html","e5776fcf30b9074ecb3542558479ecb4"],["D:/hexo/public/tags/index.html","6de161e37559011ddb169cc9f76fa8d3"]];
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








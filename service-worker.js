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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","c7e34549bd7942ffcec53e8d1721e53a"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","8b09a4022dba32cfb1ed688092b88c2f"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","38cf8dbd68011dc1c7b8752d77d371f8"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","515deff00b4e37ce134f3bfa10eb18aa"],["D:/hexo/public/2019/09/15/13. Maps/index.html","86f61c88fd059edde5e5e3af6e1c4c42"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","61b20afbfcf81a416c17024ebb98da58"],["D:/hexo/public/2019/09/15/15. 指针/index.html","f6af7d10b0fca13b1c1fcaa8909f2710"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","d47f5688ae0b2f03471b666610f0b42b"],["D:/hexo/public/2019/09/15/17. 方法/index.html","e557fd1939b4e267ea37fff7d61c5400"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","eaa4d584e074ca899dea0a914d3a42d6"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","1f0df971f11ae6e7e20885840aa3e6dd"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","b3c2ae37876fd78dcbbc157f151b657a"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","525561cb1121167a7d4b8909b4a7ecbc"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","34c2a64a49a6fd2f77463877e2abb509"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","4e06da30f40385d4732db502c4b702b8"],["D:/hexo/public/2019/09/15/24. Select/index.html","7ee08680a30b312d30a3428129ae5955"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","e48a48225d8de039a0269de056bbd7fb"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","9f63dc53b5d064daae590c452ba85bb0"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","d8cb896a341694839442ce7797752d01"],["D:/hexo/public/2019/09/15/28. 多态/index.html","69eff4753132bf16c4d9a9ca8be07301"],["D:/hexo/public/2019/09/15/29. Defer/index.html","8bbb6da75a1d4ad1cf96b5c7c3c50552"],["D:/hexo/public/2019/09/15/3. 变量/index.html","58aa859a1bf088c76bbe15ba642d37bd"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","3552ac4992a723c156c37c22aa238f33"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","981987f597b353d2563e63723cdc30b8"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","b62607e89bde035e7717318ad71a9f3d"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","1ad3f730651b9b26b8daf4a4a80c3a2a"],["D:/hexo/public/2019/09/15/34. 反射/index.html","e700c64f7a109ef70426e17ca85a6793"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","9b2adaf159569918d66322cfe4ceff5a"],["D:/hexo/public/2019/09/15/4. 类型/index.html","6c3a1bc3eb7152d6a6400a191f000548"],["D:/hexo/public/2019/09/15/5. 常量/index.html","7a62615eb0d91d93ea45c49a68e31eca"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","80ab3c57d894d41d103cba801fe77f0c"],["D:/hexo/public/2019/09/15/7. 包/index.html","316da1030fc58ac6408d318579862555"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","0434f81d3c7dd4d55631a99edfacc9f8"],["D:/hexo/public/2019/09/15/9. 循环/index.html","0170df7326170a04853647ca145ab9a8"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","52e9186a0924c5ab49afe09563d7278c"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","5645f04c6441c9b89ee575aac19f3518"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","56af17ec9ea93b0d7a167f9525c83519"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","edd53ff5b77c2797c5f41be7d0063ed8"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","60b859cf96f267da3b04e0f7c81976fa"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","5b5d709ae0a4a7c0b5cffa5e65229ee5"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)-基础概念/index.html","cff8dd390546d5f94ee3b0e2c1832455"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/03/28/5. K8S之Pod(2)-生命周期/index.html","186c5b0f2d5c0dc33788b1731d1b0dc7"],["D:/hexo/public/2020/04/11/6. K8S之资源对象/index.html","a6e2cac20cf89f25020e41b0f42b9f39"],["D:/hexo/public/2020/04/13/7. K8S之安装/index.html","78643621257036db2afac2e5f1428be2"],["D:/hexo/public/2020/04/15/8. K8S之常用命令/index.html","1df7b834bef844c57ffc95ea3adfe2a3"],["D:/hexo/public/2020/05/20/10. K8S之svc/index.html","4647606e9747d8caea0bce5d855f1e4d"],["D:/hexo/public/2020/05/20/9. K8S之deployment/index.html","bcd18ca9b4f179a03023ca3170c9256d"],["D:/hexo/public/2020/05/22/11. K8S之Ingress/index.html","d75e3c65e4133632195f7412eab759e8"],["D:/hexo/public/2020/06/03/源服务器搭建以及deb包制作文档/index.html","b650ea126a1a04c173303ea352c4cc4a"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","d30861c7dd9a7b5c10fbb1cc4dff77c5"],["D:/hexo/public/2020/10/12/django使用锁/index.html","7659f09aeafa1e12d04eb35f81d0ed73"],["D:/hexo/public/2021/02/25/6. K8S之资源对象/index.html","a0c8c60db77874d1cb52906a61bbe4f8"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","86dbe24dd9708bf300c2bbf6329c487d"],["D:/hexo/public/archives/2019/09/index.html","3084f57316273b11a9b6a120d46d1599"],["D:/hexo/public/archives/2019/09/page/2/index.html","874d9c35089b9894c053f5bf10c35388"],["D:/hexo/public/archives/2019/09/page/3/index.html","7ac1ef946dededfa7e2f633e327b5f80"],["D:/hexo/public/archives/2019/09/page/4/index.html","f0113cf21dd0f425e1935ec3de5b8ec3"],["D:/hexo/public/archives/2019/10/index.html","b356fc012e2c7438dd2498d3c38c29d4"],["D:/hexo/public/archives/2019/index.html","339cc3512a1b16491d4f02da0f2bebf4"],["D:/hexo/public/archives/2019/page/2/index.html","8775e21f9d72838e7e548de3b011a024"],["D:/hexo/public/archives/2019/page/3/index.html","605503845cff3a0b4bf1eb29d427b972"],["D:/hexo/public/archives/2019/page/4/index.html","1e865792d4be2027ce52dccb80d9083a"],["D:/hexo/public/archives/2020/03/index.html","df4902823becf3da2323b412dc4893a9"],["D:/hexo/public/archives/2020/04/index.html","8686abcbd1e21a4249b1ba6ba76f02b6"],["D:/hexo/public/archives/2020/05/index.html","0a1bdbe05dbf528c54c6fb2c7d35da00"],["D:/hexo/public/archives/2020/06/index.html","be147441cf306b51099bcacd4b0926c0"],["D:/hexo/public/archives/2020/10/index.html","7b760518ddbbe24b615be1513fbab27c"],["D:/hexo/public/archives/2020/index.html","4f480aee27ea5d2e3eb0e62b1b611865"],["D:/hexo/public/archives/2020/page/2/index.html","83c1514f05e1934e39c0fbba564ae8df"],["D:/hexo/public/archives/2021/02/index.html","249f3b64798173efafe1467ecada1888"],["D:/hexo/public/archives/2021/index.html","6753faedfcce4c9e78ae0f4797de7061"],["D:/hexo/public/archives/index.html","f40d63c67648ec9cb9d2acca5c4e06da"],["D:/hexo/public/archives/page/2/index.html","c95ac9e08eacf0f4737c829311768219"],["D:/hexo/public/archives/page/3/index.html","887956f6d5d85e5f7927a98fcb8ea783"],["D:/hexo/public/archives/page/4/index.html","7500959f69a8e61858f823477d945e10"],["D:/hexo/public/archives/page/5/index.html","e7c79976be13ba0ed6c2983c1e276b8d"],["D:/hexo/public/archives/page/6/index.html","d3c459de3d0ca8553e03870ba0d0d787"],["D:/hexo/public/categories/GoGoGo/index.html","e29c534a331a0f3995ec33cbfe68d49d"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","ce6253311c316ae6e3adeea464ba014a"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","ec3cdd80e8fa2b1f1897bdc90ff93f7a"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","fdc2357d6482dd2c1e31dbfb9f1efa06"],["D:/hexo/public/categories/Kubernetes/index.html","4dc247c9569ce75f8eb40ccdda3b54f0"],["D:/hexo/public/categories/Kubernetes/page/2/index.html","9be50aa1ad18ccecaa5369f94a5cb043"],["D:/hexo/public/categories/Linux/index.html","33fdebbe94f1e7f5bf0ae4a9e9b61f6c"],["D:/hexo/public/categories/index.html","09e852ac6d1ff32d6a3ad3aa71db4108"],["D:/hexo/public/categories/python/index.html","336fe344319ed7592f9adaf1adfb8d4e"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","6782cd36302eecfe2e50e49738ffb2ca"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","82fe5d79929a40e67be571b55cc09ff9"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","257f1ded538cee60937670a3b6ea7134"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","98ffbd59d02628fb0025ebfee8b37df8"],["D:/hexo/public/page/2/index.html","e49bb3060b9b5d65b8203ab450abc1da"],["D:/hexo/public/page/3/index.html","e70c080121ac29ad7acd9193b9d0551f"],["D:/hexo/public/page/4/index.html","400ebaa2928ace7580acf7e77b9f7e4f"],["D:/hexo/public/page/5/index.html","f57794692d2b98d7acfdd9adf4645842"],["D:/hexo/public/page/6/index.html","eafb2937f74394530483b79d0905bc60"],["D:/hexo/public/tags/DarkDown基础语法/index.html","406286e392129639a473b6963be93f8a"],["D:/hexo/public/tags/Golang/index.html","1073dcb29d49839574e46c8d5b8e5988"],["D:/hexo/public/tags/Golang/page/2/index.html","a593231697d54fb7c32363fca9b2cf70"],["D:/hexo/public/tags/Golang/page/3/index.html","656287b0a7b1326535b9c79ed1c10f88"],["D:/hexo/public/tags/Golang/page/4/index.html","d871ddabb9799512c2519bdf4edc9fc4"],["D:/hexo/public/tags/K8S/index.html","c64ed306a689f9ddf9efa8acfe72a6e8"],["D:/hexo/public/tags/K8S/page/2/index.html","95ff0baef65f0d6f3f1496f3b1f18f74"],["D:/hexo/public/tags/Linux/index.html","ef1d8065f31700731370607ba657494c"],["D:/hexo/public/tags/django-ORM/index.html","83ae8b68fb3a8a1d1265aec1abe6a206"],["D:/hexo/public/tags/django-redis-锁/index.html","b5b3b420490e6c33d77f5221eaf10b11"],["D:/hexo/public/tags/index.html","b451205c7fc85b74e15bff68e9ab68c4"]];
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








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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","237c2ecaeffea626657aed8481f348e6"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","ae6e154362e84afc6562b9eaae8e22a7"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","0d32811835c4a9b02a9f26e15553f566"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","c007a670275bc635d854d4748517a1ea"],["D:/hexo/public/2019/09/15/13. Maps/index.html","f9dbe4ca7240cd6b1bdd836bed57d64e"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","ae50b367a1e52f9422b86f280924d3bd"],["D:/hexo/public/2019/09/15/15. 指针/index.html","def29d2f1cec5bcc0ce0f59bdf0ce064"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","1153e5bfbb0e0094b86d9cbdb89bf03c"],["D:/hexo/public/2019/09/15/17. 方法/index.html","40711eb7a7f1e39426b0e75dda83a7a2"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","88fecb3ad36d174301d8f0fa59cd8423"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","2ab8913c66f22c80a046c04907ff98a2"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","4e1d8b953532b397b6bdee7ae28a2786"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","2cc0fb7585604d64ecf9bc96be02fca9"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","98428dacf0d2d763e56f329d8fa2cea2"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","f2ee644b2bef62a39a056dc38172adff"],["D:/hexo/public/2019/09/15/24. Select/index.html","d250811a94f21931dac8fb216f7357dc"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","07e438cd333973b7e16f54ddadc15693"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","90afebfec7b7b4d74327e1f799d3abba"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","1b1223182ca7c3f7b9434638ebef3110"],["D:/hexo/public/2019/09/15/28. 多态/index.html","6fa6ab3a5e9a4f929abdb52671791075"],["D:/hexo/public/2019/09/15/29. Defer/index.html","a8cb6562c56ba423e3659e43359deedd"],["D:/hexo/public/2019/09/15/3. 变量/index.html","c0b20c6ab18e02990040a036354acb10"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","e89dcdbe8bbf13c2f95ad8c212daeab5"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","ea1c0478a19ec630687eabc32bd4894f"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","368a8908b724a9627c09b4cb7973b625"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","9d3770afc8f806d5487a4ca33d597f1a"],["D:/hexo/public/2019/09/15/34. 反射/index.html","c610c0822a930f8861b81c34fe944b0f"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","d69f0a200023597d06a3ec1b38dc587f"],["D:/hexo/public/2019/09/15/4. 类型/index.html","6221e63a8da875f1d6c49ec27585161b"],["D:/hexo/public/2019/09/15/5. 常量/index.html","0dcdf392cc2aaf28088df7d51d7a59de"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","5ec5449d713e4dea93784100bb6052f1"],["D:/hexo/public/2019/09/15/7. 包/index.html","f341bc933fc96229ae786da5a9b79f4d"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","f3ce618acbad8f9f2248c5bfc6201335"],["D:/hexo/public/2019/09/15/9. 循环/index.html","b6552ef90caced5a9ba0683a3adf2465"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","26e8c40be3d022d096b8becc946afec1"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","710679a2ad180da56bba17a06e2fd72e"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","8b48429014b4d9af8dc9a0ce7cef25da"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","5959e8fe378b1fd8012b8d14e0a79e3e"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","0f232b91d49d5383d0f51b3247572d21"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","202c6a3e237186e9ee59b864b5edc74c"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)-基础概念/index.html","bde4dedbcabff06d6035fc623a028a02"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/03/28/5. K8S之Pod(2)-生命周期/index.html","2766903300b26d0009f8c31aae2d96dc"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","47ecd905430cd7b7b0d658474005366a"],["D:/hexo/public/2020/10/12/django使用锁/index.html","e7db737a836b23d25b32459453d47f96"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","6c7c5f4e1e98a400284d71911114eb17"],["D:/hexo/public/archives/2019/09/index.html","3ef6ddc5b6b704c596b8a55432d89201"],["D:/hexo/public/archives/2019/09/page/2/index.html","a415fd4e9b1eaaa1aa7ae464731db2ba"],["D:/hexo/public/archives/2019/09/page/3/index.html","bc4c5ad5a94c4424328308f31ae187c3"],["D:/hexo/public/archives/2019/09/page/4/index.html","928aeda7836708637403b2f0c80fc977"],["D:/hexo/public/archives/2019/10/index.html","08fe2e94d38a7041bd0999e2e7f3bd9e"],["D:/hexo/public/archives/2019/index.html","7cb16ea3388915f474ed01c7c868cec6"],["D:/hexo/public/archives/2019/page/2/index.html","a7cce0d91120cdbb123b3b406f5fd3b0"],["D:/hexo/public/archives/2019/page/3/index.html","4742858550aaff0dbf4a7776f2233ad6"],["D:/hexo/public/archives/2019/page/4/index.html","9ba3b684a6a8b83b1f5c6aa03ad66f1c"],["D:/hexo/public/archives/2020/03/index.html","17503db46d0462cb2bbe99c6b6b8756f"],["D:/hexo/public/archives/2020/10/index.html","3020fbdea7851c7ba7d81b7239014737"],["D:/hexo/public/archives/2020/index.html","ba688ee3abfc46d714fe4afe3f8c95da"],["D:/hexo/public/archives/2021/02/index.html","1a703f1c9fd0d6f061480c06f6503ab3"],["D:/hexo/public/archives/2021/index.html","0935ae8c1c57b09aba78918c2c011eb3"],["D:/hexo/public/archives/index.html","01be3c80e9d17b1edd9ccc13f4a591f7"],["D:/hexo/public/archives/page/2/index.html","b7406f99c3c0b1d15c4981c02e7d6d3c"],["D:/hexo/public/archives/page/3/index.html","33da99c2ab2c7bb7a0e0d8263e433b1e"],["D:/hexo/public/archives/page/4/index.html","f5b988c9621cf865c3d471485da86aac"],["D:/hexo/public/archives/page/5/index.html","591eb5016900ee53aa7ad2026147eee4"],["D:/hexo/public/categories/GoGoGo/index.html","360550ca0407da8a34a1c380dc4215fe"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","2971d9c435245498d9b6283b4539890d"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","20f95a4718ac1f800861c8c62dc08afe"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","ac5b9f9f7bb43250509d9d41f43176ae"],["D:/hexo/public/categories/Kubernetes/index.html","514b49850792b5d98b0c96a3ee099947"],["D:/hexo/public/categories/Linux/index.html","7f87d0abf74db940ec1d1ddff0c7ee22"],["D:/hexo/public/categories/index.html","ea0917631880a4fb664b04a3d00643e9"],["D:/hexo/public/categories/python/index.html","02becfd9cff0e06e3b1d84c5aa1e7630"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","444555b276f144874162dfae9bc89f81"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","82fe5d79929a40e67be571b55cc09ff9"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","bf001a822826555102c8381bc47c2fd5"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","9e95a7db4f4f5ba5ea2989b265ec8e9c"],["D:/hexo/public/page/2/index.html","9835c00b635bb82495f94a2cbf61b7d6"],["D:/hexo/public/page/3/index.html","fd6f132c40fa2a9830c9ae759ec747cb"],["D:/hexo/public/page/4/index.html","4a14cad72c7a4a5e25b6d635725b07d2"],["D:/hexo/public/page/5/index.html","ae947c9d767f1c0e90f30daafcea2f41"],["D:/hexo/public/tags/DarkDown基础语法/index.html","6bd27ae080e26835bd82c2ca9760d9c0"],["D:/hexo/public/tags/Golang/index.html","1ae98d68ee59e1c5714afc78ce4a20b0"],["D:/hexo/public/tags/Golang/page/2/index.html","a00b118ba2b40db823303fe791ff5a04"],["D:/hexo/public/tags/Golang/page/3/index.html","3600397e085d8755dd3f61cf0f68f4b3"],["D:/hexo/public/tags/Golang/page/4/index.html","656ecf7ce648f89e14eb2c72bd70e71e"],["D:/hexo/public/tags/K8S/index.html","0a6ae33836e0859d45f683a202cb9b69"],["D:/hexo/public/tags/Linux/index.html","d62c086e9c59ad681a596cb66d64e557"],["D:/hexo/public/tags/django-ORM/index.html","ee758719fd5ef51b1db17cdfc1c8ac5c"],["D:/hexo/public/tags/django-redis-锁/index.html","221ef3d9dec10b33ad4279fb249d0691"],["D:/hexo/public/tags/index.html","a486887d4189641d6c4021d7ece80bdd"]];
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








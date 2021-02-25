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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","237c2ecaeffea626657aed8481f348e6"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","ae6e154362e84afc6562b9eaae8e22a7"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","0d32811835c4a9b02a9f26e15553f566"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","c007a670275bc635d854d4748517a1ea"],["D:/hexo/public/2019/09/15/13. Maps/index.html","f9dbe4ca7240cd6b1bdd836bed57d64e"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","ae50b367a1e52f9422b86f280924d3bd"],["D:/hexo/public/2019/09/15/15. 指针/index.html","def29d2f1cec5bcc0ce0f59bdf0ce064"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","1153e5bfbb0e0094b86d9cbdb89bf03c"],["D:/hexo/public/2019/09/15/17. 方法/index.html","40711eb7a7f1e39426b0e75dda83a7a2"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","88fecb3ad36d174301d8f0fa59cd8423"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","2ab8913c66f22c80a046c04907ff98a2"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","4e1d8b953532b397b6bdee7ae28a2786"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","2cc0fb7585604d64ecf9bc96be02fca9"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","98428dacf0d2d763e56f329d8fa2cea2"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","f2ee644b2bef62a39a056dc38172adff"],["D:/hexo/public/2019/09/15/24. Select/index.html","d250811a94f21931dac8fb216f7357dc"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","07e438cd333973b7e16f54ddadc15693"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","90afebfec7b7b4d74327e1f799d3abba"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","1b1223182ca7c3f7b9434638ebef3110"],["D:/hexo/public/2019/09/15/28. 多态/index.html","6fa6ab3a5e9a4f929abdb52671791075"],["D:/hexo/public/2019/09/15/29. Defer/index.html","a8cb6562c56ba423e3659e43359deedd"],["D:/hexo/public/2019/09/15/3. 变量/index.html","c0b20c6ab18e02990040a036354acb10"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","e89dcdbe8bbf13c2f95ad8c212daeab5"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","ea1c0478a19ec630687eabc32bd4894f"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","368a8908b724a9627c09b4cb7973b625"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","9d3770afc8f806d5487a4ca33d597f1a"],["D:/hexo/public/2019/09/15/34. 反射/index.html","c610c0822a930f8861b81c34fe944b0f"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","d69f0a200023597d06a3ec1b38dc587f"],["D:/hexo/public/2019/09/15/4. 类型/index.html","6221e63a8da875f1d6c49ec27585161b"],["D:/hexo/public/2019/09/15/5. 常量/index.html","0dcdf392cc2aaf28088df7d51d7a59de"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","5ec5449d713e4dea93784100bb6052f1"],["D:/hexo/public/2019/09/15/7. 包/index.html","f341bc933fc96229ae786da5a9b79f4d"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","f3ce618acbad8f9f2248c5bfc6201335"],["D:/hexo/public/2019/09/15/9. 循环/index.html","b6552ef90caced5a9ba0683a3adf2465"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","a84e8d31fa799e82d182fcf1ca2d7634"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","abc03818392e13928b87ca9ef1ebcf75"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","d1dc176389c4afbe80fc99413c75b3cf"],["D:/hexo/public/2020/03/21/k8s/1. k8s课程简介/index.html","6a1faa80242237a049afe15c131e68d1"],["D:/hexo/public/2020/03/22/k8s/2. k8s知识图谱/index.html","6d6916c4739e551d8d0f0158b57095e1"],["D:/hexo/public/2020/03/22/k8s/3. K8S 之组件说明/index.html","1298f7fd9e03a258c289b265058989c9"],["D:/hexo/public/2020/03/27/k8s/4. Pod(1)/index.html","d9674a052902a5a2f7e6bd46260c3e06"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","e56317f56a89d07f3a214983441da83b"],["D:/hexo/public/2020/10/12/django使用锁/index.html","490f0a97e1d328e07020f2090ac690f8"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","38e0652ba42fef707244354d40f507d0"],["D:/hexo/public/archives/2019/09/index.html","1393cbd2bad9264434e5f694380ff0a2"],["D:/hexo/public/archives/2019/09/page/2/index.html","afc540819d2c83c6e66c5688394c0858"],["D:/hexo/public/archives/2019/09/page/3/index.html","3f12dc94fe3df90fba3020964194208b"],["D:/hexo/public/archives/2019/09/page/4/index.html","e78b1485e5b5a1620774297fa235afc8"],["D:/hexo/public/archives/2019/10/index.html","bca63ec0ea7e3000693328e687c7eb76"],["D:/hexo/public/archives/2019/index.html","ccbe49761f467347ff6992e8980f291e"],["D:/hexo/public/archives/2019/page/2/index.html","feb090b4f35f1566f3eeae317acbcc46"],["D:/hexo/public/archives/2019/page/3/index.html","624cb5599157476f37dfdc16479d80ba"],["D:/hexo/public/archives/2019/page/4/index.html","fe237711957d9659e506ae066511091d"],["D:/hexo/public/archives/2020/03/index.html","9d83930a3086ade5acab52be107539d4"],["D:/hexo/public/archives/2020/10/index.html","4084bc817273dfe1759efd7b0bc7e027"],["D:/hexo/public/archives/2020/index.html","c75e77cf66d2b03545e88c70627c3612"],["D:/hexo/public/archives/2021/02/index.html","a1de74d2e5e285d5938100e7abe73a22"],["D:/hexo/public/archives/2021/index.html","e8ede1fb9f3b2e770227196ce0eaa917"],["D:/hexo/public/archives/index.html","523a1d3129c9f45598a61d03d15c4353"],["D:/hexo/public/archives/page/2/index.html","31b8625f3daa83a2db4eebf7d89496ad"],["D:/hexo/public/archives/page/3/index.html","2f9d97c6523d7c19d71bab81f0e87f4e"],["D:/hexo/public/archives/page/4/index.html","7be2e2549c5ef872759508f616bdab7e"],["D:/hexo/public/archives/page/5/index.html","3760d4c6aa52a2f89d12dbf6fff2a8e7"],["D:/hexo/public/categories/GoGoGo/index.html","fd59f824bd0d87465501659d8743d660"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","0daa2ac171744d920209bc8fabda8f26"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","4bebaaa043ce0deb2b1c7fca033e5f1c"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","f71a13a8cc236b0c3de518ff6eadb7e0"],["D:/hexo/public/categories/Kubernetes/index.html","02830773bb2169bd6d3f4b5b167ac70b"],["D:/hexo/public/categories/Linux/index.html","0a8e36b93ba48a25d410bfe5ea01d207"],["D:/hexo/public/categories/index.html","c2bd2579e79ea9618d3f50edfeaba905"],["D:/hexo/public/categories/python/index.html","fd1c524ef874a04551913480a1a0e3b9"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","687d1209ac3e4585b8502d8886d9ecdc"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","e2557a79db96a275095ea29172e29940"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","59347da23b1d692cd7da1e489fc359d6"],["D:/hexo/public/page/2/index.html","165de9e2fb5ffa8de1bf1088b7ff6074"],["D:/hexo/public/page/3/index.html","d6b922e7d57088c7235db5735fba8cb7"],["D:/hexo/public/page/4/index.html","89741b483a66cb1d8025ff14f654b085"],["D:/hexo/public/page/5/index.html","09f8e566571b6d250c552eb332e1a202"],["D:/hexo/public/tags/DarkDown基础语法/index.html","770bd08226ea66b463be4f2255c4a22c"],["D:/hexo/public/tags/Golang/index.html","fec3663198f3eb9896c153ca14eb210b"],["D:/hexo/public/tags/Golang/page/2/index.html","f2f24d9a89396b8860a305843af9e5d7"],["D:/hexo/public/tags/Golang/page/3/index.html","31f39a692ad32ebbd261ea1cf5ad9230"],["D:/hexo/public/tags/Golang/page/4/index.html","9e6b6732acda48268dec93dc26e6eda0"],["D:/hexo/public/tags/K8S/index.html","22547968333183603d118f340aef7346"],["D:/hexo/public/tags/Linux/index.html","d62b453e210d280a57501006bf27eea2"],["D:/hexo/public/tags/django-ORM/index.html","ab239a514bddb69c75e39f5880c556e8"],["D:/hexo/public/tags/django-redis-锁/index.html","8601c40b7c3c94c500d21ea262690128"],["D:/hexo/public/tags/index.html","8b30d9accd2e2d68dbeaab661cf1a2c9"]];
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








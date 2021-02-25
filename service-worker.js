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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","237c2ecaeffea626657aed8481f348e6"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","ae6e154362e84afc6562b9eaae8e22a7"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","0d32811835c4a9b02a9f26e15553f566"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","c007a670275bc635d854d4748517a1ea"],["D:/hexo/public/2019/09/15/13. Maps/index.html","f9dbe4ca7240cd6b1bdd836bed57d64e"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","ae50b367a1e52f9422b86f280924d3bd"],["D:/hexo/public/2019/09/15/15. 指针/index.html","def29d2f1cec5bcc0ce0f59bdf0ce064"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","1153e5bfbb0e0094b86d9cbdb89bf03c"],["D:/hexo/public/2019/09/15/17. 方法/index.html","40711eb7a7f1e39426b0e75dda83a7a2"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","88fecb3ad36d174301d8f0fa59cd8423"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","2ab8913c66f22c80a046c04907ff98a2"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","4e1d8b953532b397b6bdee7ae28a2786"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","2cc0fb7585604d64ecf9bc96be02fca9"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","98428dacf0d2d763e56f329d8fa2cea2"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","f2ee644b2bef62a39a056dc38172adff"],["D:/hexo/public/2019/09/15/24. Select/index.html","d250811a94f21931dac8fb216f7357dc"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","07e438cd333973b7e16f54ddadc15693"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","90afebfec7b7b4d74327e1f799d3abba"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","1b1223182ca7c3f7b9434638ebef3110"],["D:/hexo/public/2019/09/15/28. 多态/index.html","6fa6ab3a5e9a4f929abdb52671791075"],["D:/hexo/public/2019/09/15/29. Defer/index.html","a8cb6562c56ba423e3659e43359deedd"],["D:/hexo/public/2019/09/15/3. 变量/index.html","c0b20c6ab18e02990040a036354acb10"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","e89dcdbe8bbf13c2f95ad8c212daeab5"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","ea1c0478a19ec630687eabc32bd4894f"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","368a8908b724a9627c09b4cb7973b625"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","9d3770afc8f806d5487a4ca33d597f1a"],["D:/hexo/public/2019/09/15/34. 反射/index.html","c610c0822a930f8861b81c34fe944b0f"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","d69f0a200023597d06a3ec1b38dc587f"],["D:/hexo/public/2019/09/15/4. 类型/index.html","6221e63a8da875f1d6c49ec27585161b"],["D:/hexo/public/2019/09/15/5. 常量/index.html","0dcdf392cc2aaf28088df7d51d7a59de"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","5ec5449d713e4dea93784100bb6052f1"],["D:/hexo/public/2019/09/15/7. 包/index.html","f341bc933fc96229ae786da5a9b79f4d"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","f3ce618acbad8f9f2248c5bfc6201335"],["D:/hexo/public/2019/09/15/9. 循环/index.html","b6552ef90caced5a9ba0683a3adf2465"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","a84e8d31fa799e82d182fcf1ca2d7634"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","abc03818392e13928b87ca9ef1ebcf75"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","fe5ae9e7fad92d9e914a7bb5a9a5b980"],["D:/hexo/public/2020/03/21/1. k8s课程简介/index.html","3f189adea3d5e646451e2e0a9388fdd2"],["D:/hexo/public/2020/03/22/2. k8s知识图谱/index.html","93d9cb5aa6815013df5628567fc6abff"],["D:/hexo/public/2020/03/22/3. K8S 之组件说明/index.html","4bf5c4ade3e43df5fcddbdde9a115bdf"],["D:/hexo/public/2020/03/27/4. Pod(1)/index.html","2fa70cc820dd18a0ce885e7847f6bc9d"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","e56317f56a89d07f3a214983441da83b"],["D:/hexo/public/2020/10/12/django使用锁/index.html","58a13b553316bb0843664e57b59bbc63"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","54c897bffb2f4b57c9421b6308562c0f"],["D:/hexo/public/archives/2019/09/index.html","20488716e0b8cecb6ffa512ca611cde2"],["D:/hexo/public/archives/2019/09/page/2/index.html","8f5e8bd09d30fb4be3e0baf9afa5f524"],["D:/hexo/public/archives/2019/09/page/3/index.html","5a0b77b7417f94f2ddb751663d07afcc"],["D:/hexo/public/archives/2019/09/page/4/index.html","968b59852c9f913581cfb208bfa729d4"],["D:/hexo/public/archives/2019/10/index.html","2fa943584be707922fda733b5140c1ee"],["D:/hexo/public/archives/2019/index.html","b8131cb30de147d2bc2e17d2cfbf04ce"],["D:/hexo/public/archives/2019/page/2/index.html","d76d0087c3080bbe6b3433e89684a460"],["D:/hexo/public/archives/2019/page/3/index.html","2d5cb1b5706749831980666a29bd98f6"],["D:/hexo/public/archives/2019/page/4/index.html","36fb22e0f85be089f78ae6ef9224e072"],["D:/hexo/public/archives/2020/03/index.html","ab2a9ce968c65a7388f198c716954634"],["D:/hexo/public/archives/2020/10/index.html","3158cfe14c6e6c6d7e8d4716a245c3f7"],["D:/hexo/public/archives/2020/index.html","5e2bcaa2b1492696491fb3f05e8775ba"],["D:/hexo/public/archives/2021/02/index.html","e17e1ef6314dabab0e881e202ac7f88e"],["D:/hexo/public/archives/2021/index.html","79d9a22ecf87b4aee5684a3b95a49e58"],["D:/hexo/public/archives/index.html","72097f7ae1aba076070f52d92cbda68c"],["D:/hexo/public/archives/page/2/index.html","b11e8b2c846a74193fa540ed6141dce9"],["D:/hexo/public/archives/page/3/index.html","0b4181d6fec75187ef400155220b2f30"],["D:/hexo/public/archives/page/4/index.html","8f80c4a7f2709a9e65234c1fe734218a"],["D:/hexo/public/archives/page/5/index.html","e337ed5a7a1508b5298d7081bf0fc3e6"],["D:/hexo/public/categories/GoGoGo/index.html","377676d97c89b32f559463e325532856"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","83f4a1631ff1fd0ba3ff231a1fcdf8b3"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","800ffd18b372cd59c41f9b381eb4b0d5"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","9b857871c2b0dc2ca546dfb19e84cd73"],["D:/hexo/public/categories/Kubernetes/index.html","f8537c04f55ff60547b7e502a7a7c32c"],["D:/hexo/public/categories/Linux/index.html","b780bed2eb53bb16f882cee3809f2920"],["D:/hexo/public/categories/index.html","9136ee407e759580de100e5d94063768"],["D:/hexo/public/categories/python/index.html","e36d6457eddbe4049f9a710ea631a072"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","09eccbca128e873c33087b4b1cfa5092"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","94e5f15c426c77371835789d7871485e"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","3b476f49d0d610b6d735921ae10521b1"],["D:/hexo/public/page/2/index.html","0ca3b286db5e97d7199660f888e2b6cf"],["D:/hexo/public/page/3/index.html","358dac5bc9b4bb58ddd7f231cddab932"],["D:/hexo/public/page/4/index.html","36aa0993e379f7e79144cb98834d30b1"],["D:/hexo/public/page/5/index.html","f3244b91edc726537936dc9ac2443ed6"],["D:/hexo/public/tags/DarkDown基础语法/index.html","de339bca38b712383e6ec8bac4ee611d"],["D:/hexo/public/tags/Golang/index.html","b1abec1719bfc6707e620220c6759c33"],["D:/hexo/public/tags/Golang/page/2/index.html","cc6d7a6f979dfc7dcca1b0e53f883191"],["D:/hexo/public/tags/Golang/page/3/index.html","a4858a5860056f829d421f07de4547e8"],["D:/hexo/public/tags/Golang/page/4/index.html","bd8409584b0099c2964374b4eba6bb0e"],["D:/hexo/public/tags/K8S/index.html","1cd4d8718a0116e46116bf6f745c4f04"],["D:/hexo/public/tags/Linux/index.html","54bb504dfe8ed2828321dc1680d095e0"],["D:/hexo/public/tags/django-ORM/index.html","d7ea08bed48817f29ee3af660d011531"],["D:/hexo/public/tags/django-redis-锁/index.html","ee047a648fb29ea1dcb26727203b9253"],["D:/hexo/public/tags/index.html","043006e1ea9b5730f5927e4431790d92"]];
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








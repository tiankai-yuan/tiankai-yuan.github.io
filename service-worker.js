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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","41e1e97caa70006e0c9f4c049ad40cb0"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","49b2da8355cae07b36903672d677a784"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","ac05d8b386915b5f10f492e14f072c54"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","b15225a95ffeed43ab422dd1dce6aed1"],["D:/hexo/public/2019/09/15/13. Maps/index.html","7542ecb0325e2af78bed2cb19c924a0e"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","4c26e6e5cb9e1dd83ece53ebe9169795"],["D:/hexo/public/2019/09/15/15. 指针/index.html","6e4ef476c627c697136dbec8e8c7f6a7"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","c864ef2c03f1347fc5c415647bec062f"],["D:/hexo/public/2019/09/15/17. 方法/index.html","23e9792ddfa655157a8717c36d946bd4"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","cdb10dd31fc8357dee4351b01a3347a0"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","f5ad103fbc2aa330b0de65c938d8d911"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","ee899b5d04f289cf5484228b22d12b8b"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","52adcde4c5cce27f3d764eb866176dec"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","d2d8909d8da6988f20e8f49ca456e0b2"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","e08ff02253dc2ce20b6efa50d9fbfee6"],["D:/hexo/public/2019/09/15/24. Select/index.html","18323de5beba734a3be7d5fc4549b6c0"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","34f15e497d16e6ecb1950e3c6bb9d292"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","2841890c8702b0a7d598d7eabe9cab08"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","748cb6891682ee1ef6f6b536323aeb12"],["D:/hexo/public/2019/09/15/28. 多态/index.html","268234e563fb0f44d66a656c965e3406"],["D:/hexo/public/2019/09/15/29. Defer/index.html","b8cb0add5d4c023824cfa1060f8e82f5"],["D:/hexo/public/2019/09/15/3. 变量/index.html","442ebd7cf1935678e2e4fdd82ba5370d"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","3c5a0ecdc245b0ad735295d95a368039"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","5e89d9a91a1b3423a43c0c24c3d2f774"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","6539c092265ea5ba5ff59b125586cd8d"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","28ee25e357eb892225478e638eaa5d59"],["D:/hexo/public/2019/09/15/34. 反射/index.html","d3650f4c3991c324148ec70fb244bd57"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","430888952a6d5d2b873d393b34554cbd"],["D:/hexo/public/2019/09/15/4. 类型/index.html","f5f575d686cbb9c0f94bacd5d2dff5b6"],["D:/hexo/public/2019/09/15/5. 常量/index.html","399c4063292a8ca3a8ef914ff1dcafd6"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","d1361613ed862ef8aa9dfdd2d05ee5cb"],["D:/hexo/public/2019/09/15/7. 包/index.html","1f17cbb0c414316bbe89014e8d5bd501"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","f119c2c9bccd5def7dfa1dc6a50e0116"],["D:/hexo/public/2019/09/15/9. 循环/index.html","1b87776187de5fabd4e8e8e26559a424"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","66a1241eeec907d711d7002d4d5001f1"],["D:/hexo/public/2019/09/17/关于celery的一些操作/index.html","d523111b8b590c578b79c502425ab127"],["D:/hexo/public/2019/09/23/MarkDown语法/index.html","af413a42e296edc86cbea65486d183f2"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","e45612863a973826a2945785783b2ddf"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","18e882f01a04f9ec8a8012c4793e0df7"],["D:/hexo/public/about/index.html","f4e95dea187f472ba1d8991bf191588d"],["D:/hexo/public/archives/2019/09/index.html","c1dfb30b1aac86bf1e39018253dfc97c"],["D:/hexo/public/archives/2019/09/page/2/index.html","b9f689744e264366bcbcdbf6447c8e8c"],["D:/hexo/public/archives/2019/09/page/3/index.html","e865cc7ad7275e25f6665a9658206647"],["D:/hexo/public/archives/2019/09/page/4/index.html","257c310e8fac6b172e6bc23ab0d0ee3f"],["D:/hexo/public/archives/2019/10/index.html","4dc9064745214033dc2663bdb2fdd8df"],["D:/hexo/public/archives/2019/index.html","0b49e302950029b6b9835a33cb0c5f0d"],["D:/hexo/public/archives/2019/page/2/index.html","bc4b16fd08c9e96105a1fd6c50d1daae"],["D:/hexo/public/archives/2019/page/3/index.html","9f997c6db6d3f3ddcacb3918a4a11373"],["D:/hexo/public/archives/2019/page/4/index.html","d1f2b65a2c75cc935ee998b940f4eeaf"],["D:/hexo/public/archives/index.html","e9c3ef55575b5c8dcae1bd3fb63816a9"],["D:/hexo/public/archives/page/2/index.html","73dc56c19f753b8d30a194fd7a9c9115"],["D:/hexo/public/archives/page/3/index.html","3ce24ad61d64be67ba5a39bd93ecb3d2"],["D:/hexo/public/archives/page/4/index.html","835169954394bed0c66506efe0bf57c6"],["D:/hexo/public/categories/GoGoGo/index.html","f1aad7d6978a242a2fa466c54a22d8f0"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","7666e16828ef88ecffe05cee331c8606"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","1e2bd25718fa80c86870c80bb0677d5f"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","60d0dd4fb3f1e09134384977122877ef"],["D:/hexo/public/categories/Linux/index.html","1bd097f5351daf9d44a5e4e1a8667589"],["D:/hexo/public/categories/index.html","354f4afc43d7de825158383f2bc46869"],["D:/hexo/public/categories/python/index.html","b8dfe846832266dcacdfa37e2a739dca"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","af2102848ef1a697b941128f53717411"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/celery.jpg","03f0af7b8ee68d10f81fcfdadd42c41f"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","85be70a11b39e49d19bc761d0e8a3097"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","e12c8b51e8da7ee7c3186e075fa84032"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","bce641b378d9eece21fa546585285300"],["D:/hexo/public/page/2/index.html","76690151e5f5c8f74423891c5698085f"],["D:/hexo/public/page/3/index.html","69f7fb34ef395736d8e27071b4e2e800"],["D:/hexo/public/page/4/index.html","2a1ab15ed1c28e7dbb5277b80bfd0c36"],["D:/hexo/public/tags/DarkDown基础语法/index.html","74d53a7987693a971950fc377f44b5a4"],["D:/hexo/public/tags/Golang/index.html","bd3abe0cd7606588ea6ceff4737bc729"],["D:/hexo/public/tags/Golang/page/2/index.html","27bc3153ee77aef26fb125e3e77a92d2"],["D:/hexo/public/tags/Golang/page/3/index.html","20b6f80a3af08add29d0c8aa706c443a"],["D:/hexo/public/tags/Golang/page/4/index.html","4f425dc31b2d9f8eb355418d5b01683b"],["D:/hexo/public/tags/Linux/index.html","f637f4a7bfe0666f1aac103df71ed988"],["D:/hexo/public/tags/django-ORM/index.html","225488c7e565a3a25a8274259d42b3df"],["D:/hexo/public/tags/index.html","05e32fdc9e83e595f44fbcd910c256a0"]];
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








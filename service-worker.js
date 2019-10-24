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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","32c1f6c1a44ecbb066f361678975b935"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","981befebb81e90e1d3951a9af485c74f"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","d37fe7f2d3de17439032de97c1063a9f"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","df8d70373386f9b9d8f4bff922fa25db"],["D:/hexo/public/2019/09/15/13. Maps/index.html","a4262599a2dc42951dcf5d127ef0a86c"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","454deef51ce5ec90e0764bcf3010aa12"],["D:/hexo/public/2019/09/15/15. 指针/index.html","299f0407f2297178fd5c36aa0a0d1bfe"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","521fd168daab0a0df40ef238770b16fc"],["D:/hexo/public/2019/09/15/17. 方法/index.html","128dc2ad3eb778d0f386ddf7ed2ed551"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","d1f466d14fb3099746d65ed75db00448"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","b43dea500b03ec186d11b263df6a1e3c"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","3d748966f33456fd73192386d03be6cd"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","772489fd95d63b69505f6b297ab3c01b"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","63c311592ec38246fb6aa4fa53c98efc"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","7f9b8bdd018977b5717c712a71c56822"],["D:/hexo/public/2019/09/15/24. Select/index.html","af321b7aad39c1b98678812c5bdfafee"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","b836a84045152c4bac81e5146f014df7"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","27332e5b4a4b6eb7da6e160204020195"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","57515877d814a45defa91c2f3c78c7df"],["D:/hexo/public/2019/09/15/28. 多态/index.html","e57e92d7270e78a23c8027554eedf910"],["D:/hexo/public/2019/09/15/29. Defer/index.html","1117749efa38bb8a2664b9ff07c66fe4"],["D:/hexo/public/2019/09/15/3. 变量/index.html","cde4f77f6329d7f110a4ae6e449e5808"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","d7bfdbad9b64145ea69010e90642bc1d"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","cb495e4eed059c079eb02fd72adb842b"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","c861e7a604f1623ad890d39fe6f8fbc8"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","d697905888a2bbeb2b7594aee0ecfc2b"],["D:/hexo/public/2019/09/15/34. 反射/index.html","fc6475f821701947f698469aef0bf639"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","406878620808d9d541d4f7a9e9b4b7d7"],["D:/hexo/public/2019/09/15/4. 类型/index.html","0a65bd286d8805ecc8b46ae75961a680"],["D:/hexo/public/2019/09/15/5. 常量/index.html","82b35751f7ea023cee7fc0cc7c5d1d69"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","4cbf1faa91b76bcf94ab8ac5bab9b03e"],["D:/hexo/public/2019/09/15/7. 包/index.html","00665c7f8726759a9654f6cc0e1943a9"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","cc5f6890bf2b692312a6173a025fb3a1"],["D:/hexo/public/2019/09/15/9. 循环/index.html","c1ea9a227c697da052aa8388be5051b9"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","341d7335f9d7721ad2666923950b9f46"],["D:/hexo/public/2019/09/23/MarkDown语法/index.html","1fc5d803c6b948dac7f218bf7e9d5723"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","e0ccf80227117fc62854c3883feceaec"],["D:/hexo/public/about/index.html","7381412aa0edfe20226b5a9883976161"],["D:/hexo/public/archives/2019/09/index.html","a8b6b307af85a56efda881a54955e474"],["D:/hexo/public/archives/2019/09/page/2/index.html","7fea3c25e9f9000178acf142a579ef35"],["D:/hexo/public/archives/2019/09/page/3/index.html","aca12d64a896b2fe7c80f6e265871a7b"],["D:/hexo/public/archives/2019/09/page/4/index.html","8685ae660112522e72ff589723aadd21"],["D:/hexo/public/archives/2019/10/index.html","d5a67020e4654ca773c9c285f0c3b587"],["D:/hexo/public/archives/2019/index.html","2ce62b49d7b334b1d99d8e7d83371e53"],["D:/hexo/public/archives/2019/page/2/index.html","7b7a18ad4216738919cd21379b397fee"],["D:/hexo/public/archives/2019/page/3/index.html","e81fe308f6a1b4cf4ae27677036c9442"],["D:/hexo/public/archives/2019/page/4/index.html","eb883388ce43eb121f85bee6e80bdae5"],["D:/hexo/public/archives/index.html","efbfdbd300e3bc87149b73429127ca57"],["D:/hexo/public/archives/page/2/index.html","51bd2787bfbab34d8fa8b00142f0623f"],["D:/hexo/public/archives/page/3/index.html","50b06de63d3559919eccf6b9e66e692b"],["D:/hexo/public/archives/page/4/index.html","2840b4189c5a0597c4c04dac6e0826dc"],["D:/hexo/public/categories/GoGoGo/index.html","34f031d98a67ac9ee9f36051e456f5e5"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","399afe92e6b77312ed9771a59b3902df"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","721a809f9ce7eb5932e5761cf6077f5f"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","f6144c6718b835073fae0721671d2e36"],["D:/hexo/public/categories/Linux/index.html","7627aa61868251c2301b25c2695282b8"],["D:/hexo/public/categories/index.html","136473676579e0f77fd07fff2366ced3"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","341dac821ae113e9b9aa5d6af7dce442"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","f9c2919e520e65afd6fd38756efebc9d"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","f82ac5293e51d869bf26d8eca293dc27"],["D:/hexo/public/page/2/index.html","e6c722da127163d1936094bc782be34d"],["D:/hexo/public/page/3/index.html","12f243f75340ed0dc65c68822a89cad8"],["D:/hexo/public/page/4/index.html","525bb267c6e353abb89fb82c04a54d49"],["D:/hexo/public/tags/DarkDown基础语法/index.html","1216c30342700ce689c74f2ba389e117"],["D:/hexo/public/tags/Golang/index.html","947caec0881ffbdfd9d067946ece9895"],["D:/hexo/public/tags/Golang/page/2/index.html","a9a41152b2ea57d2a66dcd127669ac97"],["D:/hexo/public/tags/Golang/page/3/index.html","08373a4f3cb0049345c77dbdac674b4c"],["D:/hexo/public/tags/Golang/page/4/index.html","6953d442da27f4959e25a370ca5dc644"],["D:/hexo/public/tags/Linux/index.html","81c88ac2725beab3532fbfb8f66faaa9"],["D:/hexo/public/tags/index.html","e5781b35327c1ad1d055c34e10f405b1"]];
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








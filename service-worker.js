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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","fda4506123547c423106c413bb9099ef"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","94198450664b3d189480bc16a6f0d0cf"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","68f8727549bf9263ed39116dda021d27"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","b820d411aec6cdd73f961f3892eb0731"],["D:/hexo/public/2019/09/15/13. Maps/index.html","66af656377499358948dec11aa83615b"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","1d582575ec2651c286e4f66b5956d158"],["D:/hexo/public/2019/09/15/15. 指针/index.html","119d3c5dc39490eb8480abaf5c556dbc"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","31e1b150c1793244b9c147063e313a18"],["D:/hexo/public/2019/09/15/17. 方法/index.html","cd3915c0a972ba62c6a4131b6ae8a49a"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","251e23a936a9b0957572667fed4936e9"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","4e1055153695527d85184a92ad8210e5"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","d1e02345f559be729279baa8b75c1dea"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","3257936ce4e2741f4db0fafbbc574570"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","6a841c51be173ad6d5cb84327d47e76b"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","71119b277e100003788b721d08a4672a"],["D:/hexo/public/2019/09/15/24. Select/index.html","2c4f6bb7ffde7b666f89014cab82c1cf"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","ba288ec26d01e8fe6afef1942b81d8cc"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","6019247ea27356278088a7925460fc60"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","3d2d7cea9a69a5109c2b59dd2a79061b"],["D:/hexo/public/2019/09/15/28. 多态/index.html","0f570972afeac2493ac24acd5737d837"],["D:/hexo/public/2019/09/15/29. Defer/index.html","4ab1e78989ab1bccc244677d86335fac"],["D:/hexo/public/2019/09/15/3. 变量/index.html","35a623b6ad0cf34beeb531c17dd9498b"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","aafc6352cce2e961b6e9f849947746c9"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","6c65d84bf0e279bfbb9934df56b72b78"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","e2c7122e0ee0fa2843e95ed61ed2a5d7"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","8ebe1d506ee84374a3d9982b208c5ddf"],["D:/hexo/public/2019/09/15/34. 反射/index.html","bb912b57fcfed63fc61d635ba765c694"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","baa450dc47d084d5ecba13e4184e69a8"],["D:/hexo/public/2019/09/15/4. 类型/index.html","24d53b6a69cd9e1c5a715654a640301e"],["D:/hexo/public/2019/09/15/5. 常量/index.html","bb7919718453fd706b21d7713e39c9fe"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","ffb8de2682b8b2961d01022c22f0b286"],["D:/hexo/public/2019/09/15/7. 包/index.html","5d2b65bf0c82772b08e262c858e0d9bb"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","da13c0998135b83d56bcc93db25d319e"],["D:/hexo/public/2019/09/15/9. 循环/index.html","da567363d113acd55287542c7d05f592"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","6e43eaddf543ba422d6d645de1c903a4"],["D:/hexo/public/about/index.html","c13fd9f5fa6612214e0dcc28cf2e96c9"],["D:/hexo/public/archives/2019/09/index.html","5b93dba9c2bdef070df5a55733683707"],["D:/hexo/public/archives/2019/09/page/2/index.html","7d117fa2f260a6aee0b60a1d3d09ca95"],["D:/hexo/public/archives/2019/09/page/3/index.html","3e380abb13e1c90a75ac0e56c398df5e"],["D:/hexo/public/archives/2019/09/page/4/index.html","1890c49aac3a724fafab2cc569292759"],["D:/hexo/public/archives/2019/index.html","3a00a8326c811160f92aa674aaafa52f"],["D:/hexo/public/archives/2019/page/2/index.html","74408b4a2a6d47c343ce3793ddbb0e9c"],["D:/hexo/public/archives/2019/page/3/index.html","bb1c2e1287f7a43bf415a7a1bd3389da"],["D:/hexo/public/archives/2019/page/4/index.html","f29bd66501450ae90e354cb1eeea19eb"],["D:/hexo/public/archives/index.html","010c64e4baa94fbd417c24ec21805bd2"],["D:/hexo/public/archives/page/2/index.html","49971471b7005dba997efa8d95ebc4e7"],["D:/hexo/public/archives/page/3/index.html","fd6d3753614d20fbd56663f28a1cfb83"],["D:/hexo/public/archives/page/4/index.html","376d6713a4787106365c6d9e2f9b81f2"],["D:/hexo/public/categories/GoGoGo/index.html","ee6ee9a3c4e43a840cdd8218ed7e9e9c"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","8f7d03ddad4e4ecff3520078f267a610"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","51b22a9a9e098264893443cecaf0fa42"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","863d78c49bd78dd2da26115022f87863"],["D:/hexo/public/categories/Linux/index.html","ba98f9089be7cab205d85d369f2bb561"],["D:/hexo/public/categories/index.html","a2b5a49cb26948900f90a14cfcf906a7"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","1a2e68c62030b0c9c63edd66e3efeaac"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","764f481464ff1463a61a732a2d20313c"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","ed54775c4637e5d4c3e04a86ea1938e3"],["D:/hexo/public/page/2/index.html","df00b837527e0ec4199dd7df18aec2d6"],["D:/hexo/public/page/3/index.html","0180ce63bee1735e5019afa06d0a6160"],["D:/hexo/public/page/4/index.html","c8ba6356a5cc401f99a7a9bb3fac1337"],["D:/hexo/public/tags/Golang/index.html","60695c5be8392b88e4138c4c49a629bd"],["D:/hexo/public/tags/Golang/page/2/index.html","dd288c185325581d0589d6bcb4258ef4"],["D:/hexo/public/tags/Golang/page/3/index.html","d56d4eca43dcc4a30eb95a088fad0b56"],["D:/hexo/public/tags/Golang/page/4/index.html","26bae0760059c19a88f9b87caba57cde"],["D:/hexo/public/tags/Linux/index.html","7ad68cac1f733cca861cc416dc18eedb"],["D:/hexo/public/tags/index.html","26fdd0167b2800e20e303db5b2dcfd60"]];
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








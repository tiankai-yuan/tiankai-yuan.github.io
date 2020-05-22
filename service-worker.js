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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","711d2627fe243e7d0788982dfc0429f8"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","fe412f9f86023c735397816fc0bff791"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","f365fae20c3f3877becfacc49440b438"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","e9abbe6648c0acfcd0cfabb7966d12b0"],["D:/hexo/public/2019/09/15/13. Maps/index.html","12c8d5963f494f27aae079b894777143"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","39f5963a7dbbfd11ba77059ad3696235"],["D:/hexo/public/2019/09/15/15. 指针/index.html","84823380958756d35eea38e3dc3197e5"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","1bff0793dd5f1694f50f0e9de0378f96"],["D:/hexo/public/2019/09/15/17. 方法/index.html","1efc094ba828e285f14267ee57a546b3"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","a5abb4c7718c91ae2d0a4f4ee41ea19f"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","4517f1d1a18db990beaa857566a6fc0a"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","088d52d1b62fad5a218f7b355577dd03"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","7ca408da5e15d318cb620bec14ddc7f6"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","e514c676b523dc975fef601a90c8c36a"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","929b4c89800c7a325d18ef4ca8fea4da"],["D:/hexo/public/2019/09/15/24. Select/index.html","4d78ca36142e94a95e8e71b522335f71"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","f0b3b08ae14cac02e9e120253a78641b"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","e13d35f0f94e04849cbe292293d2f58a"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","7ff3656fe44f79f1221693f12a964bda"],["D:/hexo/public/2019/09/15/28. 多态/index.html","5d6ed1fe03cd5249c009e5bc65bde4dc"],["D:/hexo/public/2019/09/15/29. Defer/index.html","b94ccfc82f0a2ed84679fe025a65f9be"],["D:/hexo/public/2019/09/15/3. 变量/index.html","af385af261c589bff6d67fa557009455"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","e0dc01f0828ab7a1485957ac5a5163b2"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","b3702036f0c0a9293d4df74f0aac7424"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","23bb7410e4d4255ad88fdc09f2459238"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","7087e3f0cf96d0eaaaf2dabc5ecefb5f"],["D:/hexo/public/2019/09/15/34. 反射/index.html","6598f6f973a6dc4525d7600f70d21f22"],["D:/hexo/public/2019/09/15/4. 类型/index.html","c62349c03e2e21702ad720eb624a903d"],["D:/hexo/public/2019/09/15/5. 常量/index.html","b01c15e1bc95ad74e039bd5c5dbb5478"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","57253bf3a0d56b142f50d4fc8c2145a2"],["D:/hexo/public/2019/09/15/7. 包/index.html","1ea5e691740a2aeb0be18fb884d8fadb"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","dd94410f760478964271e569e9f05cd6"],["D:/hexo/public/2019/09/15/9. 循环/index.html","de74b0e2b355118e279f7d822e6d9a44"],["D:/hexo/public/2019/09/17/35. 读取文件/index.html","af268f9b976975ffb88eb6a5dfb22612"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","b0cac9ad63f06c329c6f732cf2b704ba"],["D:/hexo/public/2019/09/17/关于celery的一些操作/index.html","d523111b8b590c578b79c502425ab127"],["D:/hexo/public/2019/09/23/MarkDown语法/index.html","5fb805a181b796a01c1e265b34fb3a95"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","997c0e563899239ad8e8fdbebdfb755e"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","3e0f017c1784a84b266edcc96b73ea08"],["D:/hexo/public/2019/10/28/django使用锁/index.html","f3449fdb92c749ea4c57ec7016dd0e20"],["D:/hexo/public/2020/03/22/k8s知识图谱/index.html","91861670b0ff17d0c63c143b4b853199"],["D:/hexo/public/2020/03/22/k8s课程简介/index.html","60b539a38803cc4bf46b028365f7c55d"],["D:/hexo/public/2020/05/22/k8s知识图谱/index.html","52715b83303dc25e21c67e8f51d06280"],["D:/hexo/public/2020/05/22/k8s课程简介/index.html","aedf5c2e86cc8e7a24d80379bbcee238"],["D:/hexo/public/about/index.html","9ed7f1647c838f0c1a4c142aef419ee2"],["D:/hexo/public/archives/2019/09/index.html","807749f0341b650771358fd8fb3d3e5d"],["D:/hexo/public/archives/2019/09/page/2/index.html","1b4dc4b85e75568ce1f9975ed60c215f"],["D:/hexo/public/archives/2019/09/page/3/index.html","7cc98b500694f0eee3d900123e1decdf"],["D:/hexo/public/archives/2019/09/page/4/index.html","e87726a3fa6ede77dfa32d7def7fdda7"],["D:/hexo/public/archives/2019/10/index.html","7243673b5bb321046f1435734078a2ab"],["D:/hexo/public/archives/2019/index.html","5a091434cdbd36c7c3049b6fe5dbd7c5"],["D:/hexo/public/archives/2019/page/2/index.html","08ca1158baacb0a0fe3e6ad0f4cc3075"],["D:/hexo/public/archives/2019/page/3/index.html","744cf7698a935ea0b118db82284a5ecb"],["D:/hexo/public/archives/2019/page/4/index.html","4d14600bae64f5ed3592d39f1a2994d8"],["D:/hexo/public/archives/2020/03/index.html","c64b861195c6c2f893329e094819c645"],["D:/hexo/public/archives/2020/05/index.html","9ff9934bcd83953df5a376f9b1c0c53f"],["D:/hexo/public/archives/2020/index.html","84f5126acf1b4107ea5cb9e37acc82b9"],["D:/hexo/public/archives/index.html","d9925e5a8e5e38d0c1917dda2cda9abf"],["D:/hexo/public/archives/page/2/index.html","ea41ed54a977123494128d9a14ed3f8c"],["D:/hexo/public/archives/page/3/index.html","2ce52d99faf80b01281fa8bd074213b2"],["D:/hexo/public/archives/page/4/index.html","e4f79686fb142c42c6a81bf1331305b3"],["D:/hexo/public/archives/page/5/index.html","b67a744a40892968b99d1af27e321692"],["D:/hexo/public/categories/GoGoGo/index.html","b5562e675c1982cae920c565a0d9eed3"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","e4af2399ccc3321e88b23f8d9a74df88"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","30cfb1532172845692ae82cfd79aac6a"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","8921ba62fce04e877dfbd06602517810"],["D:/hexo/public/categories/Kubernetes/index.html","c51fcc9ddc5346e3851495d884af80ac"],["D:/hexo/public/categories/Linux/index.html","61b3b3ee3dbddcf580ffb106d62ad64f"],["D:/hexo/public/categories/index.html","d9030a69012cfd84c4721b58fc8e558a"],["D:/hexo/public/categories/python/index.html","bfdb46dbf45040a477f9e02fe2e19128"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","75f0fcdeb8a32475296a9fd3874a8de1"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/celery.jpg","03f0af7b8ee68d10f81fcfdadd42c41f"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","85be70a11b39e49d19bc761d0e8a3097"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","e43ba0582dd22cd055a6571f749cea2d"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","9a2a2822a0e12d6ef096e63ae0b65636"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","7b835d68a14d10a19ccfdda71b0f9614"],["D:/hexo/public/page/2/index.html","0dcf2944ac03f1e937bea354c4c3a67c"],["D:/hexo/public/page/3/index.html","a6f32f661e339f7e55b14308ccc43a55"],["D:/hexo/public/page/4/index.html","f9a25ee2501282200d7754dbe2b868a2"],["D:/hexo/public/page/5/index.html","eefbbe2a91258590f153dcdb0a0f17b7"],["D:/hexo/public/tags/DarkDown基础语法/index.html","7900d5dbd8534b795915d9ab120997a0"],["D:/hexo/public/tags/Golang/index.html","a6587835772c474f7538572d3b72082c"],["D:/hexo/public/tags/Golang/page/2/index.html","6730931bcbc06b7acba2e8dc7450c1ae"],["D:/hexo/public/tags/Golang/page/3/index.html","8766a47145f6440431dea49259723e05"],["D:/hexo/public/tags/Golang/page/4/index.html","a3d7c05372011c16ec34ae72cf7f65ff"],["D:/hexo/public/tags/K8S/index.html","e525ed0c04a6cdc8251dc7552ba48bfb"],["D:/hexo/public/tags/Linux/index.html","87c7427725e7b0832704b95b00d3ac24"],["D:/hexo/public/tags/django-ORM/index.html","c7386ec8bd8aad87e53aa76d9d39279c"],["D:/hexo/public/tags/django-redis-锁/index.html","1a4516a95453924d8fb658e3a5a4d6b6"],["D:/hexo/public/tags/index.html","9da04f26208c0b5bf007d5e285eb37ed"]];
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








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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","4b2c7af3e511a23f943863607a68ce43"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","f54781c2bf6d04385efd1e307783c25a"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","85c60e5e26b30bd3c440422e8dce38f7"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","7be3403e676da5a0712c6b561f7619b3"],["D:/hexo/public/2019/09/15/13. Maps/index.html","543b4438d87b57f5f9e5e9f232e695a6"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","7b608870c970c25e134ce01872e76db0"],["D:/hexo/public/2019/09/15/15. 指针/index.html","8676a7a17b8c746099c4f39c8e07e525"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","61b26b95f6508ad43f4cda35fc36366f"],["D:/hexo/public/2019/09/15/17. 方法/index.html","613e97b8bc99d34b19689c3dbfe0c0d4"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","48b0f0c6c04206afca1d50fde200818c"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","4932feb14d478ac58fba9c62aeb8a3bf"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","8e7ba188f5a5e21d40bccd1a10ac7cfb"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","13a57c1b34c1b6ddf5640e97c6588306"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","cdfcdad84226fed1bceefdd4cead87a6"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","9496f52ad20dcc21ca905e9925f4060f"],["D:/hexo/public/2019/09/15/24. Select/index.html","9f0d925aa1bcad86d6558ff1c59bc4a0"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","5260a96eb0963e4e7027991baa4ca1ca"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","c2623d54d8c47facc40927b0c8c96d3c"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","17c19ede792ecd7b719176ca9cf8b7c5"],["D:/hexo/public/2019/09/15/28. 多态/index.html","4c2351b018d11a73171eb56ef6f27212"],["D:/hexo/public/2019/09/15/29. Defer/index.html","087920b8513efbfb13e7a9b35c3f52d6"],["D:/hexo/public/2019/09/15/3. 变量/index.html","5e8def2866f6bf79dd7211685fc6d230"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","1b44af24aabc0b83fc69d0facf52b214"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","fe0ee7b38dc18636e8aa20c5d4049cfd"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","76c4b912626f382a95af9463a6ed3c9b"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","87cec64d638a0af3afd70d0817dabf86"],["D:/hexo/public/2019/09/15/34. 反射/index.html","b07060767adfe95d49f92ce9d34a2c61"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","32c248961adce07134f94868902b312f"],["D:/hexo/public/2019/09/15/4. 类型/index.html","b2db03a4b2c5ffa7a775c78bbb0c0b75"],["D:/hexo/public/2019/09/15/5. 常量/index.html","83f9a2794e4b9281344999f37b31c3ee"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","b019ba48b5a126da12ea5743230bd291"],["D:/hexo/public/2019/09/15/7. 包/index.html","04b7e0e918f8c5db85b6daa5aad40000"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","0a05e8c586c2aecbb82c18b8cf883e75"],["D:/hexo/public/2019/09/15/9. 循环/index.html","145a84cc6afe0d88e99f3393215442bf"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","708d2f334d78037254de0a4706adafd4"],["D:/hexo/public/2019/09/17/关于celery的一些操作/index.html","d523111b8b590c578b79c502425ab127"],["D:/hexo/public/2019/09/23/MarkDown语法/index.html","0eb707588c73fc39d40015e866bbb7c7"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","f3c330415159d27b82696d6e81163b75"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","71d8f5011ebe23241445456c91cc9721"],["D:/hexo/public/2019/10/28/django使用锁/index.html","06eb925d0f69adc27979f5a43f26cb8c"],["D:/hexo/public/2020/05/22/k8s知识图谱/index.html","52715b83303dc25e21c67e8f51d06280"],["D:/hexo/public/2020/05/22/k8s课程简介/index.html","aedf5c2e86cc8e7a24d80379bbcee238"],["D:/hexo/public/about/index.html","424ea2b68d197eccb49b1603b5815dfe"],["D:/hexo/public/archives/2019/09/index.html","1b4e8bd586bc200b97d3e43498b2ccf5"],["D:/hexo/public/archives/2019/09/page/2/index.html","c0555cff07e817e7ffe30201ab4b23e8"],["D:/hexo/public/archives/2019/09/page/3/index.html","17fb6f593e5cbd466bf0e44d477c6c01"],["D:/hexo/public/archives/2019/09/page/4/index.html","5d1017e6bec275154063d049cc87c9f9"],["D:/hexo/public/archives/2019/10/index.html","84169d55c785cf8975f1a13e18711ad2"],["D:/hexo/public/archives/2019/index.html","a16f4fcdb865369db51acc827f3ccfb7"],["D:/hexo/public/archives/2019/page/2/index.html","85d719b93cd306b395b1ee11ebae15c3"],["D:/hexo/public/archives/2019/page/3/index.html","d6fe277951061b7e29ff9f512dc1c651"],["D:/hexo/public/archives/2019/page/4/index.html","178d8eb086cf8b954d7eb309c8f6855f"],["D:/hexo/public/archives/2020/05/index.html","9ff9934bcd83953df5a376f9b1c0c53f"],["D:/hexo/public/archives/2020/index.html","75e08253f82ea76c360a8ec370cc727a"],["D:/hexo/public/archives/index.html","ced9c2f5c87e3dc1d94a5d0098ab2540"],["D:/hexo/public/archives/page/2/index.html","da0fe17d105729e1afc802e4b65758c3"],["D:/hexo/public/archives/page/3/index.html","9c14f62a7cb47dada1c3fd96a638169e"],["D:/hexo/public/archives/page/4/index.html","960394ddd153db077af44a715b1ddb1e"],["D:/hexo/public/archives/page/5/index.html","7baecc14f34f6773395e302441d1c5ca"],["D:/hexo/public/categories/GoGoGo/index.html","c994f6f938c817ea326188ddab6fae52"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","c6384512a8236e1ab2f3e4ea99ca76d6"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","5f91993f815b6bbfe6b4d5a3cf031171"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","48b5b354cc6fe659ce39d98094f4487b"],["D:/hexo/public/categories/Linux/index.html","d4e177ddc0b0200374b9419399b72623"],["D:/hexo/public/categories/index.html","af75e9344f4994f83a6799504d436d23"],["D:/hexo/public/categories/python/index.html","2954cf6f0fcd264232fbde15841692f7"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","a73312c54b9c0d9447ecffe19d0e734e"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/celery.jpg","03f0af7b8ee68d10f81fcfdadd42c41f"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","85be70a11b39e49d19bc761d0e8a3097"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","e43ba0582dd22cd055a6571f749cea2d"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","b1f710870ec48ccd6b82d7dbb64789d9"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","a703d23dc00f049f78618057e2def370"],["D:/hexo/public/page/2/index.html","5878a0427fcc503332e7817136ada280"],["D:/hexo/public/page/3/index.html","ab5f2d16597b9042e666f3014168feb6"],["D:/hexo/public/page/4/index.html","eb020c882c402c374f6b6a858d0e5378"],["D:/hexo/public/page/5/index.html","69667dfe69bd6893b8ea586d70ef6193"],["D:/hexo/public/tags/DarkDown基础语法/index.html","ffe36c014989e6535be4ea984e3cb7fd"],["D:/hexo/public/tags/Golang/index.html","a68d76497c82700cafcc71089c7a02ab"],["D:/hexo/public/tags/Golang/page/2/index.html","4603f30d8d352ce76d8868b08bad6c6e"],["D:/hexo/public/tags/Golang/page/3/index.html","dedee2e388cca9c9af4e56dc4378bb7f"],["D:/hexo/public/tags/Golang/page/4/index.html","4cb071f0f43fe21693efb36a9922fbc1"],["D:/hexo/public/tags/Linux/index.html","178bc0d78405dffd5719deec2eeae42d"],["D:/hexo/public/tags/django-ORM/index.html","09415828989d403a1643d49a71051c78"],["D:/hexo/public/tags/django-redis-锁/index.html","691af9e2f6a8a7969aef144d3c995b8b"],["D:/hexo/public/tags/index.html","36aa5f580ddeacf41bd119363bff343c"]];
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








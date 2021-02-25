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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","9b4b811ba372e607ce5915bc73f2b405"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","75509a1b025adea7352a1e4ccef60668"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","d418b1b8c5eba7059d774ac4a19f6d7a"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","cd59b7cc2844b614650068d20b2212ca"],["D:/hexo/public/2019/09/15/13. Maps/index.html","222878b4b40812978d4600d29107bd94"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","0682d7d6303b276e30a25fa89984812c"],["D:/hexo/public/2019/09/15/15. 指针/index.html","ad67fde51095a199939a4785afcb825a"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","7409301b6b9f8f7d6e82ea5d0165b853"],["D:/hexo/public/2019/09/15/17. 方法/index.html","729a01701ff87af091862e7e43c53cca"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","5e818deea9ef7318c62979f2bad2c46c"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","b65dba914f7c1cc82b3b347761a73b27"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","8df1a2ba392415d4eb1610002e97e4c4"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","a66a0f43749c7ccd1e35b84cb36a6652"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","41268023ed7c3402fefd4b6d2fce253e"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","d7c50de8c300dd40bd066debcb06c09d"],["D:/hexo/public/2019/09/15/24. Select/index.html","54519fd6a8eef1b0c1da1c8b5332feb3"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","98b6e487f86d33275d698e3b114ce93c"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","7421e9d348b1f27b712067456eff08de"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","25bdebe5de0a263b90eddf7231c2df5f"],["D:/hexo/public/2019/09/15/28. 多态/index.html","3f36085e1cd49765855420911e5a0392"],["D:/hexo/public/2019/09/15/29. Defer/index.html","5913d40f019c68b4017f518dc4aa7c44"],["D:/hexo/public/2019/09/15/3. 变量/index.html","9ac5c2d9e45c9482edab162e70ddfc74"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","9725f77ba74a08a4655caaf92dcdedbb"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","2d65345e7146f551b36e9c8479a900f1"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","c1cae2027076882cdba0bc1ec106367f"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","cb94bd2ace7e26d14ee8d6fa74a317a5"],["D:/hexo/public/2019/09/15/34. 反射/index.html","657fded718644cc24d8f9de0416994ab"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","e5d15ad081a928925801ba6dc39b0c3c"],["D:/hexo/public/2019/09/15/4. 类型/index.html","460f2e66262a4fc416e759705824cda9"],["D:/hexo/public/2019/09/15/5. 常量/index.html","5c8aaddee5fa29387d8911153a78ab6f"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","8894d0dae572b41712f371bddf0f58d8"],["D:/hexo/public/2019/09/15/7. 包/index.html","d2b9a5cf3821e666879b47d8b53e2816"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","1d18fdc99abdb595c52690a4b4225aa1"],["D:/hexo/public/2019/09/15/9. 循环/index.html","3135d715f699799f3d66d6eaff6417ee"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","0707081d333ae0630700668b38e1b073"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","143ee14abc25c18e84259de0006e0705"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","db9995924812abc9d2a627ae2d5751ee"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","347f76c035129a3432c6e0704bd4d074"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","56b730bfce0ef66fef18aec874d0a10c"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","f371c72ef448cefe8ef1afd0ce5e1ed8"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)-基础概念/index.html","debacf7ab8720412e5d1a728b67fd32b"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/03/28/5. K8S之Pod(2)-生命周期/index.html","271ff268270e4bb5691c1a59f602f2a6"],["D:/hexo/public/2020/04/13/7. K8S之安装/index.html","08ba6d71a05ba1bf89f70d1b91220692"],["D:/hexo/public/2020/04/15/8. K8S之常用命令/index.html","61ae910ddab7838a125e9084f2c61cac"],["D:/hexo/public/2020/05/20/10. K8S之svc/index.html","2995094347851dd7f28c485489629ef3"],["D:/hexo/public/2020/05/20/9. K8S之deployment/index.html","94b2d2ade7ec56d0957e9f702da37055"],["D:/hexo/public/2020/05/22/11. K8S之Ingress/index.html","0c1baa9e22f0f55a2713b5027f972db7"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","3b355ed91a7a98d3f174b5c265b6f640"],["D:/hexo/public/2020/10/12/django使用锁/index.html","80217f26ac59caccc4fd38ce5e5d25df"],["D:/hexo/public/2021/02/25/6. K8S之资源对象/index.html","a0c8c60db77874d1cb52906a61bbe4f8"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","9130b4ca3334deebe740f70c991c6c41"],["D:/hexo/public/archives/2019/09/index.html","34fbaa637d82e20e50b5b2f40c824045"],["D:/hexo/public/archives/2019/09/page/2/index.html","26ad9cc229be555fc07941ff81ad7e50"],["D:/hexo/public/archives/2019/09/page/3/index.html","2aec9348e15277f60c8d0d75e7eeddfa"],["D:/hexo/public/archives/2019/09/page/4/index.html","44efd382f8cefed009cb13b5b5b5ea19"],["D:/hexo/public/archives/2019/10/index.html","f3a864f94ce5dfa2d6355cef62df1634"],["D:/hexo/public/archives/2019/index.html","06b0f16c18aae2b8f84f37a2872a0756"],["D:/hexo/public/archives/2019/page/2/index.html","b3adc8cb0a5bfba978def003e3cbfd44"],["D:/hexo/public/archives/2019/page/3/index.html","ea5cdcc45e4266b3455ce61c7422f362"],["D:/hexo/public/archives/2019/page/4/index.html","1a3113072000cf8f685ec5bcf7245773"],["D:/hexo/public/archives/2020/03/index.html","ca67cab59d823dd14de848c46bc50bd9"],["D:/hexo/public/archives/2020/04/index.html","97d4ea4616697f18da29c98331542e34"],["D:/hexo/public/archives/2020/05/index.html","cdcf743a83db1fe5c1f1e3bad25caf67"],["D:/hexo/public/archives/2020/10/index.html","d6e05e0a97c4409c117d6753d73ab974"],["D:/hexo/public/archives/2020/index.html","02202df69055c465747c2e3d0aa2a65c"],["D:/hexo/public/archives/2020/page/2/index.html","e60ef498fa9209219c454ca66660776d"],["D:/hexo/public/archives/2021/02/index.html","07d53f0524eee66a3c92acd0e5a2c2b3"],["D:/hexo/public/archives/2021/index.html","00a88057b4a1271f065325d7e91fcf28"],["D:/hexo/public/archives/index.html","9902c70c9bc139682c661274f10521e5"],["D:/hexo/public/archives/page/2/index.html","12e578ae30a839df2665a79b6b9c98a5"],["D:/hexo/public/archives/page/3/index.html","6a646c493079d30cfe9add3bbf3b4654"],["D:/hexo/public/archives/page/4/index.html","52d401bdbe1863dbf10962f216923ba5"],["D:/hexo/public/archives/page/5/index.html","7d5b4f9b01c5d7bbe5d4ba0f3abbbdf9"],["D:/hexo/public/categories/GoGoGo/index.html","0634cce1008744b7493c6a1cb820e205"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","5ef1f300c963c94c2f32073757a1ca88"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","e2b541e7ca9a401e9fb5712f9caab80e"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","e7827433d44a9facd3c4cd1b2746d04f"],["D:/hexo/public/categories/Kubernetes/index.html","53501c7b05aeea35e30f1454fcae4059"],["D:/hexo/public/categories/Linux/index.html","5f1c64ec5b0136ce40edc2e31c91cc1d"],["D:/hexo/public/categories/index.html","3ffa88312c9299c89b24e1ff1fc77163"],["D:/hexo/public/categories/python/index.html","f11914203387ec5b3eaff49ebd52218d"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","e8522191631e042f17bb7b91a73076a9"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","82fe5d79929a40e67be571b55cc09ff9"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","796f60ac50f39d54b0ba79e160e06951"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","57f689e6ccc90df86068264abc7b09ea"],["D:/hexo/public/page/2/index.html","b326e86777b7ca03844eb737e1ae9d3c"],["D:/hexo/public/page/3/index.html","ad1ee4bfa63b762818a6af40cacbc323"],["D:/hexo/public/page/4/index.html","cfc8023160598ef7842ca8698ee5f8ea"],["D:/hexo/public/page/5/index.html","11a3ad618aec386f481288e57c3c9bfa"],["D:/hexo/public/tags/DarkDown基础语法/index.html","b46fc8d495ba540729cc0470cbafe1f4"],["D:/hexo/public/tags/Golang/index.html","361de671183b12de2fe0a0561fedcd5d"],["D:/hexo/public/tags/Golang/page/2/index.html","9e99f9f92a8bbb1b2c768c7fcfa37136"],["D:/hexo/public/tags/Golang/page/3/index.html","173882a56cd92e52da8c2961184d82cf"],["D:/hexo/public/tags/Golang/page/4/index.html","a3bcb1a0963fd17774d461f6a375ebea"],["D:/hexo/public/tags/K8S/index.html","ac4506025833d859d2f39aa73c557247"],["D:/hexo/public/tags/Linux/index.html","12ae3ce800ac409bce8305304b6d86d5"],["D:/hexo/public/tags/django-ORM/index.html","34b9e37c7daa3c4657afb57e06b38425"],["D:/hexo/public/tags/django-redis-锁/index.html","2b2035a5776f99eab479e12d7c83c1ca"],["D:/hexo/public/tags/index.html","f5daa1df5487cc8d2da6aac5c2e17e6c"]];
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








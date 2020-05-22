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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","1a968bcbd6011d1148effa5ac4f6d71d"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","7ae80c367e457299f28d5184944fb30a"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","569e73132fb9d28789ffdcc73720457c"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","6693f37db4b889d59ee6bf0d1fe8ccfa"],["D:/hexo/public/2019/09/15/13. Maps/index.html","15f5fe37890faaebda3d0ea35fbc8138"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","ba467c10a7f68c8ecbc86b688719d284"],["D:/hexo/public/2019/09/15/15. 指针/index.html","edc0d8c5e50d05ad726cc11e3526a2bc"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","155424424377ca18590135e1de7b5d17"],["D:/hexo/public/2019/09/15/17. 方法/index.html","e105d90a57cf6e67c4c85dc381018ff8"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","97791e8e5ace149f0b44d897934123c9"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","3e07518c6231a77d058c532294e4ab1f"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","c4b3fc51a963f148527aac4147c836ec"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","ee69a00b845825363be0a694b90f8200"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","adc3f152b46a9dc992406ed30084033f"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","648c50411949bc9b1079d9bfd20fd02a"],["D:/hexo/public/2019/09/15/24. Select/index.html","232def66750c70581ce7a18dadf6ce9c"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","441fea41b4a15b6493167daa98692b8c"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","fa65120ce63b5179d68f8a22d75858e5"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","7c00a705dec678b82ad4bafcfbb512ae"],["D:/hexo/public/2019/09/15/28. 多态/index.html","afece1d51f7babf922ad56918cd095a6"],["D:/hexo/public/2019/09/15/29. Defer/index.html","dcfd73efdcffad443ad2194a4033edc0"],["D:/hexo/public/2019/09/15/3. 变量/index.html","b56f3811e78616059c533316e2e68d37"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","16d503c5824ecea82b13d4c9475de658"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","c5193569c65cb85995caceeb749c2113"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","a2a220a77b82d2aae662124899cb13b6"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","c58c60e355efe808a61aa8d5ea40eeb3"],["D:/hexo/public/2019/09/15/34. 反射/index.html","78617f23ec2894dd46d994f9385127aa"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","c0f02df0fdc48fdd56e48028edba77c7"],["D:/hexo/public/2019/09/15/4. 类型/index.html","259b1eed508093f7ec00fcbeacde44d9"],["D:/hexo/public/2019/09/15/5. 常量/index.html","21de390f2474a3e6a38f767a1b787f48"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","6c9c955d19c8fbe7695326d1a2110262"],["D:/hexo/public/2019/09/15/7. 包/index.html","1481e5ea5c8876bd84b07d7806998a87"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","fea2a7335da1def7078fa8cfadc8a78c"],["D:/hexo/public/2019/09/15/9. 循环/index.html","47f08ea29559318800cc540ad1613a4f"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","5147f77b4953cae757970d437b332e3e"],["D:/hexo/public/2019/09/17/关于celery的一些操作/index.html","d523111b8b590c578b79c502425ab127"],["D:/hexo/public/2019/09/23/MarkDown语法/index.html","5fb805a181b796a01c1e265b34fb3a95"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","997c0e563899239ad8e8fdbebdfb755e"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","3e0f017c1784a84b266edcc96b73ea08"],["D:/hexo/public/2019/10/28/django使用锁/index.html","f3449fdb92c749ea4c57ec7016dd0e20"],["D:/hexo/public/2020/03/22/k8s知识图谱/index.html","5948cd7da7ec291eb94e5ada2f8883b1"],["D:/hexo/public/2020/03/22/k8s课程简介/index.html","60b539a38803cc4bf46b028365f7c55d"],["D:/hexo/public/2020/05/22/k8s知识图谱/index.html","52715b83303dc25e21c67e8f51d06280"],["D:/hexo/public/2020/05/22/k8s课程简介/index.html","aedf5c2e86cc8e7a24d80379bbcee238"],["D:/hexo/public/about/index.html","4af64d6ac9a4bba03aef6ab9a37bbe02"],["D:/hexo/public/archives/2019/09/index.html","1c105eaa7ab3d9307cc28af21029fa5a"],["D:/hexo/public/archives/2019/09/page/2/index.html","2fe672158e34f476d21f2d0e8a266f6e"],["D:/hexo/public/archives/2019/09/page/3/index.html","be1670f22d77ba709b3e2ec67e0b9131"],["D:/hexo/public/archives/2019/09/page/4/index.html","5965445f33092ce943b9808b9ca0b2de"],["D:/hexo/public/archives/2019/10/index.html","a93b4df76ba427711ccb482745046dac"],["D:/hexo/public/archives/2019/index.html","0ffde34d1baf3d75fc67b40a477c8a0a"],["D:/hexo/public/archives/2019/page/2/index.html","1c332bb8ac48e926f84e8c4f0787c7d2"],["D:/hexo/public/archives/2019/page/3/index.html","1326d76d7cb709f8a92ccc48bf8ed6cd"],["D:/hexo/public/archives/2019/page/4/index.html","8b18ee2d1b9c36d1536ab0255a22c936"],["D:/hexo/public/archives/2020/03/index.html","22d25dfd38e64e0c98c15a4268d79f1f"],["D:/hexo/public/archives/2020/05/index.html","9ff9934bcd83953df5a376f9b1c0c53f"],["D:/hexo/public/archives/2020/index.html","9260129d4f28acb8f3908154775d334c"],["D:/hexo/public/archives/index.html","955f4bbddfe3b5fb5dceac996a83d5bb"],["D:/hexo/public/archives/page/2/index.html","25643dd2ca6639fb0b5f3abdef049790"],["D:/hexo/public/archives/page/3/index.html","422d5ca578c63506b24936e2f7567d8d"],["D:/hexo/public/archives/page/4/index.html","ef4e7df278cac0ae4f27825b34c878d5"],["D:/hexo/public/archives/page/5/index.html","250668ecfb7b03795e3b33e168a4a8d2"],["D:/hexo/public/categories/GoGoGo/index.html","35fda0f010fd61bdbb28e5df14603db9"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","b13c93b0e3fa718a9bece623d5d4beda"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","9c70d38bfbf89959d342a4f445700857"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","e754016b7786034202a2dba0a999e0ee"],["D:/hexo/public/categories/Kubernetes/index.html","0365f9eee8d0ae224fe8afd49479e3a8"],["D:/hexo/public/categories/Linux/index.html","7635af86664fb2df489b95b5ede6cd8f"],["D:/hexo/public/categories/index.html","bfcd459a50497bef4f911d15fbfd7470"],["D:/hexo/public/categories/python/index.html","304be671bd6af1d4d13c78b4aa6a2efe"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","c24b6874d12ecbb16c0de3210f3dfcb3"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/celery.jpg","03f0af7b8ee68d10f81fcfdadd42c41f"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","85be70a11b39e49d19bc761d0e8a3097"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","e43ba0582dd22cd055a6571f749cea2d"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","60c0d7dbe8aa2329e76d1711b660a09a"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","a046991a5476b8928c7c95e13e293986"],["D:/hexo/public/page/2/index.html","23d49ecea633812a434fb6e1bcf77c56"],["D:/hexo/public/page/3/index.html","8e4ccdb7653f9d3d325d00b690e464a9"],["D:/hexo/public/page/4/index.html","89f00e7dc9741e12dce6e30dd4d6d525"],["D:/hexo/public/page/5/index.html","dd5b601a502252fa93b382e0498c82aa"],["D:/hexo/public/tags/DarkDown基础语法/index.html","d67b4fbe2836fbd07c3aea2d0167bd87"],["D:/hexo/public/tags/Golang/index.html","b805f1e1f97268c9b11c7fcf8e084ba5"],["D:/hexo/public/tags/Golang/page/2/index.html","96fdba5bd487831c8d5324947eae94d5"],["D:/hexo/public/tags/Golang/page/3/index.html","d2b91387b9c38bf3b2fa79889cad4aee"],["D:/hexo/public/tags/Golang/page/4/index.html","f5c72d84da2f1c72be1fb74918f844d5"],["D:/hexo/public/tags/K8S/index.html","45ea1e48f07751189ac42236f0366d35"],["D:/hexo/public/tags/Linux/index.html","44de015fd59ca4432af445b8981d913b"],["D:/hexo/public/tags/django-ORM/index.html","3c1ad04467e5ce1699dd7fe7f9ff7620"],["D:/hexo/public/tags/django-redis-锁/index.html","bd7b81c67c4be8dba993cabd2a2416ae"],["D:/hexo/public/tags/index.html","143fae673e9344b4add1beaca9f252e0"]];
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








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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","aa4c701bc6158a33dc630bd6da08dc00"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","33f3b3316c539e7e1519cdd48741427f"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","eba05a5794a2c08db35395388152c64b"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","12ef1343e36dca7bb65ade7ba0f3e268"],["D:/hexo/public/2019/09/15/13. Maps/index.html","eac6c4d30f5939065f9d78da11c731c4"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","d48e743225de9b6bb54fb7ff694e59e1"],["D:/hexo/public/2019/09/15/15. 指针/index.html","b1fcf8675e7972b277d0c69803aadaea"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","dba2c05cf01b46ffa04d45aac4a45cc1"],["D:/hexo/public/2019/09/15/17. 方法/index.html","5c423774457100b7d0084c8ec8d5ef9f"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","bce7080271d6b23275f7b0958d8952a8"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","d19e92415b0158492ea676196c00517e"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","27ee1b2afcb6ebd8537701516c9870b1"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","97ef4b1563f6d00a1e83306cd0ffb443"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","7d23932912a47ad0fcc584bcd1d04fe7"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","886f8c23237608c1aee096bd8f0d640a"],["D:/hexo/public/2019/09/15/24. Select/index.html","38a70b2e353137b7861cb9c2303acf10"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","2e017bdef16954965068480e1f35464a"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","87015c39e6894f56a49830148a759fc1"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","84713162cd93fe69332f30f34ccab4c8"],["D:/hexo/public/2019/09/15/28. 多态/index.html","0422406f400a09ca8687119f516b930f"],["D:/hexo/public/2019/09/15/29. Defer/index.html","c6480a144c0e3e9d6dbb61f120d29a1b"],["D:/hexo/public/2019/09/15/3. 变量/index.html","6604dd8dc9e20b1d0f275dfce4fe2c6a"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","bfe608c4f1e3aa1e5cbe06d54cb67571"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","f4a5dc46820ee9645374aa21f4fc363f"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","b00653af16e350b1806b80391057ca86"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","7f447dfc3cea769440a885e5aea7017f"],["D:/hexo/public/2019/09/15/34. 反射/index.html","00d1254b75d9f38a8aba34fb05494cd1"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","3354aee944ae4aa216391cafddcc0f6c"],["D:/hexo/public/2019/09/15/4. 类型/index.html","aeaae4b2c71db110ffb384c36bfd604a"],["D:/hexo/public/2019/09/15/5. 常量/index.html","3c43b9e8e6e74fbaf541dca8085e55d3"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","18974afe293ccf8c061bc27da4205be3"],["D:/hexo/public/2019/09/15/7. 包/index.html","0b5e00dd2805fd68762efdf9a374cf37"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","c379c8b6f1bb14f34721785186144402"],["D:/hexo/public/2019/09/15/9. 循环/index.html","f9f5083e985ef6804c29adeb786bdf74"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","5a2aeea4a2a057224914423ab8119b06"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","5cd17ffd2f73cd7cfd1ee2233217ae1d"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","d6cd1e47e37392fac51812dfa9fadf58"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","f192190bb2c40ffb2242b40dd23966cd"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","a03857c5153c0449d14e61db975781db"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","ffc3676addb8578cb370348700ddbd34"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)-基础概念/index.html","cc027a775c040eae2d5ff7b8ca76d853"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/03/28/5. K8S之Pod(2)-生命周期/index.html","8ca4f999a2ca02e5b2ffeb977e1fc50b"],["D:/hexo/public/2020/04/11/6. K8S之资源对象/index.html","60e109417b0dd4d336fa1ec06483ca73"],["D:/hexo/public/2020/04/13/7. K8S之安装/index.html","9c5594eef29a2231d914da551b107885"],["D:/hexo/public/2020/04/15/8. K8S之常用命令/index.html","f3bb144ff4691045b216eddb3f35ee6f"],["D:/hexo/public/2020/05/20/10. K8S之svc/index.html","8abd4dab2fbb79cb90a7b24aafb86e64"],["D:/hexo/public/2020/05/20/9. K8S之deployment/index.html","edea0d1f6e27d6fba7fbd3360481b0b1"],["D:/hexo/public/2020/05/22/11. K8S之Ingress/index.html","5ec8f330be4a3225dc81f084e45b6f76"],["D:/hexo/public/2020/05/22/12. K8S之configMap/index.html","062a1f6fad3079ef3718c75a71d0ef75"],["D:/hexo/public/2020/05/23/12. K8S之configMap/index.html","a121899e9a43f9cf3d4d10359dd24142"],["D:/hexo/public/2020/06/03/源服务器搭建以及deb包制作文档/index.html","8200470e3bde574127e5e1e08629daf1"],["D:/hexo/public/2020/06/29/13. K8S之Secret/index.html","d06a903ad1180076b3359516ec774941"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","5e46c7cce1087d38fca5a764bbd92b5e"],["D:/hexo/public/2020/10/12/django使用锁/index.html","53593f1d1064e531303646b89653dd37"],["D:/hexo/public/2021/02/25/6. K8S之资源对象/index.html","a0c8c60db77874d1cb52906a61bbe4f8"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","0ae08c63f452f3565b0b7169a64567f8"],["D:/hexo/public/archives/2019/09/index.html","fb6bd6dd7193b91ad38b51ed0f3bab98"],["D:/hexo/public/archives/2019/09/page/2/index.html","11a48e12c30cbd2e844bd9dd7b89241d"],["D:/hexo/public/archives/2019/09/page/3/index.html","30bf5f7dee944935731251eefc48503c"],["D:/hexo/public/archives/2019/09/page/4/index.html","c4a20aa7beb3bf37cd4fad0fb347d149"],["D:/hexo/public/archives/2019/10/index.html","17d8ef9320d0381b39adfbc919876192"],["D:/hexo/public/archives/2019/index.html","63f4d8ae54fa55fd5f850433bbb6fb10"],["D:/hexo/public/archives/2019/page/2/index.html","a860e3824862536814632d8fc8c4bc21"],["D:/hexo/public/archives/2019/page/3/index.html","73c8dc6852e39cba5945c8f582d20c27"],["D:/hexo/public/archives/2019/page/4/index.html","6363eec054579efe9925902bf0334967"],["D:/hexo/public/archives/2020/03/index.html","e2a881a48056f52f007da978698878d5"],["D:/hexo/public/archives/2020/04/index.html","839a695346977d18552b8a0594cedd5b"],["D:/hexo/public/archives/2020/05/index.html","cc88d52a2a85471378cc8a1ca60a803f"],["D:/hexo/public/archives/2020/06/index.html","91e1c146e11e89c3ab58eea94a98b67e"],["D:/hexo/public/archives/2020/10/index.html","ca32e546a0f8bd2470f9f0244b1dc30a"],["D:/hexo/public/archives/2020/index.html","72a97fdd45ad8b60aab65cc0dbce9ffc"],["D:/hexo/public/archives/2020/page/2/index.html","169a1d88631046ff4c86205359c1bad9"],["D:/hexo/public/archives/2021/02/index.html","249f3b64798173efafe1467ecada1888"],["D:/hexo/public/archives/2021/index.html","6753faedfcce4c9e78ae0f4797de7061"],["D:/hexo/public/archives/index.html","92d07aefab798267e68eeb506810bef7"],["D:/hexo/public/archives/page/2/index.html","f0660109671540e5418bd1cecd9a29c9"],["D:/hexo/public/archives/page/3/index.html","98954623babd8e21b2dc525b183fb4d3"],["D:/hexo/public/archives/page/4/index.html","0966b4e2cbaa209e4c6cb0f7dd54b597"],["D:/hexo/public/archives/page/5/index.html","7da36046713c6aeede4baffa4a969721"],["D:/hexo/public/archives/page/6/index.html","4762e72c39e2ec9892eeca297f0483e3"],["D:/hexo/public/categories/GoGoGo/index.html","df61d62f17826ad0d49cc847980c7fb5"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","99548b06647118b087685c63b67182f4"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","ff356696d1357bc4762e3757c0efa4df"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","1ad5385a1431869e057f475b50249b53"],["D:/hexo/public/categories/Kubernetes/index.html","b8a26f6344a178ad434e7461cdb9a552"],["D:/hexo/public/categories/Kubernetes/page/2/index.html","5647190b7a5f3ecc2290fc7c91c4d03f"],["D:/hexo/public/categories/Linux/index.html","a58210ca3756d428da795d1a0100c0cb"],["D:/hexo/public/categories/index.html","493d7d2466c6a4481836f9bf8d4e595c"],["D:/hexo/public/categories/python/index.html","2fc7301d9f33034b9021f3da058cb020"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","eff75ec99d38f7b1ea8c8f1f7a2fde50"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","82fe5d79929a40e67be571b55cc09ff9"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","0ce988b819ca9692b90373ecb81c2329"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","0d7c13824bc9879ad977d36bfd6355f8"],["D:/hexo/public/page/2/index.html","b5b3064718ce5486829c44c3a0df233b"],["D:/hexo/public/page/3/index.html","639378e0cc5dc37747c6e0a67512c407"],["D:/hexo/public/page/4/index.html","aece33a3c15753189828e48451255f08"],["D:/hexo/public/page/5/index.html","d5f0aeba3d49992327ea0bc7f2558fc0"],["D:/hexo/public/page/6/index.html","178d8df85523c76a6f18ddc0a8ad6ef1"],["D:/hexo/public/tags/DarkDown基础语法/index.html","1fe793c9dc4a8c1553cd4def04977f6e"],["D:/hexo/public/tags/Golang/index.html","393d501d129f05dec2bec598937082c2"],["D:/hexo/public/tags/Golang/page/2/index.html","d14b8c2665d4cb0f3e061632c5fb4e6c"],["D:/hexo/public/tags/Golang/page/3/index.html","730cb659e79fe4e6798fd66797e192ee"],["D:/hexo/public/tags/Golang/page/4/index.html","f3cd38889b7b32e2ed734152a5392ab3"],["D:/hexo/public/tags/K8S/index.html","bc0858a412a136f00e81c712b6686d48"],["D:/hexo/public/tags/K8S/page/2/index.html","3a4eb64e21dc370b049e264f2fbb76d4"],["D:/hexo/public/tags/Linux/index.html","1a56f4d605ecbcabf8ef1ffa8e39a69f"],["D:/hexo/public/tags/django-ORM/index.html","d71ac168e265b835a69c04c08987438b"],["D:/hexo/public/tags/django-redis-锁/index.html","060b661c0f985a5f59a4c8e7d4e86a34"],["D:/hexo/public/tags/index.html","b6a2af6518dbe651c4396513c448e3e2"]];
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








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

var precacheConfig = [["D:/hexo/public/2019/09/15/1. 介绍与安装/index.html","8e496867b9c5da87c10f7de84c197614"],["D:/hexo/public/2019/09/15/10. switch 语句/index.html","d4a61a44bffdd8908e43dddf3da00783"],["D:/hexo/public/2019/09/15/11. 数组和切片/index.html","485a647235db96bbc7583999d60ce773"],["D:/hexo/public/2019/09/15/12. 可变参数函数/index.html","31e8a4613d6ef88bc5f4cddc6e4500f0"],["D:/hexo/public/2019/09/15/13. Maps/index.html","c5f47438566b3ade4fb0b04863c9bd41"],["D:/hexo/public/2019/09/15/14. 字符串/index.html","5f56d37d1e9dacbd871d1ee255f3ab94"],["D:/hexo/public/2019/09/15/15. 指针/index.html","a4b61af4856b7299bae85a96398fd6ae"],["D:/hexo/public/2019/09/15/16. 结构体/index.html","03bd5276c1fa103a0c1741c22a1d50df"],["D:/hexo/public/2019/09/15/17. 方法/index.html","4a20645a789c77785b99957c450396f9"],["D:/hexo/public/2019/09/15/18. 接口（一）/index.html","8b1bcc6963f710badf0866d5af681b6a"],["D:/hexo/public/2019/09/15/19. 接口（二）/index.html","446d2edf93fd4cfba0e07e316eff8696"],["D:/hexo/public/2019/09/15/2. Hello World/index.html","98ca4aab3903fdb278f8efbfd9a805f7"],["D:/hexo/public/2019/09/15/21. Go 协程/index.html","ed001d38270ca5ae19e71b8a38f33f87"],["D:/hexo/public/2019/09/15/22. 信道（channel）/index.html","1ed0dc45409ae3760f656d55f799f43b"],["D:/hexo/public/2019/09/15/23. 缓冲信道和工作池（Buffered Channels and Worker Pools）/index.html","8e62511f97ff7b4b03c88460d3defbea"],["D:/hexo/public/2019/09/15/24. Select/index.html","169be1a9f6f5624e137970576c2446eb"],["D:/hexo/public/2019/09/15/25. Mutex/index.html","38b83cec547fb76a00bd031a7d36dd8d"],["D:/hexo/public/2019/09/15/26. 结构体取代类/index.html","f9ab18fc4fa6c0cce7920b77b1202736"],["D:/hexo/public/2019/09/15/27. 组合取代继承/index.html","7f45e3d9c3f1af3918333e5e6430d6da"],["D:/hexo/public/2019/09/15/28. 多态/index.html","e446e3d3d2246b9b67bd0120e7cf2f02"],["D:/hexo/public/2019/09/15/29. Defer/index.html","01e157c653942717a1249c0a230b1d87"],["D:/hexo/public/2019/09/15/3. 变量/index.html","16294dfd12a79d7cd1e31dc452dacc87"],["D:/hexo/public/2019/09/15/30. 错误处理/index.html","d86c892a62cae8a826255e3c975bc919"],["D:/hexo/public/2019/09/15/31. 自定义错误/index.html","74538ad1c379f121ebcd1682ba61709e"],["D:/hexo/public/2019/09/15/32. panic 和 recover/index.html","62d96a01e79c978945ddf8961e72120a"],["D:/hexo/public/2019/09/15/33. 函数是一等公民（头等函数）/index.html","cbb55987999eac4e343e7ff307b1e1b8"],["D:/hexo/public/2019/09/15/34. 反射/index.html","789dc8a245ceacfbc7352845ca8bae45"],["D:/hexo/public/2019/09/15/35. 读取文件/index.html","4b20d94bbcd9f64ea95981c57cfb4310"],["D:/hexo/public/2019/09/15/4. 类型/index.html","a00df633188d72213f25e144fa0fb672"],["D:/hexo/public/2019/09/15/5. 常量/index.html","71f92614792182ae1ace13666f63d86f"],["D:/hexo/public/2019/09/15/6. 函数（Function）/index.html","e3332147b77a341c7b4fb62bf7c8c0bb"],["D:/hexo/public/2019/09/15/7. 包/index.html","f99ca5d4d9a8c29295651297958ef20b"],["D:/hexo/public/2019/09/15/8. if-else 语句/index.html","b042eac5242dd6b13b20f8bc4f8b7c41"],["D:/hexo/public/2019/09/15/9. 循环/index.html","d008ef552e2f3c238dbf372611b1e5b8"],["D:/hexo/public/2019/09/17/sed 正则截取字符串/index.html","c177ccdf0720d0bf244807b4dd5a0ba6"],["D:/hexo/public/2019/10/20/关于celery的一些操作/index.html","cf6f51e716a6f105f1dd5471a6658ac8"],["D:/hexo/public/2019/10/24/关于django操作orm的一些事/index.html","3b6b64ec8567644ad58102ccc5886d2c"],["D:/hexo/public/2020/03/21/1. K8S之课程简介/index.html","c8e2e3e4de5a78a2ba012dc040d9cada"],["D:/hexo/public/2020/03/22/2. K8S之知识图谱/index.html","6ee1f8edbecff4a7beda86a3dc898ae7"],["D:/hexo/public/2020/03/22/3. K8S之组件说明/index.html","dc276a43712b00aa1a65d002076fefdb"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)-基础概念/index.html","7a558c9a461b17c3d6225c5d1a92e536"],["D:/hexo/public/2020/03/27/4. K8S之Pod(1)/index.html","74d73b17484cec5a50e2fadf3ba0ea29"],["D:/hexo/public/2020/03/28/5. K8S之Pod(2)-生命周期/index.html","962f7783acef28b31b77186806ec1662"],["D:/hexo/public/2020/04/11/6. K8S之资源对象/index.html","63f390dc61236e9615b8ba69ddaf3d50"],["D:/hexo/public/2020/04/13/7. K8S之安装/index.html","b28577b714ea50b6595d6ded5eba138e"],["D:/hexo/public/2020/04/15/8. K8S之常用命令/index.html","5919c6826a9c40cdc2375b7a29a1893e"],["D:/hexo/public/2020/05/20/10. K8S之svc/index.html","4045c6b7fe23f4d6109e0e0031c02bbb"],["D:/hexo/public/2020/05/20/9. K8S之deployment/index.html","3b4a8fec9c5f05e5ebfe7d6f5fd98dff"],["D:/hexo/public/2020/05/22/11. K8S之Ingress/index.html","c31cfbe2103a34f76acff3991231445e"],["D:/hexo/public/2020/06/03/源服务器搭建以及deb包制作文档/index.html","509f783b127793e1aa771dd520d8fd44"],["D:/hexo/public/2020/10/12/MarkDown语法/index.html","2066965a79bffb9441ae8c312fc285d3"],["D:/hexo/public/2020/10/12/django使用锁/index.html","2dad3f3a07a58b9463d878f7e93bb1f8"],["D:/hexo/public/2021/02/25/6. K8S之资源对象/index.html","a0c8c60db77874d1cb52906a61bbe4f8"],["D:/hexo/public/2021/02/25/k8s/k8s/index.html","76d8d5a89157e13956a3221a3c916cf0"],["D:/hexo/public/about/index.html","6c56c4ef661042aa10a7fb9215be3bb4"],["D:/hexo/public/archives/2019/09/index.html","73962026ed7149e132a5d13952e759a6"],["D:/hexo/public/archives/2019/09/page/2/index.html","079362cc87eed56634308b12fcc6c228"],["D:/hexo/public/archives/2019/09/page/3/index.html","37af16f555a40b5869874ee22050bd40"],["D:/hexo/public/archives/2019/09/page/4/index.html","17da5d8bc9db57d741157893a08f9984"],["D:/hexo/public/archives/2019/10/index.html","e2150cc93f3bf2d67ccbd9c224bc1f12"],["D:/hexo/public/archives/2019/index.html","1ee0ed72ad0b33d29beae94f3c81d151"],["D:/hexo/public/archives/2019/page/2/index.html","1a1e4bdb15c8916aa83aef8c0230d1f4"],["D:/hexo/public/archives/2019/page/3/index.html","9543f6680a0e8c959063cab49904b6b3"],["D:/hexo/public/archives/2019/page/4/index.html","3e3a487fb07fc788d80356139d6366f1"],["D:/hexo/public/archives/2020/03/index.html","655da5c12c31ce4c424b54eb226fdd6a"],["D:/hexo/public/archives/2020/04/index.html","33ded249e306b2b22265c2b0092148ca"],["D:/hexo/public/archives/2020/05/index.html","34faae2f9f5ff8a87477a39991d73397"],["D:/hexo/public/archives/2020/06/index.html","c498f241da876c3b275d6bdf8c3946b9"],["D:/hexo/public/archives/2020/10/index.html","eacf2eddd1025adf500bf0c8b81a7da7"],["D:/hexo/public/archives/2020/index.html","73149f152d141f8e30224af3136fba4a"],["D:/hexo/public/archives/2020/page/2/index.html","1c433ce10412eec2edbb393ba533b90e"],["D:/hexo/public/archives/2021/02/index.html","249f3b64798173efafe1467ecada1888"],["D:/hexo/public/archives/2021/index.html","6753faedfcce4c9e78ae0f4797de7061"],["D:/hexo/public/archives/index.html","c77587c158a1445e0c57fd49b4e9089e"],["D:/hexo/public/archives/page/2/index.html","cda0a8e84c8de6c29530a5989548ef14"],["D:/hexo/public/archives/page/3/index.html","6d7453a0ddac408468d73f69fe04049d"],["D:/hexo/public/archives/page/4/index.html","cac62e3d67b9d50372ecc0406c1f32ba"],["D:/hexo/public/archives/page/5/index.html","16a74915d3d91818c0d465d66d52163c"],["D:/hexo/public/archives/page/6/index.html","a1598fb16a7f44934e5268e753bc2e47"],["D:/hexo/public/categories/GoGoGo/index.html","6680cbad1b2072a48678881d5f04df3a"],["D:/hexo/public/categories/GoGoGo/page/2/index.html","75d076b6f0825c1dd2943f378f994b5a"],["D:/hexo/public/categories/GoGoGo/page/3/index.html","c44ef0775950f9ff188f6aad5b4f3b1a"],["D:/hexo/public/categories/GoGoGo/page/4/index.html","6f744cc9555245485666c73e41df9fca"],["D:/hexo/public/categories/Kubernetes/index.html","d850e3d55298213219bc3aafbb5a2e7a"],["D:/hexo/public/categories/Kubernetes/page/2/index.html","f821d4c8d2a287e7578b8a13f5c7f439"],["D:/hexo/public/categories/Linux/index.html","623046ddf6d6db401c793714c1be4086"],["D:/hexo/public/categories/index.html","a9669b6e4a2119d5a9d00ec50507eb5d"],["D:/hexo/public/categories/python/index.html","8f012f953c50175a92091b83b2f85684"],["D:/hexo/public/css/index.css","9500d9af070c546c9385df3d9343f41d"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/gallery/index.html","78b04ad767eb361f7f654868806ec848"],["D:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/alipay.jpg","14e7f7cc8b587ae6765a6c7292a17fb9"],["D:/hexo/public/img/avatar.png","da41ae92e841699531e9cdb318be9024"],["D:/hexo/public/img/avatar1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/hexo/public/img/django.jpg","82fe5d79929a40e67be571b55cc09ff9"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/golang.png","78e3a80143c19a29ff7dd1abead348bc"],["D:/hexo/public/img/k8s.jpg","24124ada6f2b86937a5605df064096b7"],["D:/hexo/public/img/linux.png","0cc33a826e988d639e99fde31e09a1ec"],["D:/hexo/public/img/wechat.jpg","041a5dd39d0714fab57481470a2b6f02"],["D:/hexo/public/index.html","d1c32823e8da06437a59b59861f4bd3d"],["D:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/hexo/public/js/main.js","271a385637d800281b43cde7c1b34fbd"],["D:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/hexo/public/link/index.html","4c30eeb6a0a5ca427770f32c4b559190"],["D:/hexo/public/page/2/index.html","158a0075606414ef77f2bbbf7a023227"],["D:/hexo/public/page/3/index.html","fb71b571624aae269aa09ecb617b8da0"],["D:/hexo/public/page/4/index.html","d299c4286b20e20d95e9ae823f471acd"],["D:/hexo/public/page/5/index.html","5b347a1be6006658687ebc53071aa50f"],["D:/hexo/public/page/6/index.html","2c6326489ddc009d100e1b38cbe3e1a4"],["D:/hexo/public/tags/DarkDown基础语法/index.html","8a8a3a4347b68e52a6eb2eeff05fddb4"],["D:/hexo/public/tags/Golang/index.html","8b646a13f5d9d1726572f836efd8f3d7"],["D:/hexo/public/tags/Golang/page/2/index.html","67b4932d01a47d6541ed57ac39d47ad8"],["D:/hexo/public/tags/Golang/page/3/index.html","55f4a301fa71bd01ab3cfe9cd2879a16"],["D:/hexo/public/tags/Golang/page/4/index.html","15fb43436861a6c86074b91b338fc7cb"],["D:/hexo/public/tags/K8S/index.html","c94fdf8c255a19c051e2bb8d6dc8b720"],["D:/hexo/public/tags/K8S/page/2/index.html","e5e5953118c5e33964396587c56fcc17"],["D:/hexo/public/tags/Linux/index.html","514a5a43b4d98f6d31a1a161e177c762"],["D:/hexo/public/tags/django-ORM/index.html","1af1d82c860c6fadfce22c5a8e9b8713"],["D:/hexo/public/tags/django-redis-锁/index.html","a626122faeba044fac9052db71739c1f"],["D:/hexo/public/tags/index.html","f6f73e195215a80978737fa4effc4c5b"]];
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








/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7fb5d4231ef2d67ed85474652bb8c433"
  },
  {
    "url": "api/index.html",
    "revision": "aa0f9de43f499da87de52fbbaacf7bc0"
  },
  {
    "url": "api/rules.html",
    "revision": "84b8878ab05b2f38e5effe4bb134343a"
  },
  {
    "url": "assets/css/0.styles.28c99067.css",
    "revision": "b98c247351c6b4a72f3fa6620886265d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.941f629b.js",
    "revision": "36318cb6e1a62768c2f185d2c66dbc5c"
  },
  {
    "url": "assets/js/11.d5fbf0e7.js",
    "revision": "3fb4b6f1a41b5b31b326aeeae9465d31"
  },
  {
    "url": "assets/js/12.9f5c4dde.js",
    "revision": "3378ef7210b94dbc59ccbd643eadfbd6"
  },
  {
    "url": "assets/js/13.6803467e.js",
    "revision": "c0ef0fa0b4116798f5cf4770c8490626"
  },
  {
    "url": "assets/js/14.5934242b.js",
    "revision": "d00db3ce921447a564eb7556b358bd9a"
  },
  {
    "url": "assets/js/15.a529c37e.js",
    "revision": "d612923ceb2e77af3a474f5947e1b67f"
  },
  {
    "url": "assets/js/16.855b932e.js",
    "revision": "99cf64f6c074e1bd31d4b69ce482363e"
  },
  {
    "url": "assets/js/17.29783427.js",
    "revision": "ca2b453fac2694b4e80447253a59db6c"
  },
  {
    "url": "assets/js/18.572a1ca1.js",
    "revision": "511d83f2bec67fa504247e65c5a201f9"
  },
  {
    "url": "assets/js/19.d54668e9.js",
    "revision": "95caa4cf731f63b34339909e0d6a0a93"
  },
  {
    "url": "assets/js/2.07a0ce85.js",
    "revision": "a02bb14c20a046540bd5ffe3f16cf87f"
  },
  {
    "url": "assets/js/20.18ee426b.js",
    "revision": "04fd9214b9019963bb7609f8e958c2fd"
  },
  {
    "url": "assets/js/21.6c848a26.js",
    "revision": "f749b6b9484c7a0010c8575ab5000be8"
  },
  {
    "url": "assets/js/22.66c991e8.js",
    "revision": "fb0eb6e59d367a12a7e583ffbfbc4afe"
  },
  {
    "url": "assets/js/23.fdaef158.js",
    "revision": "5c7b4f42cf769b450e2849ebbe3c78a0"
  },
  {
    "url": "assets/js/24.2caae87a.js",
    "revision": "89b512dec85f956ad8bf0f7b861fecdb"
  },
  {
    "url": "assets/js/25.180bcc5a.js",
    "revision": "206c649405ccbf0f212926ab065e11e6"
  },
  {
    "url": "assets/js/26.3b945f55.js",
    "revision": "c670b82509276a4c060bf89478034e7c"
  },
  {
    "url": "assets/js/27.e39d0e95.js",
    "revision": "360d23f32d69eee5768a2eb39c34bf7b"
  },
  {
    "url": "assets/js/28.b616d0f6.js",
    "revision": "5a049cbfea10539b406c423c729c3721"
  },
  {
    "url": "assets/js/29.ecee2337.js",
    "revision": "b4ea43ebd2a4a08e6a3abd475f89da79"
  },
  {
    "url": "assets/js/3.18529841.js",
    "revision": "d7b64fd85d9059fb01bc32a750c04585"
  },
  {
    "url": "assets/js/30.04342fd2.js",
    "revision": "087635089f934919cf5008dd886b280e"
  },
  {
    "url": "assets/js/31.f7030153.js",
    "revision": "495699e493a96dc0ac5a285c2bbddb30"
  },
  {
    "url": "assets/js/4.aa0ea282.js",
    "revision": "8fbde51b13d7e0b8e49bb128be173584"
  },
  {
    "url": "assets/js/5.7d429106.js",
    "revision": "e10e7d73ae6881aca4c7af8bc6bbac77"
  },
  {
    "url": "assets/js/6.f7c23a81.js",
    "revision": "d0b50b5ae00f25d48cfaf9736617775f"
  },
  {
    "url": "assets/js/7.c538e43d.js",
    "revision": "c7144df6ada0dcd97bb546b4dce8c54a"
  },
  {
    "url": "assets/js/8.620b23da.js",
    "revision": "a3411b131cfbf22cd2f43445353057c4"
  },
  {
    "url": "assets/js/9.d3d066ca.js",
    "revision": "d2903de96341580c2e6273124e3cfb68"
  },
  {
    "url": "assets/js/app.1464bb40.js",
    "revision": "2935dc9a71ae4d12e12032a3c9a61543"
  },
  {
    "url": "configuration.html",
    "revision": "0c117b1b2ed5a540e0379abfdfa86887"
  },
  {
    "url": "examples/backend.html",
    "revision": "b41c1358ec237e64aeaab69e04710db8"
  },
  {
    "url": "examples/i18n.html",
    "revision": "98159abb73cfd5096328658ff82db6a9"
  },
  {
    "url": "examples/index.html",
    "revision": "b2179efb43cf2a89b461d976b2dcbac0"
  },
  {
    "url": "examples/multiple-forms.html",
    "revision": "7aa1acae9f8b999cc8f34dbf1707fbff"
  },
  {
    "url": "examples/nuxt.html",
    "revision": "b42cfb90a1a5075f3ec4312a8205a2d1"
  },
  {
    "url": "examples/ui-libraries.html",
    "revision": "968651d6b8c16216b7d5e5fb841c6b60"
  },
  {
    "url": "guide/a11y.html",
    "revision": "2cb742a6194ba55882b5527de0063261"
  },
  {
    "url": "guide/advanced-validation.html",
    "revision": "ae84cb7f0bdddfce8e050141cd1bd628"
  },
  {
    "url": "guide/applying-rules.html",
    "revision": "981e7c6d5a7d2b709d9930cca343f012"
  },
  {
    "url": "guide/basic-validation.html",
    "revision": "3e8a6bd0b6f52878ec8e7395382e0001"
  },
  {
    "url": "guide/displaying-errors.html",
    "revision": "e71d2232d55746c55386999bd56b8973"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "84c9ddd3af802085cdae9bb4c67cdea6"
  },
  {
    "url": "guide/html5-validation.html",
    "revision": "f12e44a12ffcf69a5d3463b5a3d82505"
  },
  {
    "url": "guide/index.html",
    "revision": "ee809296d084c0de2fc9cfc161f5ff71"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "af4f44ccf60312256fb6207106d58433"
  },
  {
    "url": "guide/localization.html",
    "revision": "30cf2fcb76c49d11f0ef0b866b766b41"
  },
  {
    "url": "guide/styling.html",
    "revision": "d083d8b636347ee1f748d13cfc2cf5c9"
  },
  {
    "url": "guide/testing.html",
    "revision": "6ab26c6df1fd89368cb894557368cf2e"
  },
  {
    "url": "guide/validation-observer.html",
    "revision": "3b58c9d262c864c769fcaea3ca3f394c"
  },
  {
    "url": "guide/validation-provider.html",
    "revision": "fab36ea4f613066eea98403db3920457"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "8e6354e03911d6e6fecc527524b3b5ff"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

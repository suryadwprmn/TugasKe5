import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0c270e7c = () => interopDefault(import('..\\pages\\app\\index.vue' /* webpackChunkName: "pages/app/index" */))
const _2c202f57 = () => interopDefault(import('..\\pages\\artikel\\index.vue' /* webpackChunkName: "pages/artikel/index" */))
const _49667e6c = () => interopDefault(import('..\\pages\\latihan.vue' /* webpackChunkName: "pages/latihan" */))
const _e339fc50 = () => interopDefault(import('..\\pages\\latihan2.vue' /* webpackChunkName: "pages/latihan2" */))
const _6ac5679e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ab5cba0e = () => interopDefault(import('..\\pages\\app\\detail\\_id.vue' /* webpackChunkName: "pages/app/detail/_id" */))
const _bb355464 = () => interopDefault(import('..\\pages\\artikel\\detail\\_id.vue' /* webpackChunkName: "pages/artikel/detail/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/app",
    component: _0c270e7c,
    name: "app"
  }, {
    path: "/artikel",
    component: _2c202f57,
    name: "artikel"
  }, {
    path: "/latihan",
    component: _49667e6c,
    name: "latihan"
  }, {
    path: "/latihan2",
    component: _e339fc50,
    name: "latihan2"
  }, {
    path: "/",
    component: _6ac5679e,
    name: "index"
  }, {
    path: "/app/detail/:id?",
    component: _ab5cba0e,
    name: "app-detail-id"
  }, {
    path: "/artikel/detail/:id?",
    component: _bb355464,
    name: "artikel-detail-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

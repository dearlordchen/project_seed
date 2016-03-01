import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'// 页面主模板

import IndexView from './pages/IndexView'// 首页

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: IndexView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')

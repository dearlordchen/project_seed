import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import '../directives/directives'

import HelloView from './pages/HelloView'
import ButtonView from './pages/ButtonView'
import CellView from './pages/CellView'
import ToastView from './pages/ToastView'
import DialogView from './pages/DialogView'
import FormView from './pages/FormView'
import ActionsheetView from './pages/ActionsheetView'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: HelloView
  },
  '/button': {
    component: ButtonView
  },
  '/cell': {
    component: CellView
  },
  '/toast': {
    component: ToastView
  },
  '/dialog': {
    component: DialogView
  },
  '/form': {
    component: FormView
  },
  '/actionsheet': {
    component: ActionsheetView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

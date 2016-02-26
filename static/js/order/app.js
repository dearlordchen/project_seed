import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import listComponent from './list.vue'

var App = Vue.extend({})

var router = new VueRouter({
    history: false
})

// 默认view
router.redirect({
    '/': '/list'
})

router.map({
    '/list': {
        component: listComponent
    }
})

router.start(App, '#app')

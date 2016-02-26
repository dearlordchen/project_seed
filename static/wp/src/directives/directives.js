import Vue from 'vue'
import _ from 'lodash'

// 自定义添加元素的 attributes
Vue.directive('attr', {
  update (value) {
    // TODO: 异常流和报错
    _.forEach(value, (attriValue, attrName) => {
      this.el.setAttribute(attrName, attriValue)
    })
  }
})

<template>
<div id="toast-view">
  <large-btn
    name="成功提示"
    :is-disabled="!isBuyable"
    v-on:click="successNotify">
  </large-btn>
  <large-btn
    name="加载中提示"
    :style="primaryBtnStyle"
    :is-disabled="!isBuyable"
    v-on:click="showLoading">
  </large-btn>
</div>
</template>

<script>
import LargeBtn from '../../components/weui/button/btn'
import PlainBtn from '../../components/weui/button/btn-plain'

export default {
  props: {
    toast: {
      type: Object
    },
    dialog: {
      type: Object
    },
    actionSheet: {
      type: Object
    }
  },
  data () {
    return {
      isBuyable: true,
      primaryBtnStyle: {
        type: 'primary',
        classes: ['can_add_ur_classes']
      },
      warnBtnStyle: {
        type: 'warn'
      }
    }
  },
  components: {
    'large-btn': LargeBtn,
    'plain-btn': PlainBtn
  },
  methods: {
    //
    // toast
    // ---------------------
    successNotify () {
      let _toast = this.toast
      if (!_toast.isShowed) {
        _toast.isShowed = true
        _toast.category = ''
        _toast.content = '操作成功'
        // 延迟3s后关闭
        setTimeout(()=>_toast.isShowed = false, 3000)
      }
    },
    showLoading () {
      let _toast = this.toast
      if (!_toast.isShowed) {
        _toast.isShowed = true
        _toast.category = 'loading'
        _toast.content = '数据加载中'
      }
    },
    hideLoading () {
      let _toast = this.toast
      if (_toast.isShowed) {
        _toast.isShowed = false
      }
    }
  }
}
</script>

<template>
<div id="button-view">
  <large-btn name="成功提示" :is-disabled="!isBuyable" v-on:click="successNotify"></large-btn>
  <large-btn name="按钮" :is-disabled="isBuyable"></large-btn>
  <large-btn name="加载中提示" :style="primaryBtnStyle" :is-disabled="!isBuyable" v-on:click="showLoading"></large-btn>
  <large-btn name="按钮" :style="primaryBtnStyle" :is-disabled="isBuyable"></large-btn>
  <large-btn name="关闭加载中提示" :style="warnBtnStyle" :is-disabled="!isBuyable" v-on:click="hideLoading"></large-btn>
  <large-btn name="按钮" :style="warnBtnStyle" :is-disabled="isBuyable"></large-btn>

  <plain-btn name="打开弹窗" v-on:click="openDialog"></plain-btn>
  <plain-btn name="打开Action Sheet" :style="primaryBtnStyle" v-on:click="openActionSheet"></plain-btn>
</div>
</template>

<script>
import LargeBtn from '../weui/button/btn'
import PlainBtn from '../weui/button/btn-plain'

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
    },
    //
    // 弹窗
    // ---------------------
    closeDialog () {
      let _dialog = this.dialog
      if (_dialog.isShowed) {
        _dialog.isShowed = false
      }
    },
    openDialog () {
      let that = this
      let _dialog = this.dialog
      if (!_dialog.isShowed) {
        _dialog.isShowed = true
        _dialog.head = '哇哈哈哈'
        _dialog.content = '成功了！恭喜发财'
        _dialog.buttonList = [{
          name: '取消',
          style: {
            type: 'default'
          },
          onClickCb () {
            that.closeDialog()
          }
        }]
      }
    },
    //
    // Action Sheet
    // ---------------------
    closeActionSheet () {
      let _actionSheet = this.actionSheet
      if (_actionSheet.isShowed) {
        _actionSheet.isShowed = false
      }
    },
    openActionSheet () {
      let that = this
      let _actionSheet = this.actionSheet
      if (!_actionSheet.isShowed) {
        _actionSheet.isShowed = true
        _actionSheet.buttonList = [{
          name: '自定义按钮1',
          onClickCb () {
            alert('你是不是点了自定义按钮1')
            that.closeActionSheet()
          }
        }, {
          name: '自定义按钮2',
          onClickCb () {
            alert('你是不是点了自定义按钮2')
            that.closeActionSheet()
          }
        }, {
          name: '自定义按钮3',
          onClickCb () {
            alert('你是不是点了自定义按钮3')
          }
        }]
      }
    }
  }
}
</script>

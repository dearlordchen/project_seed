<style>
html {
  height: 100%;
}
body {
  font-family: Helvetica, sans-serif;
  height: 100%;
}
#wrap {
  background-color: #fbf9fe;
  min-height: 100%;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>

<template>
<div id="wrap">
  <!-- header -->
  <div id="header" style="text-align:center;" v-if="header.isShowed">
    <a style="font-size:20px;" href="#/">公用头部咯，点我你懂得</a>
  </div>
  <!-- main view -->
  <div id="main-view">
    <router-view
      transition="fade"
      transition-mode="out-in"
      :header.sync="header"
      :toast="toast"
      :dialog="dialog"
      :action-sheet="actionSheet">
    </router-view>
  </div>

  <toast
    :is-showed="toast.isShowed"
    :content="toast.content"
    :category="toast.category">
  </toast>

  <dialog
    :is-showed="dialog.isShowed"
    :head="dialog.head"
    :content="dialog.content"
    :button-list="dialog.buttonList">
  </dialog>

  <action-sheet
    :is-showed.sync="actionSheet.isShowed"
    :button-list="actionSheet.buttonList">
  </action-sheet>
</div>

</template>

<script>
import Hello from '../components/Hello'
import Toast from '../components/weui/toast/toast'
import Dialog from '../components/weui/dialog/dialog'
import ActionSheet from '../components/weui/action_sheet/action-sheet'

export default {
  data () {
    return {
      header: {
        isShowed: true
      },
      toast: {
        isShowed: false,
        iconClass: 'weui_icon_toast',
        content: '成功了',
        category: ''
      },
      dialog: {
        isShowed: false,
        head: '弹窗标题',
        content: '自定义弹窗内容，居左对齐显示，告知需要确认的信息等',
        buttonList: [{
          name: '取消',
          style: {
            type: 'default'
          },
          onClickCb () {}
        }, {
          name: '确认',
          style: {
            type: 'primary'
          },
          onClickCb () {}
        }]
      },
      actionSheet: {
        isShowed: false,
        buttonList: [{
          name: '自定义按钮1',
          onClickCb () {}
        }]
      }
    }
  },
  components: {
    Hello,
    'toast': Toast,
    'dialog': Dialog,
    'action-sheet': ActionSheet
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
        }]
      }
    }
  }
}
</script>

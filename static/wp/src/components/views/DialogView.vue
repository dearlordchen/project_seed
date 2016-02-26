<template>
<div id="dialog-view">
  <plain-btn name="打开弹窗1" v-on:click="openDialog1"></plain-btn>
  <plain-btn name="打开弹窗2" :style="primaryBtnStyle" v-on:click="openDialog2"></plain-btn>
  <plain-btn name="打开弹窗3" v-on:click="openDialog3"></plain-btn>
</div>
</template>

<script>
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
    'plain-btn': PlainBtn
  },
  methods: {
    //
    // 弹窗
    // ---------------------
    closeDialog () {
      let _dialog = this.dialog
      if (_dialog.isShowed) {
        _dialog.isShowed = false
      }
    },
    openDialog1 () {
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
    openDialog2 () {
      let that = this
      let _dialog = this.dialog
      if (!_dialog.isShowed) {
        _dialog.isShowed = true
        _dialog.head = '头部'
        _dialog.content = '身体额(⊙o⊙)…'
        _dialog.buttonList = [{
          name: '取消',
          style: {
            type: 'default'
          },
          onClickCb () {
            that.closeDialog()
          }
        }, {
          name: '确认',
          style: {
            type: 'primary'
          },
          onClickCb () {
            alert('确认思密达！')
            that.closeDialog()
          }
        }]
      }
    },
    openDialog3 () {
      let that = this
      let _dialog = this.dialog
      if (!_dialog.isShowed) {
        _dialog.isShowed = true
        _dialog.head = '23333'
        _dialog.content = '成功了！这里其实是可以打很多很多字的，你想打多少都可以的说哦~主要是给你展示下三个以上按钮的样式'
        _dialog.buttonList = [{
          name: '取消',
          style: {
            type: 'default'
          },
          onClickCb () {
            that.closeDialog()
          }
        }, {
          name: '取消2',
          style: {
            type: 'default'
          },
          onClickCb () {
            alert('中间的这个')
            that.closeDialog()
          }
        }, {
          name: '取消3',
          style: {
            type: 'default'
          },
          onClickCb () {
            that.closeDialog()
          }
        }]
      }
    }
  }
}
</script>

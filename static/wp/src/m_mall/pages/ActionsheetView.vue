<template>
<div id="action-view">
  <plain-btn name="打开Action Sheet" :style="primaryBtnStyle" v-on:click="openActionSheet"></plain-btn>
</div>
</template>

<script>
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
    'plain-btn': PlainBtn
  },
  methods: {
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

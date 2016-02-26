<style lang="less">
@import "./weui_dialog_global";
</style>

<template>
<div :class="[buttonList.length < 3 ? 'weui_dialog_confirm' : 'weui_dialog_general']" v-show="isShowed">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
        <div class="weui_dialog_hd"><strong class="weui_dialog_title">{{ head }}</strong></div>
        <div class="weui_dialog_bd">{{ content }}</div>
        <div class="weui_dialog_ft">
            <a v-for="button in buttonList"
              :class="['weui_btn_dialog', button.style.type]"
              @click="button.onClickCb"
              >{{ button.name }}</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    isShowed: {
      type: Boolean,
      default: false
    },
    head: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    buttonList: {
      type: Array,
      default: []
    }
  },
  computed: {
    isLoading () {
      return this.category === 'loading'
    }
  }
}
</script>

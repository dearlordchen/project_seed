<style lang="less">
@import "./weui_toast_global";
</style>

<template>
<div v-show="isShowed" v-bind:class="isLoading ? 'weui_loading_toast' : ''">
    <div class="weui_mask_transparent"></div>
    <div class="weui_toast">
        <div class="weui_loading" v-if="isLoading">
            <div class="weui_loading_leaf weui_loading_leaf_0"></div>
            <div class="weui_loading_leaf weui_loading_leaf_1"></div>
            <div class="weui_loading_leaf weui_loading_leaf_2"></div>
            <div class="weui_loading_leaf weui_loading_leaf_3"></div>
            <div class="weui_loading_leaf weui_loading_leaf_4"></div>
            <div class="weui_loading_leaf weui_loading_leaf_5"></div>
            <div class="weui_loading_leaf weui_loading_leaf_6"></div>
            <div class="weui_loading_leaf weui_loading_leaf_7"></div>
            <div class="weui_loading_leaf weui_loading_leaf_8"></div>
            <div class="weui_loading_leaf weui_loading_leaf_9"></div>
            <div class="weui_loading_leaf weui_loading_leaf_10"></div>
            <div class="weui_loading_leaf weui_loading_leaf_11"></div>
        </div>
        <i v-bind:class="iconClass" v-else></i>
        <p class="weui_toast_content">{{ content }}</p>
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
    iconClass: {
      type: String,
      default: 'weui_icon_toast'
    },
    content: {
      type: String,
      default: '已完成'
    },
    category: {
      type: String,
      default: ''
    }
  },
  computed: {
    isLoading () {
      return this.category === 'loading'
    }
  }
}
</script>

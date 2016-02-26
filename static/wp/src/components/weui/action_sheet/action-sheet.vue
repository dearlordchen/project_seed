<style lang="less">
@import "./weui_actionsheet_global";
</style>

<template>
<div v-show="isShowed" transition="weui_actionsheet">
    <div class="weui_mask_transition" @click="closeActionSheet"></div>
    <div class="weui_actionsheet">
        <div class="weui_actionsheet_menu">
            <div v-for="button in buttonList"
              class="weui_actionsheet_cell"
              @click="button.onClickCb"
            >{{ button.name }}</div>
        </div>
        <div class="weui_actionsheet_action">
            <div class="weui_actionsheet_cell" @click="closeActionSheet">取消</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    isShowed: {
      type: Boolean,
      default: false,
      twoWay: true
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
  },
  methods: {
    closeActionSheet () {
      this.isShowed = false
    }
  }
}
</script>

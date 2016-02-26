<style lang="less">
@import "./weui_btn_global";

.weui_btn_plain_primary {
  .weui_btn();
  color: @weuiBtnPrimaryBg;
  border: 1px solid @weuiBtnPrimaryBg;
  button&, input& {
      border-width: 1px;
      background-color: transparent;
  }
  &:active {
      border-color: @weuiBtnPrimaryActiveBg;
  }
  &:after {
      border-width: 0;
  }
}

.weui_btn_plain_default {
  .weui_btn();
  color: #5A5A5A;
  border: 1px solid #5A5A5A;
  button&, input& {
      border-width: 1px;
      background-color: transparent;
  }
  &:after {
      border-width: 0;
  }
}

.weui_btn_disabled {
  color: @weuiBtnDisabledFontColor;
  &.weui_btn_default {
    color: @weuiBtnDefaultDisabledFontColor;
  }
}
</style>

<template>
<a href="javascript:;"
  v-bind:class="['weui_btn_plain_' + style.type,
  style.isMiniSize ? 'weui_btn_mini' : '',
  style.isInline ? 'weui_btn_inline' : '']">
  {{ name }}
</a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    style: {
      type: Object,
      default () {
        return {
          type: 'default',
          isMiniSize: false,
          isInline: false
        }
      }
    }
  }
}
</script>

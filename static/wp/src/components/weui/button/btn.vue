<style lang="less">
@import "./weui_btn_global";

.weui_btn_default {
  .weui_btn();
  background-color: @weuiBtnDefaultBg;
  color: @weuiBtnDefaultFontColor;
  &:not(.weui_btn_disabled):visited {
    color: @weuiBtnDefaultFontColor;
  }
  &:not(.weui_btn_disabled):active {
    color: @weuiBtnDefaultActiveFontColor;
    background-color: @weuiBtnDefaultActiveBg;
  }
}
.weui_btn_primary {
  .weui_btn();
  background-color: @weuiBtnPrimaryBg;
  &:not(.weui_btn_disabled):visited {
    color: @weuiBtnFontColor;
  }
  &:not(.weui_btn_disabled):active {
    color: @weuiBtnActiveFontColor;
    background-color: @weuiBtnPrimaryActiveBg;
  }
}
.weui_btn_warn {
  .weui_btn();
  background-color: @weuiBtnWarnBg;
  &:not(.weui_btn_disabled):visited {
    color: @weuiBtnFontColor;
  }
  &:not(.weui_btn_disabled):active {
    color: @weuiBtnActiveFontColor;
    background-color: @weuiBtnWarnActiveBg;
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
  :class="['weui_btn_' + style.type,
  isDisabled ? 'weui_btn_disabled' : '',
  style.isMiniSize ? 'weui_btn_mini' : '',
  style.isInline ? 'weui_btn_inline' : ''].concat(style.classes)">
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
          isInline: false,
          classes: []
        }
      }
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

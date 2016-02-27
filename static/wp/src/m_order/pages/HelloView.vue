<style lang="less">
@import "./HelloView";
</style>

<template>
<div class="page">
    <div class="hd">
        <h1 class="page_title">WeUI</h1>
        <p class="page_desc">为微信Web服务量身设计</p>
    </div>
    <div class="bd">
        <div class="weui_grids">
            <a v-link="'button'" href="javascript:;" class="weui_grid js_grid" data-id="button">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_button.png" alt="">
                </div>
                <p class="weui_grid_label">
                    Button
                </p>
            </a>
            <a v-link="'cell'" href="javascript:;" class="weui_grid js_grid" data-id="cell">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_cell.png" alt="">
                </div>
                <p class="weui_grid_label">
                    Cell
                </p>
            </a>
            <a v-link="'toast'" href="javascript:;" class="weui_grid js_grid" data-id="toast">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_toast.png" alt="">
                </div>
                <p class="weui_grid_label">
                    Toast
                </p>
            </a>
            <a v-link="'dialog'" href="javascript:;" class="weui_grid js_grid" data-id="dialog">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_dialog.png" alt="">
                </div>
                <p class="weui_grid_label">
                    Dialog
                </p>
            </a>
            <a href="javascript:;" class="weui_grid js_grid" data-id="progress">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_button.png" alt="">
                </div>
                <p class="weui_grid_label">
                    Progress
                </p>
            </a>
            <a href="javascript:;" class="weui_grid js_grid" data-id="msg">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_msg.png" alt="">
                </div>
                <p class="weui_grid_label">
                    Msg
                </p>
            </a>
            <a v-link="'form'" href="javascript:;" class="weui_grid js_grid" data-id="article">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_article.png" alt="">
                </div>
                <p class="weui_grid_label">
                    Form
                </p>
            </a>
            <a v-link="'actionsheet'" href="javascript:;" class="weui_grid js_grid" data-id="actionsheet">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_actionSheet.png" alt="">
                </div>
                <p class="weui_grid_label">
                    ActionSheet
                </p>
            </a>
            <a href="javascript:;" class="weui_grid js_grid" data-id="icons">
                <div class="weui_grid_icon">
                    <img src="../../components/weui/assets/homepage_icons/icon_nav_icons.png" alt="">
                </div>
                <p class="weui_grid_label">
                    Icons
                </p>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    header: {
      type: Object
    }
  },
  ready () {
    // 关闭公用头部
    this.header.isShowed = false
  },
  beforeDestroy () {
    // 设置公用头部默认使用
    this.header.isShowed = true
  }
}
</script>

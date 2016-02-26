<template>
<!-- 有跳转的模板 -->
<a class="weui_cell weui_cell_access" v-if="linkTo || vlinkTo" :href="linkTo" v-link="vlinkTo">
  <div class="weui_cell_hd" v-show="imgSrc">
    <img :src="imgSrc" alt="" style="width:20px;margin-right:5px;display:block"></div>
  <div class="weui_cell_bd weui_cell_primary">
    <p>{{ label }}</p>
  </div>
  <div class="weui_cell_ft">{{ description }}</div>
</a>
<!-- 没有跳转的模板 -->
<div class="weui_cell" v-else>
  <div class="weui_cell_hd" v-show="imgSrc">
    <img :src="imgSrc" alt="" style="width:20px;margin-right:5px;display:block"></div>
  <div class="weui_cell_bd weui_cell_primary">
    <p>{{ label }}</p>
  </div>
  <div class="weui_cell_ft">{{ description }}</div>
</div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String
    },
    imgSrc: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    linkTo: {
      type: String
    },
    vlinkTo: {}
  }
}
</script>

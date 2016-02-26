<style lang="less">
@import "../cell/weui_cell_global";
@import "./weui_form_global";
</style>

<template>
<div class="weui_cells_form_wrap">
  <div class="weui_cells_title">{{ updatedFormData.title }}</div>

  <form class="weui_cells weui_cells_form">
    <form-cell v-for="cellData in updatedFormData.cellList"
      :label="cellData.label"
      :type="cellData.type"
      :attributes="cellData.attributes"
      :value.sync="cellData.value"
      :is-warning.sync="cellData.isWarning"
      :ft-img-src="cellData.ftImgSrc"
      :option-list="cellData.optionList">
    </form-cell>
  </form>

  <div class="weui_cells_tips" v-if="updatedFormData.bottomTips">
    {{ updatedFormData.bottomTips }}
  </div>
</div>
</template>

<script>
import FormCell from './form-cell'
import _ from 'lodash'

export default {
  props: {
    formData: {
      type: Object
    }
  },
  computed: {
    updatedFormData () {
      // 将未输入的数据设置为默认值
      let _updatedFormData = {
        cellList: []
      }
      _.forEach(this.formData.cellList, value =>
        _updatedFormData.cellList.push(_.merge({
          label: '',
          type: '',
          attributes: {},
          value: '',
          isWarning: false,
          ftImgSrc: '',
          optionList: [''],
          radioList: ['']
        }, value))
      )
      return _.merge(_updatedFormData, this.formData)
    }
  },
  components: {
    'form-cell': FormCell
  }
}
</script>

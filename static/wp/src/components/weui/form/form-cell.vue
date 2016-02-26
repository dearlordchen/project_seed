<template>
<!-- 复选表单 -->
<label class="weui_cell weui_cell_checkbox weui_check_label"
  :for="uniqueId + option.value" v-if="isCheckbox" v-for="option in optionList">
    <div class="weui_cell_hd">
        <input type="checkbox" class="weui_check" v-attr="attributes"
         :id="uniqueId + option.value" :value="option.value" v-model="value">
        <i class="weui_icon_checked"></i>
    </div>
    <div class="weui_cell_bd weui_cell_primary">
        <p>{{ option.text }}</p>
    </div>
</label>

<!-- 单选表单 -->
<label class="weui_cell weui_cell_radio weui_check_label"
  :for="uniqueId + option.value" v-if="isRadio" v-for="option in optionList">
    <div class="weui_cell_bd weui_cell_primary">
        <p>{{ option.text }}</p>
    </div>
    <div class="weui_cell_ft">
        <input type="radio" class="weui_check" v-attr="attributes"
         :id="uniqueId + option.value" :value="option.value" v-model="value">
        <span class="weui_icon_checked"></span>
    </div>
</label>

<!-- 选择框表单 -->
<div :class="['weui_cell', 'weui_cell_select', label ? 'weui_select_after' : '']" v-if="isSelector">
  <div class="weui_cell_hd" v-if="label">{{ label }}</div>
    <div class="weui_cell_bd weui_cell_primary">
        <select class="weui_select" v-model="value" v-attr="attributes">
            <option v-for="option in optionList" :value="option.value">{{ option.text }}</option>
        </select>
    </div>
</div>

<!-- 文本域 -->
<validator name="validation">
<div class="weui_cell" v-if="isTextarea">
    <div class="weui_cell_bd weui_cell_primary">
        <textarea class="weui_textarea" v-attr="attributes" v-model="value"></textarea>
        <div class="weui_textarea_counter"><span>{{ value.length }}</span>/200</div>
    </div>
</div>
</validator>

<!-- 普通的表单 -->
<div :class="['weui_cell',
    isWarning ? 'weui_cell_warn' : '',
    ftImgSrc ? 'weui_vcode' : '']" v-if="isGeneral">
    <div class="weui_cell_hd">
      <label class="weui_label">{{ label }}</label>
    </div>
    <div class="weui_cell_bd weui_cell_primary">
        <input class="weui_input"
        :type="type"
        :placeholder="placeholder"
        v-attr="attributes"
        v-model="value"/>
    </div>
    <div class="weui_cell_ft">
        <i class="weui_icon_warn" v-if="isWarning"></i>
        <img src="../../../assets/vcode.jpg" v-if="ftImgSrc">
    </div>
</div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      twoWay: true
    },
    attributes: {
      type: Object
    },
    isWarning: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    // vcode
    ftImgSrc: {
      type: String,
      default: ''
    },
    // select, radio, checkbox
    optionList: {
      type: Array
    },
    // 最大输入字符长度
    maxLength: {
      type: Number
    }
  },
  computed: {
    isGeneral () {
      let typeList = ['select', 'textarea', 'radio', 'checkbox']
      if (typeList.indexOf(this.type) === -1) {
        return true
      } else {
        return false
      }
    },
    isSelector () {
      return this.type === 'select'
    },
    isTextarea () {
      return this.type === 'textarea'
    },
    isRadio () {
      return this.type === 'radio'
    },
    isCheckbox () {
      return this.type === 'checkbox'
    },
    uniqueId () {
      return _.uniqueId('unique_')
    }
  }
}
</script>

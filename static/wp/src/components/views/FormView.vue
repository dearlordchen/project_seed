<template>
<div id="form-view">
  <form-cells :form-data.sync="formExample"></form-cells>
  <form-cells :form-data.sync="textareaExample"></form-cells>
  <form-cells :form-data.sync="selectExample"></form-cells>
  <form-cells :form-data.sync="radioExample"></form-cells>
  <form-cells :form-data.sync="checkboxExample"></form-cells>
</div>
</template>

<script>
import FormCells from '../weui/form/form'

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
      formExample: {
        title: '普通表单示例',
        bottomTips: '这是底部提示',
        cellList: [{
          label: '电话',
          type: 'number',
          value: '23244',
          isWarning: true
        }, {
          label: '验证码',
          ftImgSrc: 'ftImgSrc'
        }, {
          label: '日期',
          type: 'date'
        }, {
          label: '时间',
          type: 'datetime-local'
        }]
      },
      selectExample: {
        title: '选择框示例',
        cellList: [{
          type: 'select',
          value: '3',
          optionList: [{
            text: '微信',
            value: '1'
          }, {
            text: 'QQ',
            value: '2'
          }, {
            text: '新浪微博',
            value: '3'
          }, {
            text: '淘宝',
            value: '4'
          }]
        }, {
          label: '国家',
          type: 'select',
          value: '1',
          optionList: [{
            text: '中国',
            value: '1'
          }, {
            text: '日本',
            value: '2'
          }, {
            text: '韩国',
            value: '3'
          }, {
            text: '英国',
            value: '4'
          }]
        }]
      },
      textareaExample: {
        title: '文本域示例',
        cellList: [{
          type: 'textarea',
          attributes: {
            rows: '3',
            placeholder: '请输入评论'
          }
        }]
      },
      radioExample: {
        title: '单选示例',
        cellList: [{
          type: 'radio',
          value: '2',
          optionList: [{
            text: '选项1',
            value: '1'
          }, {
            text: '选项2',
            value: '2'
          }]
        }]
      },
      checkboxExample: {
        title: '复选示例',
        cellList: [{
          type: 'checkbox',
          value: ['1', '2'],
          optionList: [{
            text: '选项1',
            value: '1'
          }, {
            text: '选项2',
            value: '2'
          }, {
            text: '选项3',
            value: '3'
          }]
        }]
      }
    }
  },
  components: {
    'form-cells': FormCells
  },
  methods: {
  }
}
</script>

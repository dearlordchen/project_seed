<style lang="less">
@import "weui_cell_global";
.weui_cell_bd {
  p {
    margin: 0;
    padding: 0;
  }
}
</style>

<template>
<div class="cells_wrap">
  <div class="weui_cells_title">{{ updatedCellsData.title }}</div>
  <div class="weui_cells">
    <cell v-for="cellData in updatedCellsData.cellList"
    :icon-class="cellData.iconClass"
    :img-src="cellData.imgSrc"
    :label="cellData.label"
    :description="cellData.description"
    :link-to="cellData.linkTo"
    :vlink-to="cellData.vlinkTo">
    </cell>
  </div>
</div>
</template>

<script>
import Cell from './cell'
import _ from 'lodash'

export default {
  props: {
    cellsData: {
      type: Object
    }
  },
  computed: {
    updatedCellsData () {
      // 将未输入的数据设置为默认值
      let _updatedCellsData = {
        cellList: []
      }
      _.forEach(this.cellsData.cellList, value =>
        _updatedCellsData.cellList.push(_.merge({
          iconClass: '',
          imgSrc: '',
          label: '',
          description: '',
          linkTo: '',
          vlinkTo: ''
        }, value))
      )
      return _.merge(_updatedCellsData, this.cellsData)
    }
  },
  components: {
    'cell': Cell
  }
}
</script>

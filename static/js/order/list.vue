<template lang="jade">
<div>{{msg}}</div>
</template>

<script>
export default {
    data() {
        return {
            msg: '我是列表页'
        }
    }
}
</script>

<style lang="sass" scoped>
  $bg: #999;
  .list {
    background-color: $bg;
  }
  @import "entry.css"
</style>

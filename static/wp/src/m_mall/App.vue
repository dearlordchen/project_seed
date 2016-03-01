<style>
html {
  height: 100%;
}
body {
  font-family: Helvetica, sans-serif;
  height: 100%;
}
#wrap {
  background-color: #fbf9fe;
  min-height: 100%;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>

<template>
<div id="wrap">
  <!-- header -->
  <div id="header" style="text-align:center;" v-if="header.isShowed">
    <a style="font-size:20px;" href="#/">公用头部咯，点我你懂得</a>
  </div>
  <!-- main view -->
  <div id="main-view">
    <router-view
      transition="fade"
      transition-mode="out-in"
      :header.sync="header"
      :toast="toast"
      :dialog="dialog"
      :action-sheet="actionSheet">
    </router-view>
  </div>

</div>

</template>

<script>
export default {
  data () {
    return {
      header: {
        isShowed: true
      }
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

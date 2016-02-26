<style lang="less">
.hello {
  h1 {
    color: red;
  }
}
</style>

<template>
  <div class="hello">
    <h1 v-on:click="change">{{ msg }}</h1>
    <h2>welcome {{ name }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  props: ['name'],
  methods: {
    change () {
      alert(this.msg)
    }
  }
}
</script>

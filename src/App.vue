<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import '@/assets/css/fontawesome-all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import 'axios-progress-bar/dist/nprogress.css'
export default {

  data () {
    return {
      showDismissibleAlert: true
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>

<template>
  <!--eslint-disable-->
  <div>
    <div class="container text-center">
      <div class="logo-404">
        <a href="#" @click="$router.push('/')"><img src="@/assets/logo.png" alt=""/></a>
      </div>
      <div class="content-404">
        <img src="@/assets/404.png" class="img-responsive" alt=""  style="width:100%;height:auto;"/>
        <h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
        <p>Uh... So it looks like you broke something. The page you are looking for has up and Vanished.</p>
        <h2><a href="#" @click="$router.push('/')">Bring me back Home</a></h2>
      </div>
    </div>
  </div>
</template>

<script>
// import Item from './Item.vue'
// import {Events} from '@/events.js'
export default {
  name: 'Error404',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .content-404 a{
    background-color: #e79539;
    text-decoration: none;
    color:#fff;
    padding:10px 30px;
    font-size: 1.8rem;
    margin-bottom: 10px;
    display: inline-block;
  }
  .content-404 a:hover{
    opacity:0.7;
  }
</style>

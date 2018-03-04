<template>
  <!--eslint-disable-->
    <div class="left-sidebar">
      <h2>Category</h2>
      <div id="categories">
        <ul>
          <li v-for="c in category"><router-link :to="{ name: 'Category', params: { 'categoryId': c.CategoryID }}">{{c.CategoryName}}</router-link></li>

        </ul>
      </div>


      <div class="price-range"><!--price-range-->
        <h2>Price Range</h2>
        <b-form-select v-model="priceRange" :options="priceOptions" class="mb-3"/>
      </div><!--/price-range-->

      <div class="shipping text-center"><!--shipping-->
        <img src="@/assets/shipping.jpg" alt="" style="width:100%"/>
      </div><!--/shipping-->

    </div>
</template>

<script>
// import Item from './Item.vue'
// import {Events} from '@/events.js'
export default {
  name: 'CategorySelection',
  data () {
    return {
      category: [],
      priceOptions: [
        {value: '1', text: '< 1000'},
        {value: '2', text: '1000 - 10000'},
        {value: '3', text: '10000 - 100000'},
        {value: '4', text: '> 100000'}
      ],
      priceRange: '2'
    }
  },
  methods: {
  },
  created () {
    // category
    this.$http.get(this.API_ENDPOINT + '/api/v1/product/category', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      this.category = response.data
    }).catch(err => {
      console.log('this is an error ', err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-sidebar h2{
  color: #FE980F;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 30px;
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  z-index: 3;
}
.left-sidebar h2:before{
  content: " ";
  position: absolute;
  background: #fff;
  bottom: -6px;
  width: 130px;
  height: 30px;
  z-index: -1;
  left: 50%;
  margin-left: -65px;
}
.left-sidebar h2:after{
  content: " ";
  position: absolute;
  border: 1px solid #f5f5f5;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 0;
  z-index: -2;
}
#categories ul{
  margin:0;
  padding:0;
  list-style-type: none;
  margin-bottom: 30px;
  border:1px solid #eee;
  padding:10px 0px;
}
#categories ul>li a{
  display: inline-block;
  color: #696763;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  padding:5px 0px;
  margin:5px 0px;
  font-weight: 900;
  line-height: 1.1;
}
#categories ul>li a:hover{
  color:#fe980f;
}
</style>

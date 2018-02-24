<template>
  <!--eslint-disable-->
  <div>
    <b-container>
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="1024"
                  img-height="480"
      >

        <!-- Text slides with image -->

        <b-carousel-slide v-for="c in carousel" :key="c.CarouselID"
                          caption="First slide"
                          :text="c.CarouselDesc"
                          :img-src="'/api/v1/carousel/image/'+c.CarouselID"


        ></b-carousel-slide>
      </b-carousel>
      <b-row style="margin-top:30px;">
        <b-col sm="3">
					<div class="left-sidebar">
						<h2>Category</h2>
						<div id="categories">
              <ul>
                <li v-for="c in category"><a href="#">{{c.CategoryName}}</a></li>
              </ul>
            </div>


						<div class="price-range"><!--price-range-->
							<h2>Price Range</h2>
              <b-form-select v-model="priceRange" :options="priceOptions" class="mb-3"/>
						</div><!--/price-range-->

						<div class="shipping text-center"><!--shipping-->
							<img src="@/assets/shipping.jpg" alt="" />
						</div><!--/shipping-->

					</div>
				</b-col>
        <b-col sm="9">
          <div class="content-area">
            <h2 class="title">Featured item</h2>
            <div class="products">
              <b-row class="justify-content-center">
                <b-col sm="6" md="4" v-for="p in products" :key="p.ProductID">
                  <product-card :product="p"/>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCard from '../shared/ProductCard.vue'
import {Events} from '@/events.js'
export default {
  components: {'product-card': ProductCard},
  name: 'Home',
  data () {
    return {
      category: [],
      priceRange: '2',
      priceOptions: [
        {value: '1', text: '< 1000'},
        {value: '2', text: '1000 - 10000'},
        {value: '3', text: '10000 - 100000'},
        {value: '4', text: '> 100000'}
      ],
      products: [],
      carousel: [],
      cart: []
    }
  },
  methods: {
    addItemsToCart (product) {
      var _return = true
      var items = []
      if (this.$store.state.cartItems.length === 0) {
        items.push(product)
        this.$store.state.cartItems = items
        this.$store.state.cartBadge = items.length
        window.sessionStorage.setItem('cartProducts', JSON.stringify(items))
      } else {
        this.$store.state.cartItems.forEach((item) => {
          if (item.ProductID === product.ProductID) {
            _return = false
            window.alert('already exists')
          }
        })
        if (_return) {
          this.$store.state.cartItems.push(product)
          this.$store.state.cartBadge = this.$store.state.cartItems.length
          window.sessionStorage.setItem('cartProducts', JSON.stringify(this.$store.state.cartItems))
        } else return _return
      }
    }
  },
  created () {
    Events.$on('addToCart', this.addItemsToCart)
    // category
    this.$http.get('/api/v1/product/category', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      this.category = response.data
    }).catch(err => {
      console.log('this is an error ', err)
    })
    // Product
    this.$http.get('/api/v1/product/', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      this.products = response.data
    }).catch(err => {
      console.log('this is an error ', err)
    })
    // carousel
    this.$http.get('/api/v1/carousel/', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      this.carousel = response.data
    }).catch(err => {
      console.log('this is an error ', err)
    })
  },
  beforeDestroy () {
    Events.$off('addToCart', this.addItemsToCart)
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
  h2.title{
    color: #FE980F;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0 15px;
    text-transform: uppercase;
    margin-bottom: 30px;
    position: relative;
    z-index: 0;
  }
  h2.title:before{
    content: " ";
    position: absolute;
    background: #fff;
    bottom: -6px;
    width: 220px;
    height: 30px;
    z-index: -1;
    left: 50%;
    margin-left: -110px;
  }
  h2.title:after{
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

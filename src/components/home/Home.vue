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
                          :img-src="API_ENDPOINT+'/api/v1/carousel/image/'+c.CarouselID"


        ></b-carousel-slide>
      </b-carousel>
      <b-row style="margin-top:30px;">
        <b-col md="3">
          <category-selection style="width:100%"/>
        </b-col>
        <b-col md="9">
          <div class="content-area">
            <h2 class="title">Featured item</h2>
            <div class="products">
              <b-row class="justify-content-center">
                <b-col sm="6" md="6" lg="4" v-for="p in products" :key="p.ProductID" class="justify-content-center resp-row">
                  <product-card :product="p" @viewProduct="viewProduct"/>
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
import CategorySelection from '../shared/CategorySelection.vue'
// import {Events} from '@/events.js'
export default {
  components: {'product-card': ProductCard, 'category-selection': CategorySelection},
  name: 'Home',
  data () {
    return {
      products: [],
      carousel: [],
      cart: []
    }
  },
  methods: {
    viewProduct (id) {
      console.log(id)
    },
    showSuccess (msg) {
      this.iconSuccess = true
      this.iconWarning = false
      this.modalMessage = msg
      this.showModal()
    },
    showWarning (msg) {
      this.iconSuccess = false
      this.iconWarning = true
      this.modalMessage = msg
      this.showModal()
    },
    showModal () {
      this.$refs.alert.show()
    },
    hideModal () {
      this.$refs.alert.hide()
    }
  },
  created () {
    // Events.$on('addToCart', this.addItemsToCart)
    // Product
    this.$http.get(this.API_ENDPOINT + '/api/v1/product/', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      this.products = response.data
    }).catch(err => {
      console.log('this is an error ', err)
    })
    // carousel
    this.$http.get(this.API_ENDPOINT + '/api/v1/carousel/', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      this.carousel = response.data
    }).catch(err => {
      console.log('this is an error ', err)
    })
  }
  // beforeDestroy () {
  //   Events.$off('addToCart', this.addItemsToCart)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

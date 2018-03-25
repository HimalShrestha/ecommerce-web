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
                          caption=""
                          :text="c.CarouselDesc"
                          :img-src="API_ENDPOINT+'/api/v1/carousel/image/'+c.CarouselID"


        ></b-carousel-slide>
      </b-carousel>
      <b-row style="margin-top:30px;">
        <b-col md="3">
          <category-selection style="width:100%" @filter="filterProduct"/>
        </b-col>
        <b-col md="9">
          <div class="content-area">
            <h2 class="title">Featured item</h2>
            <div class="products">
              <b-row class="justify-content-center">
                <div v-if="noProduct">
                  Sorry no product with in the price limit
                </div>
                <b-col sm="6" v-else md="6" lg="4" v-for="p in products" :key="p.ProductID" class="justify-content-center resp-row">
                  <product-card :product="p" @viewProduct="viewProduct"/>
                </b-col>
              </b-row>
              <b-pagination-nav variant="danger" :link-gen="linkGen" align="center" :number-of-pages="Math.ceil(parseInt(productCount)/size)" v-model="currentPage" :class="{'d-none': !pagination}"/>
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
      cart: [],
      productCount: '',
      currentPage: 1,
      size: 10,
      pagination: true,
      noProduct: false
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#/?page=' + pageNum
    },
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
    },
    filterProduct (range) {
      // console.log(range)
      this.noProduct = false
      this.pagination = false
      var low, high
      if (range === '0') {
        low = 0
        high = 1000000000000
      } else if (range === '1') {
        low = 0
        high = 999
      } else if (range === '2') {
        low = 1000
        high = 9999
      } else if (range === '3') {
        low = 10000
        high = 99999
      } else if (range === '4') {
        low = 100000
        high = 1000000000000
      }
      this.$http.get(this.API_ENDPOINT + '/api/v1/product?size=' + this.size + '&low=' + low + '&high=' + high + '&page=' + this.currentPage, {headers: { 'Content-Type': 'application/json' }}).then(response => {
        this.products = response.data.data
        this.productCount = response.data.count
        if (this.products.length === 0) {
          this.noProduct = true
        }
      }).catch(err => {
        console.log('this is an error ', err)
      })
    },
    getProduct () {
      this.$http.get(this.API_ENDPOINT + '/api/v1/product?size=' + this.size + '&page=' + this.currentPage, {headers: { 'Content-Type': 'application/json' }}).then(response => {
        this.products = response.data.data
        this.productCount = response.data.count
      }).catch(err => {
        console.log('this is an error ', err)
      })
    }
  },
  watch: {
    // whenever question changes, this function will run
    currentPage: function (naya, purano) {
      this.getProduct()
    }
  },
  created () {
    if (this.$route.query.page) {
      this.currentPage = parseInt(this.$route.query.page)
    }
    console.log(this.currentPage)
    // Product
    this.$http.get(this.API_ENDPOINT + '/api/v1/product?size=' + this.size + '&page=' + this.currentPage, {headers: { 'Content-Type': 'application/json' }}).then(response => {
      this.products = response.data.data
      this.productCount = response.data.count
      if (this.size >= this.productCount) {
        this.pagination = false
      }
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

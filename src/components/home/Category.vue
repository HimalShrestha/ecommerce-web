<template>
  <!--eslint-disable-->
  <div>
    <b-container>
      <div class="ads-banner">
        <img src="@/assets/advertisement.jpg" alt="" style="width:100%"/>
      </div>
      <b-row style="margin-top:30px;">
        <b-col sm="3">
          <category-selection style="width:100%"/>
        </b-col>
        <b-col sm="9">
          <div class="content-area">
            <h2 class="title">{{pageName}}</h2>
            <div class="products">
              <b-row class="justify-content-center">
                <b-col sm="6" md="6" lg="4" v-for="p in products" :key="p.ProductID" class="justify-content-center resp-row">
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
// import Item from './Item.vue'
// import {Events} from '@/events.js'
import CategorySelection from '../shared/CategorySelection.vue'
import ProductCard from '../shared/ProductCard.vue'
export default {
  components: {'product-card': ProductCard, 'category-selection': CategorySelection},
  name: 'Category',
  data () {
    return {
      products: [],
      pageName: ''
    }
  },
  methods: {
    getProducts (id) {
      this.$http.get(this.API_ENDPOINT + '/api/v1/product?category=' + id, {headers: { 'Content-Type': 'application/json' }}).then(response => {
        this.pageName = response.data[0].CategoryName
        this.products = response.data
      }).catch(err => {
        console.log('this is an error ', err)
      })
    }
  },
  watch: {
    '$route.params.categoryId': function (id) {
      this.getProducts(this.categoryId)
    }
  },
  created () {
    console.log('alive')
    this.getProducts(this.categoryId)
  },
  beforeDestroy () {
    console.log('dead')
  },
  props: ['categoryId']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

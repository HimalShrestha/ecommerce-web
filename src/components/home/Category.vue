<template>
  <!--eslint-disable-->
  <div>
    <b-container>
      <div class="ads-banner">
        <img src="@/assets/advertisement.jpg" alt="" style="width:100%"/>
      </div>
      <b-row style="margin-top:30px;">
        <b-col sm="3">
          <category-selection style="width:100%" @name="getName"/>
        </b-col>
        <b-col sm="9">
          <div class="content-area">
            <h2 class="title">{{pageName}}</h2>
            <div class="products">
              <b-row class="justify-content-center">
                <div v-if="noProduct">
                  Sorry currently we don't have any product under this category.
                </div>
                <b-col sm="6" md="6" v-else lg="4" v-for="p in products" :key="p.ProductID" class="justify-content-center resp-row">
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
      pageName: '',
      noProduct: false
    }
  },
  methods: {
    getName (name) {
      this.pageName = name
    },
    getProducts (id) {
      this.noProduct = false
      this.$http.get(this.API_ENDPOINT + '/api/v1/product?category=' + id, {headers: { 'Content-Type': 'application/json' }}).then(response => {
        this.products = response.data
        if (this.products.length === 0) {
          this.noProduct = true
        } else {
          this.pageName = response.data[0].CategoryName
        }
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

<template>
  <!--eslint-disable-->
  <div>
    <b-container style="text-align:left">
      <b-row>
        <b-col sm="4">
          <img :src="API_ENDPOINT+'/api/v1/product/image/'+product.ProductID" alt="something" style="width:100%"/>
        </b-col>
        <b-col sm="8">
          <div class="product-overview">
            <h5 style="margin-bottom:1rem;">{{product.ProductName}}</h5>
            <h3 style="color:#FE980F;font-weight:900">{{this.$store.state.currency}}{{product.ProductPrice}}</h3>
            <p><span style="color:#000;font-size:1.2rem;font-weight:400;">Seller:</span> {{product.SellerName}}</p>
            <p><span style="color:#000;font-size:1.2rem;font-weight:400;">Stock:</span> {{product.ProductStock}}</p>
            <b-button variant="outline-success" @click="addToCart">Add to Cart</b-button>
          </div>
        </b-col>
      </b-row>
      <hr/>
      <b-row>
        <b-col sm="4">
          <div class="product-detail-1">
            <h2>Product Details</h2>
            <p>{{product.ProductName}} by {{product.SellerName}}</p>
            <p>{{product.ProductLongDesc}}</p>
          </div>
        </b-col>
        <b-col sm="4">
          <h2>Product Code</h2>
          <p>{{product.ProductID}}</p>
          <h2>Platform</h2>
          <p>{{product.ProductShortDesc}}</p>

        </b-col>
        <b-col sm="4">
          <h2>Product Guide</h2>
          <a href="">Contact us for guide</a>
          <h2>Product Seller</h2>
          <p>{{product.SellerDesc}}</p>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import {Events} from '@/events.js'
export default {
  name: 'Product',
  data () {
    return {
      product: ''
    }
  },
  methods: {
    getThisProduct (id) {
      // Product
      this.$http.get(this.API_ENDPOINT + '/api/v1/product/' + id, {headers: { 'Content-Type': 'application/json' }}).then(response => {
        console.log(response)
        this.product = response.data
      }).catch(err => {
        console.log('this is an error ', err)
      })
    },
    addToCart () {
      Events.$emit('addToCart', this.product)
    }
  },
  created () {
    this.getThisProduct(this.prodId)
  },
  // beforeDestroy () {
  //   Events.$off('addToCart')
  // },
  props: ['prodId']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    font-weight: 800;
    font-size: 1.3rem;
    color:#aeaeae;
    margin-top:30px;
  }
</style>

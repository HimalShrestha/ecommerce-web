<template>
  <!--eslint-disable-->
  <div class="product-card">
    <b-card no-body
        style="max-width: 100%;"
        :img-src="API_ENDPOINT+'/api/v1/product/image/'+product.ProductID"
        img-alt="Image"
        img-top
        @click="showDetails">
      <b-card-body>
        <h3 class="product-price"><i class="fas fa-rupee-sign"></i> {{product.ProductPrice}}</h3>
          <p class="product-name">
              {{product.ProductName}}
          </p>
        <button type="button" class="add-to-cart" @click.stop="addToCart"><i class="fa fa-shopping-cart"></i> Add to cart</button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {Events} from '@/events.js'
export default {
  name: 'ProductCard',
  data () {
    return {

    }
  },
  methods: {
    addToCart () {
      Events.$emit('addToCart', this.product)
    },
    showDetails () {
      this.$router.push('/product/' + this.product.ProductID)
    }
  },
  created () {
  },
  props: ['product']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-card{
    margin-bottom:30px;
    cursor:pointer;
    transition: box-shadow 0.2s linear;
  }
  .product-card:hover{
    box-shadow:0px 0px 3px 3px #FE980F;
  }
  .add-to-cart{
    background: #F5F5ED;
    border: 0 none;
    border-radius: 0;
    color: #696763;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    padding:10px 20px;
    cursor: pointer;
    margin-bottom: 10px;
    width: 140px;
  }
  .add-to-cart:hover{
    background: #FE980F;
    color: #FFFFFF;
  }

  .product-price{
    color: #FE980F;
    font-size: 24px;
    font-weight: 700;
  }
  .product-name{
    font-weight: 700;
  }
  @media only screen and (min-width:0px) and (max-width: 576px) {
    .product-card{
      max-width:300px !important;
    }
  }

</style>

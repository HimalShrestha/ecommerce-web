<template>
  <!--eslint-disable-->
  <div>
    <section id="cart_items">
  		<b-container>
  			<b-breadcrumb :items="breadcrumbItems"/>
  			<div class="table-responsive cart_info">
  				<table class="table table-condensed">
  					<thead>
  						<tr class="cart_menu">
  							<td class="image">Item</td>
  							<td class="description">Description</td>
  							<td class="price">Price</td>
  							<td class="quantity">Quantity</td>
  							<td class="total">Total</td>
  							<td>Remove</td>
  						</tr>
  					</thead>
						<tbody v-for="p in cart">
              <cart-item :itemProp="p" @remove="removeItem"/>
            </tbody>
  				</table>
  			</div>
  		</b-container>
  	</section> <!--/#cart_items-->
  </div>
</template>

<script>
import Item from './Item.vue'
// import {Events} from '@/events.js'
export default {
  components: {'cart-item': Item},
  name: 'Cart',
  data () {
    return {
      cart: [],
      breadcrumbItems: [{
        text: 'Home',
        href: '/'
      }, {
        text: 'Shopping Cart',
        active: true
      }]
    }
  },
  methods: {
    incrementItem (id) {

    },
    updatedValue () {
      return 1
    },
    removeItem (item) {
      var removeIndex = this.cart.map(function (i) { return i.ProductID }).indexOf(item)
      this.cart.splice(removeIndex, 1)
      this.$store.state.cartItems = this.cart
      this.$store.state.cartBadge = this.cart.length
      window.sessionStorage.setItem('cartProducts', JSON.stringify(this.cart))
    }
  },
  created () {
    var retrived = this.$store.state.cartItems
    this.cart = retrived
  },
  props: ['itemProp']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#form{
  display: block;
  margin-bottom: 185px;
  margin-top: 185px;
  overflow: hidden;
  form input{
    background: #F0F0E9;
    // border: medium none;
    color: #696763;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    height: 40px;
    margin-bottom: 10px;
    outline: medium none;
    padding-left: 10px;
    width: 100%;
  }
  h2{
    color: #696763;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 30px;
  }
  button{
    background: #FE980F;
  border: medium none;
  border-radius: 0;
  color: #FFFFFF;
  display: block;
  padding: 6px 25px;
  }
}

</style>

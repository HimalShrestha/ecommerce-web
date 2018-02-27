<template>
  <!--eslint-disable-->
  <div>
    <section id="cart_items">
  		<b-container>
  			<b-breadcrumb :items="breadcrumbItems"/>
        <b-row v-if="this.$store.state.cartBadge!==0">
          <b-col sm="12" class="table-responsive cart_info">
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
                <cart-item :itemProp="p" @remove="removeItem" @updateTotal="calculateTotal"/>
              </tbody>
    				</table>
    			</b-col>
          <b-col sm="12">
            <b-card title="Total"
                    style="max-width: 20rem;"
                    class="mb-2">
                  <hr/>
              <div class="card-body">
                <p class="clearfix">
                  <h4 class="float-left">Sub-total</h4>
                  <span class="float-right">{{this.$store.state.currency}}{{this.total}}</span>
                </p>
                <p class="clearfix">
                  <h4 class="float-left">Extra</h4>
                  <span class="float-right">{{this.$store.state.currency}}400</span>
                </p>
              </div>
              <div class="card-body">
                <b-btn variant="outline-success" block @click="$router.push('/checkout')">Checkout</b-btn>
              </div>

              <div class="payment-methods" slot="footer">
                <h4>WE ACCEPT:</h4>
                <ul>
                  <li><img src="@/assets/single.png" alt="payment" class="img-fluid"/></li>
                </ul>
                <p>Got a discount code? Add it in the next step.</p>
              </div>

            </b-card>
          </b-col>
        </b-row>

        <div class="no-items" v-else style="padding:40px 0px">
          <p style="font-size:1.4rem;">Your cart is empty!</p>
          <b-button variant="warning" @click="$router.push('/')">Shop</b-button>
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
      total: 0,
      breadcrumbItems: [{
        text: 'Home',
        to: {name: 'Home'}
      }, {
        text: 'Shopping Cart',
        active: true
      }]
    }
  },
  methods: {
    calculateTotal () {
      var total = 0
      this.cart.forEach(item => {
        total = total + (item.ProductPrice * item.itemCount)
      })
      this.total = total
    },
    removeItem (item) {
      var removeIndex = this.cart.map(function (i) { return i.ProductID }).indexOf(item)
      this.cart.splice(removeIndex, 1)
      this.calculateTotal()
      this.$store.state.cartItems = this.cart
      this.$store.state.cartBadge = this.cart.length
      window.sessionStorage.setItem('cartProducts', JSON.stringify(this.cart))
    }
  },
  created () {
    var retrived = this.$store.state.cartItems
    this.cart = retrived
    this.calculateTotal()
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
.payment-methods{
  ul{
    list-style-type: none;
    padding:0;
    margin:0;
    margin:10px 0px;
  }
  h4{
    font-size: 1rem;
    text-align: left;
  }
  p{
    font-weight: 300;
    text-align: left;
    margin:10px 0px;
  }
}
</style>

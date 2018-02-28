<template>
  <!--eslint-disable-->
  <div class="body">
    <header id="header"><!--header-->
  		<div class="header_top"><!--header_top-->
  			<b-container>
  				<b-row>
  					<b-col sm="6">
  						<div class="contactinfo">
  							<ul class="nav nav-pills">
  								<li><a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a></li>
  								<li><a href="#"><i class="fa fa-envelope"></i> info@domain.com</a></li>
  							</ul>
  						</div>
  					</b-col>
  					<b-col sm="6">
  						<div class="float-right">
  							<ul class="social-icons nav narbar-nav">
  								<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
  								<li><a href="#"><i class="fab fa-twitter"></i></a></li>
  								<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
  								<li><a href="#"><i class="fab fa-dribbble"></i></a></li>
  								<li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
  							</ul>
  						</div>
  					</b-col>
  				</b-row>
  			</b-container>
  		</div><!--/header_top-->
      <b-container>
  		  <div class="header-middle"><!--header-middle-->
  				<b-row class="align-items-center">
  					<b-col sm="4">
  						<div class="logo float-left">
  							<a href="#" @click="$router.push('/')"><img src="@/assets/logo.png" alt="" /></a>
  						</div>
  					</b-col>
  					<b-col sm="8">
  						<div class="float-right">
                <ul class="nav main-nav">
                  <li><router-link to="/cart" @click="cartData"><i class="fa fa-shopping-cart"></i> Cart <b-badge variant="dark">{{this.$store.state.cartBadge}}</b-badge></router-link></li>
                  <!-- <li><router-link to="/checkout"><i class="fa fa-crosshairs"></i> Checkout</router-link></li> -->
  								<li v-if="this.$store.state.isLoggedIn"><router-link to="/account"><i class="fa fa-user"></i> Account</router-link></li>
  								<!-- <li><a href="#"><i class="fa fa-star"></i> Wishlist</a></li> -->
                  <li v-if="!this.$store.state.isLoggedIn"><router-link to="/register"><i class="fa fa-user"></i> Register</router-link></li>
                  <li v-if="!this.$store.state.isLoggedIn"><router-link to="/login"><i class="fa fa-lock"></i> Login</router-link></li>
                  <li v-if="this.$store.state.isLoggedIn"><a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
  							</ul>
  						</div>
  					</b-col>
  				</b-row>
  		  </div><!--/header-middle-->
      </b-container>

  		<div class="header-bottom"><!--header-bottom-->
        <b-container>
          <b-row class="align-items-center">
            <b-col sm="9">
              <b-navbar toggleable="md">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_collapse">
                  <b-navbar-nav>
                    <b-nav-item href="#" @click="$router.push('/')">Home</b-nav-item>
                    <b-nav-item href="#">How to</b-nav-item>
                    <b-nav-item-dropdown text="Lang" right>
                      <b-dropdown-item href="#">EN</b-dropdown-item>
                      <b-dropdown-item href="#">ES</b-dropdown-item>
                      <b-dropdown-item href="#">RU</b-dropdown-item>
                      <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="#">Contact</b-nav-item>
                  </b-navbar-nav>

                </b-collapse>
              </b-navbar>
            </b-col>
            <b-col sm="3">
              <div class="search-box float-right">
  							<input type="text" placeholder="Search"/>
  						</div>
            </b-col>
          </b-row>
        </b-container>
  		</div><!--/header-bottom-->
  	</header><!--/header-->
    <transition>
      <router-view></router-view>
    </transition>
    <footer id="footer"><!--Footer-->
  		<div class="footer-top">
  			<b-container>
  				<b-row>
  					<b-col sm="2">
  						<div class="companyinfo">
  							<h2><span>e</span>-shopper</h2>
  							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
  						</div>
  					</b-col>
  					<b-col sm="7">
              <b-row>
    						<b-col sm="3">
    							<div class="payment-logo">
  									<img src="@/assets/iframe4.png" alt="" />
    							</div>
    						</b-col>
                <b-col sm="3">
    							<div class="payment-logo">
  									<img src="@/assets/iframe4.png" alt="" />
    							</div>
    						</b-col>
                <b-col sm="3">
    							<div class="payment-logo">
  									<img src="@/assets/iframe4.png" alt="" />
    							</div>
    						</b-col>
                <b-col sm="3">
    							<div class="payment-logo">
  									<img src="@/assets/iframe4.png" alt="" />
    							</div>
    						</b-col>
              </b-row>
  					</b-col>
  					<b-col sm="3">
  						<div class="secure-logo">
  							<img src="images/home/map.png" alt="" />
  							<p>Put Secure logo here</p>
  						</div>
  					</b-col>
  				</b-row>
  			</b-container>
  		</div>

  		<div class="footer-widget">
  			<b-container class="text-left">
  				<b-row>
  					<b-col sm="2">
  						<div class="single-widget">
  							<h2>Service</h2>
  							<ul>
  								<li><a href="#">Online Help</a></li>
  								<li><a href="#">Contact Us</a></li>
  								<li><a href="#">Order Status</a></li>
  								<li><a href="#">Change Location</a></li>
  								<li><a href="#">FAQ’s</a></li>
  							</ul>
  						</div>
  					</b-col>
            <b-col sm="2">
  						<div class="single-widget">
  							<h2>Quick Shop</h2>
  							<ul>
  								<li><a href="#">Online Help</a></li>
  								<li><a href="#">Contact Us</a></li>
  								<li><a href="#">Order Status</a></li>
  								<li><a href="#">Change Location</a></li>
  								<li><a href="#">FAQ’s</a></li>
  							</ul>
  						</div>
  					</b-col>
            <b-col sm="2">
  						<div class="single-widget">
  							<h2>Policies</h2>
  							<ul>
                  <li><a href="#">Terms of Use</a></li>
  								<li><a href="#">Privecy Policy</a></li>
  								<li><a href="#">Refund Policy</a></li>
  								<li><a href="#">Billing System</a></li>
  								<li><a href="#">Ticket System</a></li>
  							</ul>
  						</div>
  					</b-col>
            <b-col sm="2">
  						<div class="single-widget">
  							<h2>About Us</h2>
  							<ul>
                  <li><a href="#">Company Information</a></li>
  								<li><a href="#">Careers</a></li>
  								<li><a href="#">Store Location</a></li>
  								<li><a href="#">Affillate Program</a></li>
  								<li><a href="#">Copyright</a></li>
  							</ul>
  						</div>
  					</b-col>
  					<b-col sm="3" offset-sm="1">
  						<div class="single-widget">
  							<h2>About Shopper</h2>
  							<form action="#" class="searchform">
  								<input type="text" placeholder="Your email address" />
  								<button type="submit" class="btn btn-default"><i class="fa fa-phone"></i></button>
  								<p>Get the most recent updates from <br />our site and be updated your self...</p>
  							</form>
  						</div>
  					</b-col>
  				</b-row>
  			</b-container>
  		</div>

  		<div class="footer-bottom">
  			<b-container>
  				<b-row>
  					<p @click="done">Copyright © 2018 Point Market Inc. All rights reserved.</p>
  				</b-row>
  			</b-container>
  		</div>

  	</footer><!--/Footer-->
    <b-modal ref="alert" hide-footer centered size="sm">
    <div class="d-block text-center">
      <i :class="{'far fa-check-circle text-success':this.iconSuccess,'fas fa-info text-warning':this.iconWarning}" style="font-size:3rem"></i>
      <h3 style="margin-top:30px;font-size:1rem;font-weight:300;">{{modalMessage}}</h3>
    </div>
    <b-btn class="mt-3 mb-3" @click="$router.push('/cart'),hideModal()" variant="warning lg"><i class="fa fa-shopping-cart"></i> View Cart</b-btn>
  </b-modal>
  </div>
</template>

<script>
import {Events} from '@/events.js'
export default {
  name: 'Master',
  data () {
    return {
      loggedIn: false,
      cart: [],
      iconSuccess: false,
      iconWarning: true,
      modalMessage: 'Item already added to cart'
    }
  },

  created () {
    Events.$on('addToCart', this.addItemsToCart)
    if (window.sessionStorage.getItem('cartProducts')) {
      this.$store.state.cartItems = JSON.parse(window.sessionStorage.getItem('cartProducts'))
      this.$store.state.cartBadge = this.$store.state.cartItems.length
    }

    // check login
    this.$http.get(this.API_ENDPOINT + '/api/v1/auth/checkLogin', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      if (response.data === null) {
        this.$store.state.isLoggedIn = false
        this.loggedIn = false
      } else {
        this.$store.state.isLoggedIn = true
        this.$store.state.userId = response.data.user.id
        this.loggedIn = true
      }
    }).catch(err => {
      console.log('this is an error ', err)
    })
  },
  methods: {
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
    addItemsToCart (product) {
      console.log('hit')
      var _return = true
      var items = []
      product['itemCount'] = 1
      if (this.$store.state.cartItems.length === 0) {
        items.push(product)
        this.$store.state.cartItems = items
        this.$store.state.cartBadge = items.length
        window.sessionStorage.setItem('cartProducts', JSON.stringify(items))
        this.showSuccess('Item Added to Cart')
      } else {
        this.$store.state.cartItems.forEach((item) => {
          if (item.ProductID === product.ProductID) {
            _return = false
            this.showWarning('Item already in Cart')
          }
        })
        if (_return) {
          this.$store.state.cartItems.push(product)
          this.$store.state.cartBadge = this.$store.state.cartItems.length
          window.sessionStorage.setItem('cartProducts', JSON.stringify(this.$store.state.cartItems))
          this.showSuccess('Item Added to Cart')
        } else return _return
      }
    },
    cartData () {
      Events.$emit('cart', this.cart)
    },
    done () {
      console.log(this.cart)
    },
    logout (e) {
      e.preventDefault()
      // logout
      this.$http.get(this.API_ENDPOINT + '/api/v1/auth/logout', {headers: { 'Content-Type': 'application/json' }}).then(response => {
        console.log('logged out', response)
        if (response.status === 200) {
          window.location.href = '/'
        }
      }).catch(err => {
        console.log('this is an error ', err.response)
      })
    }
  },
  beforeCreate () {
    // check login
    this.$http.get(this.API_ENDPOINT + '/api/v1/auth/checkLogin', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      if (response.data === null) {
        this.$store.state.isLoggedIn = false
        this.loggedIn = false
      } else {
        this.$store.state.isLoggedIn = true
        this.$store.state.userId = response.data.user.id
        this.loggedIn = true
      }
    }).catch(err => {
      console.log('this is an error ', err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  display:inline-block;
  color:#696763;
}
a:hover{
  color:#fe980f;
}
.body{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333;
  background-color: #fff;
  vertical-align: middle;
}
.header_top{
  padding:10px 0px;
  background-color: #F0F0E9;
  font-size: 12px;
  color: #696763;
}
.header_top a{
  color: #696763;
}
.social-icons>li{
  margin-left: 30px;
}
.main-nav li{
  margin-left: 30px;
}
.header-middle{
  padding:20px 0px;
  border-bottom:1px solid #ddd;
}
.header-bottom{
  padding:20px 0px;
  font-size: 1.2em;
}
.search-box input{
  background: #F0F0E9;
  border: medium none;
  color: #B2B2B2;
  font-size: 14px;
  font-weight: 300;
  height: 35px;
  outline: medium none;
  padding-left: 10px;
  width: 155px;
}
#footer{
  background: #F0F0E9;
}
.footer-top .container{
  border-bottom: 1px solid #E0E0DA;
  padding-bottom: 20px;
}
.footer-widget .container{
  border-top: 1px solid #FFFFFF;
  padding-top: 15px;
}
.single-widget{
  margin-bottom: 2rem;
}
.single-widget h2{
  color: #666663;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 1.2rem;
  margin-top:1.5rem;
  text-transform: uppercase;
}
.single-widget ul{
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  font-size: 1em;
}
.single-widget ul li{
  padding:5px 0px;
}
.single-widget ul li{
  color: #000000;
  font-size: 14px;
  font-weight: 300;
}
.searchform input{
  border: 1px solid #DDDDDD;
  color: #CCCCC6;
  font-size: 14px;
  margin-top: 0;
  outline: medium none;
  padding: 7px;
  width: 212px;
}
.searchform button{
  background: #FE980F;
  border: medium none;
  border-radius: 0;
  margin-left: -5px;
  margin-top: -3px;
}
.searchform p{
  color: #000000;
  font-size: 14px;
  margin-top: 25px;
  font-weight: 300;
}
.footer-bottom{
  background: #D6D6D0;
  padding-top: 1rem;
}
.companyinfo,.payment-logo,.secure-logo{
  margin-top:55px;
}
.payment-logo{

}
.router-link-active{
  color:#fe980f;
}
</style>

<template>
  <!--eslint-disable-->
  <div>
    <b-container>
      <b-breadcrumb :items="breadcrumbItems"/>
      <b-card no-body v-if="!this.$store.state.isLoggedIn">
        <b-tabs card>
          <b-tab title="<i class='fas fa-sign-in-alt'></i> Login" active title-item-class="w-50 size-change">
            <login :checkout="'checkout'"/>
          </b-tab>
          <b-tab title="<i class='fas fa-user'></i> Register" title-item-class="w-50 size-change">
            <register :checkout="'checkout'"/>
          </b-tab>
        </b-tabs>
      </b-card>
      <div v-else style="margin-bottom:40px;">
        <b-row>
          <b-col sm="12">
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion1 variant="secondary">Step 1: Order Details</b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>

                    <b-form>
                      <b-row>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Firstname"
                                        label-for="fname"
                                        :state="!$v.user.UserFirstName.$error">
                            <b-form-input id="fname" :state="$v.user.UserFirstName.$error?false:null" v-model.trim="user.UserFirstName" placeholder="Enter Firstname" @blur.native="$v.user.UserFirstName.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="$v.user.UserFirstName.$error && !$v.user.UserFirstName.required">Required</div>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserFirstName.minLength">Must have atleast {{ $v.user.UserFirstName.$params.minLength.min}} letters</div>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserFirstName.alpha">Must be only letters</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Lastname"
                                        label-for="lname"
                                        :state="!$v.user.UserLastName.$error">
                            <b-form-input id="lname" :state="$v.user.UserLastName.$error?false:null" v-model.trim="user.UserLastName" placeholder="Enter Lastname" @blur.native="$v.user.UserLastName.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="$v.user.UserLastName.$error && !$v.user.UserLastName.required">Required</div>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserLastName.minLength">Must have atleast {{ $v.user.UserLastName.$params.minLength.min}} letters</div>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserLastName.alpha">Must be only letters</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Email"
                                        label-for="email"
                                        :state="!$v.user.UserEmail.$error">
                            <b-form-input id="email" :state="$v.user.UserEmail.$error?false:null" v-model.trim="user.UserEmail" placeholder="Enter Email" @blur.native="$v.user.UserEmail.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="$v.user.UserEmail.$error && !$v.user.UserEmail.required">Required</div>
                            <div class="invalid-feedback d-block" v-else-if="!$v.user.UserEmail.email">Must be email</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Phone"
                                        label-for="phone"
                                        :state="!$v.user.UserPhone.$error">
                            <b-form-input id="phone" :state="$v.user.UserPhone.$error?false:null" v-model.trim="user.UserPhone" placeholder="Enter Phone" @blur.native="$v.user.UserPhone.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="$v.user.UserPhone.$error && !$v.user.UserPhone.required">Required</div>
                            <div class="invalid-feedback d-block" v-else-if="!$v.user.UserPhone.numeric">Must be only numbers</div>
                            <div class="invalid-feedback d-block" v-else-if="!$v.user.UserPhone.minLength">Must have atleast {{ $v.user.UserPhone.$params.minLength.min}} numbers</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Address"
                                        label-for="address"
                                        :state="!$v.user.UserAddress.$error">
                            <b-form-input id="address" :state="$v.user.UserAddress.$error?false:null" v-model.trim="user.UserAddress" placeholder="Enter Address" @blur.native="$v.user.UserAddress.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="$v.user.UserAddress.$error && !$v.user.UserAddress.required">Required</div>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserAddress.maxLength">Must not exceed {{ $v.user.UserAddress.$params.maxLength.max}} letters</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Address 2"
                                        label-for="address2"
                                        :state="!$v.user.UserAddress2.$error">
                            <b-form-input id="address2" :state="$v.user.UserAddress2.$error?false:null" v-model.trim="user.UserAddress2" placeholder="Enter Address 2" @blur.native="$v.user.UserAddress.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserAddress2.maxLength">Must not exceed {{ $v.user.UserAddress2.$params.maxLength.max}} letters</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Country"
                                        label-for="country"
                                        :state="!$v.user.UserCountry.$error">
                            <b-form-select v-model.trim="user.UserCountry" id="country" :state="$v.user.UserCountry.$error?false:null" @change="$v.user.UserAddress.$touch">
                              <option :value="null">Please select country</option>
                              <option v-for="country in countries" :value="country.name">{{ country.name }}</option>
                            </b-form-select>
                            <div class="invalid-feedback d-block" v-if="$v.user.UserCountry.$error && !$v.user.UserCountry.required">Required</div>
                            <!-- <div class="invalid-feedback d-block" v-if="user.UserCountry===null">Required</div> -->
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserCountry.maxLength">Must not exceed {{ $v.user.UserCountry.$params.maxLength.max}} letters</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="State"
                                        label-for="state"
                                        :state="!$v.user.UserState.$error">
                            <b-form-input id="state" :state="$v.user.UserState.$error?false:null" v-model.trim="user.UserState" placeholder="Enter State" @blur.native="$v.user.UserState.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="$v.user.UserState.$error && !$v.user.UserState.required">Required</div>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserState.maxLength">Must not exceed {{ $v.user.UserState.$params.maxLength.max}} letters</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="City"
                                        label-for="city"
                                        :state="!$v.user.UserCity.$error">
                            <b-form-input id="city" :state="$v.user.UserCity.$error?false:null" v-model.trim="user.UserCity" placeholder="Enter City" @blur.native="$v.user.UserCity.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="$v.user.UserCity.$error && !$v.user.UserCity.required">Required</div>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserCity.maxLength">Must not exceed {{ $v.user.UserCity.$params.maxLength.max}} letters</div>
                          </b-form-group>
                        </b-col>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Zip"
                                        label-for="zip"
                                        :state="!$v.user.UserZip.$error">
                            <b-form-input id="zip" :state="$v.user.UserZip.$error?false:null" v-model.trim="user.UserZip" placeholder="Enter Zip Code" @blur.native="$v.user.UserPhone.$touch"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserZip.minLength">Must have atleast {{ $v.user.UserZip.$params.minLength.min}} numbers</div>
                            <div class="invalid-feedback d-block" v-else-if="!$v.user.UserZip.maxLength">Must not exceed {{ $v.user.UserZip.$params.maxLength.max}} numbers</div>
                            <div class="invalid-feedback d-block" v-else-if="!$v.user.UserZip.numeric">Must be only numbers</div>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-form>

                  </b-card-body>
                  <b-card-footer>
                    <b-btn class="float-left" variant="primary" >Reset</b-btn>
                    <b-btn class="float-right" variant="primary" @click="checkForm">Next</b-btn>
                    <div class="clearfix"></div>
                  </b-card-footer>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="secondary" ref="step2" :disabled="$v.user.$invalid">Step 2: Payment Methods</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel" style="text-align:left">
                  <b-card-body>
                    <b-row>
                      <b-col sm="6">
                        <b-form-group label="Available Payment Options">
                              <b-form-radio-group v-model="paymentMethods"
                                                  :options="paymentOptions"
                                                  stacked
                                                  name="radiosStacked">
                              </b-form-radio-group>
                        </b-form-group>
                      </b-col>
                      <b-col sm="6">
                        <p>In order to get the details of bank transfer and to complete your transaction:</p>
                        <p v-if="paymentMethods==='bt'">Please contact <a href="mailto:info@eshopper.com">info@eshopper.com</a></p>
                      </b-col>
                    </b-row>
                  </b-card-body>
                  <b-card-footer>
                    <p class="float-left">Please select any payment Method</p>
                    <b-btn class="float-right" variant="primary" v-b-toggle.accordion3 @click="step3disabled=false">Next</b-btn>
                    <div class="clearfix"></div>
                  </b-card-footer>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion3 variant="secondary" :disabled="isDisabled">Step 3: Confirm Order</b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card title="Total"
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
                        <b-btn variant="outline-success" block @click="confirmOrder">Confirm Order</b-btn>
                      </div>

                      <div class="payment-methods" slot="footer">
                        <h4>WE ACCEPT:</h4>
                        <ul>
                          <li><img src="@/assets/single.png" alt="payment" class="img-fluid"/></li>
                        </ul>
                      </div>

                    </b-card>

                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import Login from '../login/Index.vue'
import Register from '../register/Index.vue'
const {required, minLength, alpha, numeric, maxLength, email} = require('vuelidate/lib/validators')
// import Item from './Item.vue'
// import {Events} from '@/events.js'
export default {
  components: {'login': Login, 'register': Register},
  name: 'Checkout',
  data () {
    return {
      user: {},
      cart: [],
      countries: [],
      step1Toggle: false,
      paymentOptions: [
        { text: 'Bank Transfer', value: 'bt' }
      ],
      paymentMethods: '2',
      breadcrumbItems: [{
        text: 'Home',
        to: {name: 'Home'}
      }, {
        text: 'Cart',
        to: {name: 'Cart'}

      }, {
        text: 'Checkout',
        active: true
      }],
      total: 0,
      step3disabled: true
    }
  },
  validations: {
    user: {
      UserEmail: { required, email },
      UserFirstName: { required, alpha, minLength: minLength(2) },
      UserLastName: { required, alpha, minLength: minLength(2) },
      UserPhone: { required, numeric, minLength: minLength(10) },
      UserAddress: { required, maxLength: maxLength(100) },
      UserAddress2: { maxLength: maxLength(50) },
      UserCountry: { required, maxLength: maxLength(50) },
      UserCity: { required, maxLength: maxLength(90) },
      UserState: { required, maxLength: maxLength(20) },
      UserZip: { required, minLength: minLength(3), maxLength: maxLength(12), numeric }
    }
  },
  computed: {
    isDisabled () {
      if (this.$v.user.$invalid || this.step3disabled) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    confirmOrder () {
      var lastProductID = this.cart[this.cart.length - 1].ProductID
      this.cart.forEach(item => {
        var tax = (parseInt(item.ProductPrice) * 13) / 100
        console.log(tax)
        var body = {
          'amount': item.itemCount,
          'shipAddress': this.user.UserAddress,
          'shipAddress2': this.user.UserAddress2,
          'city': this.user.UserCity,
          'state': this.user.UserState,
          'zip': this.user.UserZip,
          'phone': this.user.UserPhone,
          'country': this.user.UserCountry,
          'tax': tax,
          'email': this.user.UserEmail,
          'paymentId': this.paymentMethods,
          'productId': item.ProductID
        }
        this.$http.post(this.API_ENDPOINT + '/api/v1/order', body, {headers: { 'Content-Type': 'application/json' }}).then(response => {
          if (item.ProductID === lastProductID) {
            console.log(lastProductID)
            window.sessionStorage.setItem('cartProducts', JSON.stringify([]))
            this.$store.state.cartItems = []
            window.location.href = '/'
          }
        }).catch(error => {
          console.log('this is an error ', error.response)
        })
      })
    },
    calculateTotal () {
      var total = 0
      this.cart.forEach(item => {
        total = total + (item.ProductPrice * item.itemCount)
      })
      this.total = total
    },
    checkForm () {
      if (this.$v.$invalid) {
        this.$v.user.$touch()
      } else {
        this.$refs.step2.click()
      }
    },
    getMemberInfo () {
      this.$http.get(this.API_ENDPOINT + '/api/v1/member', {headers: { 'Content-Type': 'application/json' }}).then(response => {
        console.log(response)
        this.user = response.data
      }).catch(error => {
        console.log('this is an error ', error.response)
      })
    },
    getCountriesList () {
      this.$http.get('https://restcountries.eu/rest/v1/all').then(response => {
        this.countries = response.data
      })
    },
    getPaymentMethods () {
      this.$http.get(this.API_ENDPOINT + '/api/v1/payment', {headers: { 'Content-Type': 'application/json' }}).then(response => {
        console.log(response)
        var paymentMethod = []
        response.data.data.forEach(item => {
          var temp = { text: item.PaymentType, value: item.PaymentID }
          paymentMethod.push(temp)
        })
        this.paymentOptions = paymentMethod
      }).catch(error => {
        console.log('this is an error ', error.response)
      })
    }
  },
  created () {
    if (this.$store.state.isLoggedIn) {
      var retrived = this.$store.state.cartItems
      this.cart = retrived
      this.getCountriesList()
      this.getMemberInfo()
      this.getPaymentMethods()
      this.calculateTotal()
    }
  },
  beforeCreate () {
    if (this.$store.state.cartItems.length === 0) {
      this.$router.push('/cart')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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

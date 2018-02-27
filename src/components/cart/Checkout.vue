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
      <div v-else>
        <b-row>
          <b-col sm="12">
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion1 variant="info">Step 1</b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>

                    <b-form>
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
                                      label-for="email">
                          <b-form-input id="email" :value="user.UserEmail" disabled></b-form-input>
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
                          <div class="invalid-feedback d-block" v-if="!$v.user.UserPhone.numeric">Must be only numbers</div>
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
                    </b-form>

                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="info">Step 2</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>


                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion3 variant="info">Step 3</b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>


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
const {required, minLength, alpha, numeric, maxLength} = require('vuelidate/lib/validators')
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
      breadcrumbItems: [{
        text: 'Home',
        to: {name: 'Home'}
      }, {
        text: 'Cart',
        to: {name: 'Cart'}

      }, {
        text: 'Checkout',
        active: true
      }]
    }
  },
  validations: {
    user: {
      UserFirstName: { required, alpha, minLength: minLength(2) },
      UserLastName: { required, alpha, minLength: minLength(2) },
      UserPhone: { numeric, minLength: minLength(10) },
      UserAddress: { required, maxLength: maxLength(100) },
      UserAddress2: { maxLength: maxLength(50) },
      UserCountry: { required, maxLength: maxLength(50) },
      UserCity: { required, maxLength: maxLength(90) },
      UserState: { required, maxLength: maxLength(20) },
      UserZip: { minLength: minLength(3), maxLength: maxLength(12), numeric }
    }
  },
  methods: {
    getMemberInfo () {
      this.$http.get('/api/v1/member', {headers: { 'Content-Type': 'application/json' }}).then(response => {
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
    }
  },
  created () {
    if (this.$store.state.isLoggedIn) {
      this.getCountriesList()
      this.getMemberInfo()
      var retrived = this.$store.state.cartItems
      this.cart = retrived
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

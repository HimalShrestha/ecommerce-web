<template>
  <!--eslint-disable-->
  <div>
    <section id="form"><!--form-->
      <b-container>
        <b-row>
          <b-col sm="12">
            <div class="user-detail"><!--login form-->
              <b-card no-body>
                <b-tabs card>
                  <b-tab title="<i class='fas fa-sign-in-alt'></i> Account" active title-item-class="w-50 size-change">
                    <b-form>
                      <b-row>
                        <b-col sm="6">
                          <b-form-group horizontal
                                        :label-cols="4"
                                        breakpoint="md"
                                        label="Firstname"
                                        label-for="fname"
                                        :state="!$v.user.UserFirstName.$error">
                            <b-form-input id="fname" :state="$v.user.UserFirstName.$error?false:null" v-model.trim="user.UserFirstName" placeholder="Enter Firstname" @blur.native="$v.user.UserFirstName.$touch" @input.native="changeTouched"></b-form-input>
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
                            <b-form-input id="lname" :state="$v.user.UserLastName.$error?false:null" v-model.trim="user.UserLastName" placeholder="Enter Lastname" @blur.native="$v.user.UserLastName.$touch" @input.native="changeTouched"></b-form-input>
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
                            <b-form-input id="phone" :state="$v.user.UserPhone.$error?false:null" v-model.trim="user.UserPhone" placeholder="Enter Phone" @blur.native="$v.user.UserPhone.$touch" @input.native="changeTouched"></b-form-input>
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
                            <b-form-input id="address" :state="$v.user.UserAddress.$error?false:null" v-model.trim="user.UserAddress" placeholder="Enter Address" @blur.native="$v.user.UserAddress.$touch" @input.native="changeTouched"></b-form-input>
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
                            <b-form-input id="address2" :state="$v.user.UserAddress2.$error?false:null" v-model.trim="user.UserAddress2" placeholder="Enter Address 2" @blur.native="$v.user.UserAddress.$touch" @input.native="changeTouched"></b-form-input>
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
                            <b-form-select v-model.trim="user.UserCountry" id="country" :state="$v.user.UserCountry.$error?false:null" @change="$v.user.UserAddress.$touch" @input.native="changeTouched">
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
                            <b-form-input id="state" :state="$v.user.UserState.$error?false:null" v-model.trim="user.UserState" placeholder="Enter State" @blur.native="$v.user.UserState.$touch" @input.native="changeTouched"></b-form-input>
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
                            <b-form-input id="city" :state="$v.user.UserCity.$error?false:null" v-model.trim="user.UserCity" placeholder="Enter City" @blur.native="$v.user.UserCity.$touch" @input.native="changeTouched"></b-form-input>
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
                            <b-form-input id="zip" :state="$v.user.UserZip.$error?false:null" v-model.trim="user.UserZip" placeholder="Enter Zip Code" @blur.native="$v.user.UserPhone.$touch" @input.native="changeTouched"></b-form-input>
                            <div class="invalid-feedback d-block" v-if="!$v.user.UserZip.minLength">Must have atleast {{ $v.user.UserZip.$params.minLength.min}} numbers</div>
                            <div class="invalid-feedback d-block" v-else-if="!$v.user.UserZip.maxLength">Must not exceed {{ $v.user.UserZip.$params.maxLength.max}} numbers</div>
                            <div class="invalid-feedback d-block" v-else-if="!$v.user.UserZip.numeric">Must be only numbers</div>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="3"></b-col>
                        <b-col sm="6">
                          <b-btn type="button" @click="updateDetails" block class="mt-3" variant="outline-primary" :disabled="!inputTouched">Update</b-btn>
                        </b-col>
                      </b-row>
                    </b-form>
                  </b-tab>
                  <b-tab title="<i class='fas fa-user'></i> Transactions" title-item-class="w-50 size-change">
                    <b-table hover outlined stacked="md" :items="transactionInfo" :fields="transactionFields">
                      <template slot="index" slot-scope="data">
                        {{data.index + 1}}
                      </template>
                    </b-table>
                  </b-tab>
                </b-tabs>
              </b-card>
            </div><!--/login form-->
          </b-col>
        </b-row>
        <b-modal ref="success" hide-footer centered size="sm">
        <div class="d-block text-center">
          <i class="far fa-check-circle text-primary" style="font-size:3rem"></i>
          <h3 style="margin-top:30px;font-size:1rem;font-weight:300;">Your information is updated</h3>
        </div>
      </b-modal>
      </b-container>
    </section><!--/form-->
  </div>
</template>

<script>
const {required, minLength, alpha, numeric, maxLength} = require('vuelidate/lib/validators')
export default {
  name: 'Account',
  data () {
    return {
      user: {},
      countries: [],
      inputTouched: false,
      transactionInfo: [],
      transactionFields: [
        {
          key: 'index',
          label: 'SN',
          sortable: false
        },
        {
          key: 'ProductName',
          label: 'Product',
          sortable: false
        },
        {
          key: 'ProductPrice',
          label: 'Price',
          sortable: true
        },
        {
          key: 'OrderAmount',
          label: 'No of Orders',
          sortable: true
        },
        {
          key: 'OrderDate',
          label: 'Date',
          sortable: true
        },
        {
          key: 'TotalPrice',
          label: 'Total Price',
          sortable: true
        }
      ]
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
    changeTouched () {
      this.inputTouched = true
    },
    showModal () {
      this.$refs.success.show()
    },
    hideModal () {
      this.$refs.success.hide()
    },
    updateDetails () {
      if (this.$v.$invalid) {
        this.$v.user.$touch()
      } else if (this.$store.state.isLoggedIn) {
        console.log('form subbmited')
        var body = {
          'fname': this.user.UserFirstName,
          'lname': this.user.UserLastName,
          'city': this.user.UserCity,
          'state': this.user.UserState,
          'zip': this.user.UserZip,
          'phone': this.user.UserPhone,
          'country': this.user.UserCountry,
          'address': this.user.UserAddress,
          'address2': this.user.UserAddress2,
          'status': this.user.UserStatus,
          'role': this.user.UserRole
        }
        var id = this.$store.state.userId
        this.$http.put(this.API_ENDPOINT + '/api/v1/member/update/' + id, body, {headers: { 'Content-Type': 'application/json' }}).then(response => {
          console.log(response)
          if (response.data.code === 'Success') {
            this.showModal()
          }
        }).catch(error => {
          console.log('this is an error ', error.response)
        })
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
    getTransactionInfo () {
      this.$http.get(this.API_ENDPOINT + '/api/v1/order/transaction', {headers: { 'Content-Type': 'application/json' }}).then(response => {
        console.log(response)
        response.data.forEach(item => {
          item.OrderDate = item.OrderDate.substring(0, 19).replace('T', ' ')
        })
        this.transactionInfo = response.data
      }).catch(error => {
        console.log('this is an error ', error.response)
      })
    }
  },
  created () {
    this.getMemberInfo()
    this.getCountriesList()
    this.getTransactionInfo()
  },
  beforeCreate () {
    this.$http.get(this.API_ENDPOINT + '/api/v1/auth/checkLogin', {headers: { 'Content-Type': 'application/json' }}).then(response => {
      if (response.data === null) {
        this.$router.push('/')
      }
    }).catch(err => {
      console.log('this is an error ', err)
    })
  },
  props: ['checkout']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#form{
  display: block;
  margin-bottom: 85px;
  margin-top: 85px;
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
  // button{
  //   background: #FE980F;
  // border: medium none;
  // border-radius: 0;
  // color: #FFFFFF;
  // display: block;
  // padding: 6px 25px;
  // }
}

</style>

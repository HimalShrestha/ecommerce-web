<template>
  <!--eslint-disable-->
  <div>
    <section id="form"><!--form-->
      <b-container>
        <b-row>
          <b-col sm="6" offset-sm="3">
            <div class="register-form"><!--login form-->
              <h2>Register an Account</h2>
              <b-form @submit="register">
                <b-form-group
                    :state="!$v.email.$error"
                >
                  <b-form-input
                        :state="$v.email.$error?false:null || emailInUse?false:null"
                        type="email"
                        v-model.trim="email"
                        placeholder="Enter your email"
                        @input="$v.email.$touch"
                        @keyup.native="resetEmailInUse">
                  </b-form-input>
                  <div class="invalid-feedback d-block" v-if="emailInUse">Email already in use, choose another email</div>
                  <div class="invalid-feedback d-block" v-if="!$v.email.email">Must be email</div>
                  <div class="invalid-feedback d-block" v-if="$v.email.$error && !$v.email.required">Required</div>
                </b-form-group>
                <b-form-group
                    :state="!$v.firstName.$error"
                >
                  <b-form-input
                        :state="$v.firstName.$error?false:null"
                        type="text"
                        v-model.trim="firstName"
                        placeholder="Enter your first name"
                        @input="$v.firstName.$touch">
                  </b-form-input>
                  <div class="invalid-feedback d-block" v-if="!$v.firstName.minLength">Must have atleast {{ $v.firstName.$params.minLength.min}} letters</div>
                  <div class="invalid-feedback d-block" v-if="!$v.firstName.alpha">Must be alpha</div>
                  <div class="invalid-feedback d-block" v-if="$v.firstName.$error && !$v.firstName.required">Required</div>
                </b-form-group>
                <b-form-group
                    :state="!$v.lastName.$error"
                >
                  <b-form-input
                        :state="$v.lastName.$error?false:null"
                        type="text"
                        v-model.trim="lastName"
                        placeholder="Enter your last name"
                        @input="$v.lastName.$touch">
                  </b-form-input>
                  <div class="invalid-feedback d-block" v-if="!$v.lastName.minLength">Must have atleast {{ $v.lastName.$params.minLength.min}} letters</div>
                  <div class="invalid-feedback d-block" v-if="!$v.lastName.alpha">Must be alpha</div>
                  <div class="invalid-feedback d-block" v-if="$v.lastName.$error && !$v.lastName.required">Required</div>
                </b-form-group>
                <b-form-group
                    :state="!$v.password.$error"
                >
                  <b-form-input
                        :state="$v.password.$error?false:null"
                        type="password"
                        v-model.trim="password"
                        placeholder="Enter a password"
                        @input="$v.password.$touch">
                  </b-form-input>
                  <div class="invalid-feedback d-block" v-if="!$v.password.minLength">Must have atleast {{ $v.password.$params.minLength.min}} letters</div>
                  <div class="invalid-feedback d-block" v-if="$v.password.$error && !$v.password.required">Required</div>
                </b-form-group>
                <b-form-group
                    :state="!$v.confirmPassword.$error"
                >
                  <b-form-input
                        :state="$v.confirmPassword.$error?false:null"
                        type="password"
                        v-model.trim="confirmPassword"
                        placeholder="Confirm password"
                        @input="$v.confirmPassword.$touch">
                  </b-form-input>
                  <div class="invalid-feedback d-block" v-if="$v.confirmPassword.$error && !$v.confirmPassword.sameAs">Must be same as Password</div>
                  <div class="invalid-feedback d-block" v-if="$v.confirmPassword.$error && !$v.confirmPassword.required">Required</div>
                </b-form-group>
                <b-btn type="submit" :disabled="$v.$invalid" block class="mt-3" variant="outline-primary">Register</b-btn>
              </b-form>
            </div><!--/login form-->
          </b-col>
        </b-row>
      </b-container>
    </section><!--/form-->
  </div>
</template>

<script>
const { required, email, minLength, alpha, sameAs } = require('vuelidate/lib/validators')
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      emailInUse: null
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, sameAs: sameAs('password') },
    firstName: { required, alpha, minLength: minLength(2) },
    lastName: { required, alpha, minLength: minLength(2) }
  },
  methods: {
    register (event) {
      event.preventDefault()
      this.$http.post('/api/v1/member/register', {username: this.email, password: this.password, fname: this.firstName, lname: this.lastName}, {headers: { 'Content-Type': 'application/json' }}).then(response => {
        console.log('success')
        if (this.checkout === 'checkout') {
          this.$router.go('/')
        } else {
          this.$router.push('/login')
        }
        // window.location.href = '/login'
      }).catch(error => {
        console.log('this is an error ', error.response)
        // console.log(error.response.data.errors['username'])
        Object.keys(error.response.data.errors)
          .filter(field => {
            if (error.response.data.errors[field].msg === 'username.exists') {
              this.emailInUse = true
            }
            console.log('field', error.response.data.errors[field].msg)
          })
      })
    },
    resetEmailInUse () {
      this.emailInUse = null
    }

  },
  created () {
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

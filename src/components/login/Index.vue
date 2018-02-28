<template>
  <!--eslint-disable-->
  <div>
    <section id="form"><!--form-->
      <b-container>
        <b-row>
          <b-col sm="6" offset-sm="3">
            <div class="login-form"><!--login form-->
              <h2>Login to your account</h2>
              <b-form @submit="login" :validated="false">
                <b-form-group
                    :invalid-feedback="invalid.username"
                    :state="state.username"
                >
                  <b-form-input
                        :state="state.username"
                        type="email"
                        v-model.trim="username"
                        placeholder="Enter email"
                        required
                        @keyup.native="resetValidation('user')">
                  </b-form-input>
                </b-form-group>
                <b-form-group
                    :invalid-feedback="invalid.password"
                    :state="state.password"
                >
                  <b-form-input
                        :state="state.password"
                        type="password"
                        v-model="password"
                        required
                        placeholder="Enter Password"
                        @keyup.native="resetValidation('pass')">
                  </b-form-input>
                </b-form-group>
                <b-form-checkbox-group v-model="keepSignedIn">
                  <b-form-checkbox value="me">Keep me logged in</b-form-checkbox>
                </b-form-checkbox-group>
                <b-btn type="submit" block class="mt-3" variant="outline-primary">Login</b-btn>
              </b-form>
            </div><!--/login form-->
          </b-col>
        </b-row>
      </b-container>
    </section><!--/form-->
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      keepSignedIn: '',
      state: {
        username: null,
        password: null
      },
      invalid: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login (event) {
      event.preventDefault()
      this.$http.post(this.API_ENDPOINT + '/api/v1/auth/login/user', {username: this.username, password: this.password}, {headers: { 'Content-Type': 'application/json' }}).then(response => {
        if (this.checkout === 'checkout') {
          this.$router.go('/')
        } else {
          window.location.href = '/'
        }
      }).catch(error => {
        console.log('this is an error ', error.response)
        if (error.response.data.error[0] === 'Incorrect username.') {
          this.invalid.username = error.response.data.error[0]
          this.state.username = false
        } else if (error.response.data.error[0] === 'Incorrect password.') {
          this.invalid.password = error.response.data.error[0]
          this.state.password = false
        } else {
          console.log('something else is wrong')
        }
      })
    },
    resetValidation (field) {
      if (field === 'user') {
        this.state.username = null
      } else if (field === 'pass') {
        this.state.password = null
      }
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

<template>
  <!--eslint-disable-->
  <div>
    <div id="contact-page" class="container">
     	<div class="bg">
 	    	<div class="row">
 	    		<div class="col-sm-12">
 					<h2 class="title text-center">Contact <strong>Us</strong></h2>
 					<b-card style="margin:20px 0px;">
            <h2 style="margin:50px 0px;">PlaceHolder for Map</h2>
          </b-card>
 				</div>
 			</div>
     		<div class="row">
 	    		<div class="col-sm-7">
 	    			<div class="contact-form">
 	    				<h2 class="title text-center">Get In Touch</h2>
 	    				<div class="status alert alert-success" style="display: none"></div>
 				    	<b-form>
                <b-form-group
                  :state="!$v.name.$error"
                >
                <b-form-input :state="$v.name.$error?false:null" v-model.trim="name" placeholder="Name" type="text" @blur.native="$v.name.$touch"></b-form-input>
                <div class="invalid-feedback d-block" v-if="!$v.name.required && $v.name.$error">Required</div>
                <div class="invalid-feedback d-block" v-else-if="!$v.name.minLength && $v.name.$error">Must have atleast {{ $v.name.$params.minLength.min}} letters</div>
                <div class="invalid-feedback d-block" v-else-if="!$v.name.maxLength && $v.name.$error">Must not exceed {{ $v.name.$params.maxLength.max}} letters</div>
                </b-form-group>
                <b-form-group
                  :state="!$v.email.$error"
                >
                <b-form-input :state="$v.email.$error?false:null" v-model.trim="email" placeholder="Email" type="email" @blur.native="$v.email.$touch"></b-form-input>
                <div class="invalid-feedback d-block" v-if="!$v.email.required && $v.email.$error">Required</div>
                <div class="invalid-feedback d-block" v-else-if="!$v.email.email && $v.email.$error">Must be valid email</div>
                </b-form-group>
                <b-form-group
                  :state="!$v.subject.$error"
                >
                <b-form-input :state="$v.subject.$error?false:null" v-model.trim="subject" placeholder="Subject" type="text" @blur.native="$v.subject.$touch"></b-form-input>
                <div class="invalid-feedback d-block" v-if="!$v.subject.required && $v.subject.$error">Required</div>
                <div class="invalid-feedback d-block" v-else-if="!$v.subject.minLength && $v.subject.$error">Must have atleast {{ $v.subject.$params.minLength.min}} letters</div>
                <div class="invalid-feedback d-block" v-else-if="!$v.subject.maxLength && $v.subject.$error">Must not exceed {{ $v.subject.$params.maxLength.max}} letters</div>
                </b-form-group>
                <b-form-group
                  :state="!$v.message.$error"
                >
                  <b-form-textarea
                       v-model="message"
                       placeholder="Your message..."
                       :rows="8"
                       :max-rows="12"
                       :state="$v.message.$error?false:null"
                       @blur.native="$v.message.$touch">
                  </b-form-textarea>
                  <div class="invalid-feedback d-block" v-if="!$v.message.required && $v.message.$error">Required</div>
                  <div class="invalid-feedback d-block" v-else-if="!$v.message.minLength && $v.message.$error">Must have atleast {{ $v.message.$params.minLength.min}} letters</div>
                  <div class="invalid-feedback d-block" v-else-if="!$v.message.maxLength && $v.message.$error">Must not exceed {{ $v.message.$params.maxLength.max}} letters</div>
                </b-form-group>
                <b-button block variant="outline-primary" @click="sendMessage" style="margin-bottom:50px;">
                  Send
                </b-button>
 				        </b-form>
 	    			</div>
 	    		</div>
 	    		<div class="col-sm-5">
 	    			<div class="contact-info">
 	    				<h2 class="title text-center">Contact Info</h2>
 	    				<address>
 	    					<h5>E-Shopper Inc.</h5>
   							<p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
   							<p>Newyork USA</p>
   							<p><span class="small-title">Mobile:</span> +2346 17 38 93</p>
   							<p><span class="small-title">Fax:</span> 1-714-252-0026</p>
   							<p><span class="small-title">Email:</span> info@e-shopper.com</p>
 	    				</address>
 	    				<div class="social-networks">
 	    					<h2 class="title text-center">Social Networking</h2>
 							<ul>
 								<li>
 									<a href="#"><i class="fab fa-facebook-f"></i></a>
 								</li>
 								<li>
 									<a href="#"><i class="fab fa-twitter"></i></a>
 								</li>
 								<li>
 									<a href="#"><i class="fab fa-google-plus"></i></a>
 								</li>
 								<li>
 									<a href="#"><i class="fab fa-youtube"></i></a>
 								</li>
 							</ul>
 	    				</div>
 	    			</div>
     			</div>
 	    	</div>
     	</div>
     </div><!--/#contact-page-->

  </div>
</template>

<script>
// import Item from './Item.vue'
// import {Events} from '@/events.js'
const {required, minLength, alpha, email, maxLength} = require('vuelidate/lib/validators')

export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  validations: {
    name: { required, alpha, minLength: minLength(2), maxLength: maxLength(45) },
    email: { required, email },
    subject: { required, maxLength: maxLength(150), minLength: minLength(2) },
    message: { required, maxLength: maxLength(500), minLength: minLength(2) }
  },
  methods: {
    sendMessage () {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        var body = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        }
        this.$http.post(this.API_ENDPOINT + '/api/v1/message/', body, {headers: { 'Content-Type': 'application/json' }}).then(response => {
          console.log(response)
          if (response.data.code === 'Success') {
            window.alert('done')
          }
        }).catch(error => {
          console.log('this is an error ', error.response)
        })
      }
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.social-networks{
  ul{
    list-style: none;
    margin:0;
    padding:0;
    li{
    margin-bottom: 10px;
    padding:10px;
    display:inline-block;
    }
  }
}


</style>

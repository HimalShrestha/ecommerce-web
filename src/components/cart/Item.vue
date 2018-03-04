<template>
  <!--eslint-disable-->
	<div style="text-align:left;">
		<b-row>
			<b-col sm="3" xs="6">
				<a href="#" @click="$router.push(`/product/${itemProp.ProductID}`)" class="image-cont"><img :src="API_ENDPOINT+'/api/v1/product/image/'+itemProp.ProductID" alt="" style="width:100%;"></a>
			</b-col>
			<b-col sm="9" xs="6">
				<a href="#" class="cart_quantity_delete float-right" @click="removeItem"><i class="fa fa-times"></i></a>
				<p class="cart_price">{{this.$store.state.currency}}{{itemProp.ProductPrice}}</p>
				<h4><a href="#" @click="$router.push(`/product/${itemProp.ProductID}`)">{{itemProp.ProductName}}</a></h4>
				<p>{{itemProp.ProductCartDesc}}</p>
				<div class="cart_quantity_button">
					<a class="cart_quantity_down" @click="decrementItem"> - </a>
					<input class="cart_quantity_input" type="text" name="quantity" v-model="updatedValue" autocomplete="off" size="2" disabled style="text-align:center;">
					<a class="cart_quantity_up" @click="incrementItem"> + </a>
				</div>
				<p><span style="text-decoration:underline;">Sub-total:</span> <span class="cart_total_price">{{this.$store.state.currency}}{{updatedValue * itemProp.ProductPrice}}</span> </p>
			</b-col>
		</b-row>
		<hr/>
	</div>
</template>

<script>
export default {
  name: 'Item',
  data () {
    return {
      updatedValue: 1
    }
  },
  methods: {
    incrementItem () {
      if (this.updatedValue > 99) {
        return false
      } else {
        this.updatedValue += 1
        this.itemProp.itemCount += 1
      }
      this.$emit('updateTotal')
    },
    decrementItem () {
      if (this.updatedValue < 2) {
        return false
      } else {
        this.updatedValue -= 1
        this.itemProp.itemCount -= 1
      }
      this.$emit('updateTotal')
    },
    removeItem () {
      this.$emit('remove', this.itemProp.ProductID)
    }
  },
  created () {
  },
  props: ['itemProp']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-cont{
display:block;
}
.cart_price{
color: #2d2d2d;
font-style: normal;
font-weight: 700;
padding: 0 .3em 0 0;
font-size:1.5em;
}
.cart_quantity_button{
user-select:none;
-webkit-user-select:none;
a{
display: inline-block;
padding:10px;
cursor:pointer;
font-weight: 900;
font-size: 1.2em;
}
}
.cart_total_price{
font-size: 1.2em;
font-weight: 900;
}
.cart_quantity_delete{
font-size: 1.6em;
}
</style>

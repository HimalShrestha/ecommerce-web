<template>
  <!--eslint-disable-->
	<tr>
		<td class="cart_product">
			<a href=""><img :src="API_ENDPOINT+'/api/v1/product/image/'+itemProp.ProductID" alt=""></a>
		</td>
		<td class="cart_description">
			<h4><a href="">{{itemProp.ProductName}}</a></h4>
			<p>{{itemProp.ProductCartDesc}}</p>
		</td>
		<td class="cart_price">
			<p>{{itemProp.ProductPrice}}</p>
		</td>
		<td class="cart_quantity">
			<div class="cart_quantity_button">
        <a class="cart_quantity_down" @click="decrementItem"> - </a>
				<input class="cart_quantity_input" type="text" name="quantity" v-model="updatedValue" autocomplete="off" size="2" disabled>
				<a class="cart_quantity_up" @click="incrementItem"> + </a>
			</div>
		</td>
		<td class="cart_total">
			<p class="cart_total_price">{{updatedValue * itemProp.ProductPrice}}</p>
		</td>
		<td class="cart_delete">
			<a class="cart_quantity_delete" @click="removeItem"><i class="fa fa-times"></i></a>
		</td>
	</tr>
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

<template>
  <div class="order">
		<div class="menu">
			<div class="item_container" v-for="(order, index) in orders" :key="index" >
				<div class="item_header">
					<div class="item_detail">
						<div class="name">{{order.name}}${{order.count}}</div>
						<img :src="order.imgUrl" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="type">
			<input type="radio" id="radio" value="radio" v-model="msg">
			<label for="radio">radio</label>
			<input type="radio" id="selects" value="selects" v-model="msg">
			<label for="selects">selects</label>
			<input type="radio" id="texts" value="texts" v-model="msg">
			<label for="texts">texts</label>
		</div>
		<div class="odrty">
			<ordertype :orderstyle="msg"/>
		</div>
  </div>

</template>

<script>
import { mapState , mapActions } from 'vuex';
import ordertype from './ordertype'

export default {
  components:{
    ordertype,
  },
	data() {
    return {
      msg :'radio',
    }
  },
	computed: {
    ...mapState(['orders']),
  },
  methods:{
    ...mapActions(['axiosorders']),
  },
  mounted(){
    this.axiosorders();
  },
}
</script>

<style scoped lang="scss">

.order {
	.type{
		position: relative;
		top: 50%;
		left: 40%;
		label{
			font-size: 30px;
		}
	}
	.menu {
		display:  flex;
		width: 100%;
		align-content: space-between;
		flex-wrap: wrap;
		.item_container {
			width: 25%;
			justify-content: center;
			align-items: center;
			.name{
				position: relative;
				left: 25%;
				font-size: 20px;
			}
			img {
				height: 250px;
				width: 80%;
				margin-left: 20px;
			}
		}
	}
	.odrty{
		position: relative;
		top: 50%;
		left: 40%;
		margin-top: 30px;
		margin-bottom: 70px;
	}
}

</style>


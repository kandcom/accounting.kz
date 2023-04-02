<template>
	<div class="product" :class="className">
		<img class="product__image" :src="img" />
		<h3 class="product__text product__item_offset">{{ name }}</h3>
		<p class="product__text">{{ price }} тенге</p>
		<input
			:disabled="userStore.pay"
			:max="quantity"
			min="0"
			class="product__input"
			type="number"
			:value="count"
			@change="event => moreLess(event.target.value)"
		/>
		<p class="product__text">{{ getAmountPrice }} тенге</p>
		<button class="product__btn" @click="userStore.deleteById(id)">
			Удалить
		</button>
	</div>
</template>
<script>
import { useUserStore } from '@/stores/userStore'
export default {
	props: ['img', 'name', 'price', 'count', 'className', 'id', 'quantity'],
	methods: {
		moreLess(value) {
			this.userStore.addRemoveToBasket(this.id, this.count < value)
		},
	},
	data() {
		return {
			userStore: useUserStore(),
		}
	},
	computed: {
		getAmountPrice() {
			return +this.price * +this.count
		},
	},
}
</script>

<style scoped>
.product {
	padding: 24px;
	border-bottom: 2px solid goldenrod;
}
.product__image {
	width: 200px;
}
.product__text {
	display: flex;
	/* justify-content: center; */
	align-items: center;
}
.product__item_offset {
	grid-column: 2 / 5;
}
.product__input {
	padding: 8px 24px;
	font-size: 16px;
}
.product__btn {
	padding: 8px 16px;
	border-radius: 20px;
	background-color: cadetblue;
	font-size: 16px;
	cursor: pointer;
}
</style>

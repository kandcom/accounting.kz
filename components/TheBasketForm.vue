<template>
	<div class="basket-form" v-if="userStore.listGoodsForBuy.length">
		<div class="basket-form__titles basket-form__grid">
			<h3 class="basket-form__title basket-form__item_offset">Номинал</h3>
			<h3 class="basket-form__title">Количество</h3>
			<h3 class="basket-form__title">Сумма</h3>
		</div>
		<AppProductInBasket
			className="basket-form__grid"
			v-for="product of userStore.listGoodsForBuy"
			:key="product.id"
			v-bind="product"
		/>
		<h3>
			Общая сумма: {{ totalAmount }}
			<button className="product__buy" @click="userStore.pay = true">
				Оплатить
			</button>
		</h3>
	</div>
	<h2 v-else>Вы ничего не добавили в корзину, пожалуйста добавьте</h2>
</template>
<script>
import { useUserStore } from '@/stores/userStore'
export default {
	data() {
		return {
			userStore: useUserStore(),
		}
	},
	computed: {
		totalAmount() {
			let total = this.userStore.listGoodsForBuy.reduce((sum, good) => {
				return sum + +good.price * +good.count
			}, 0)
			return total
		},
	},
}
</script>
<style>
.basket-form {
	margin: 24px 0;
}
.basket-form__titles {
	padding: 12px 0;
	border-bottom: 2px solid goldenrod;
}
.basket-form__title {
	margin: 0;
}
.basket-form__grid {
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	gap: 20px;
	align-items: center;
}
.basket-form__item_offset {
	grid-column: 5/6;
}
</style>

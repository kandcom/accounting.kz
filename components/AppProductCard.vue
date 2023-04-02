<template>
	<div class="product">
		<img class="product__image" :src="img" alt="" />
		<div class="product__description">
			<p class="product__name">
				Название товара: <strong>{{ name }}</strong>
			</p>
			<p class="product__name">
				Цена товара: <strong>{{ price }} тенге</strong>
			</p>
			<p>{{ description }}</p>
		</div>
		<div>
			<p>Осталось на складе {{ quantity }}</p>
			<p>Добавлено (шт) в корзину{{ n_order }}</p>
		</div>
		<div class="product__actions">
			<button
				class="product__buy"
				@click="userStore.addRemoveToBasket(id, true)"
			>
				В корзину
			</button>
			<button
				class="product__unlike"
				:class="{ product__like: userStore.favorites.includes(id) }"
				@click="userStore.toggleFavorite(id)"
			></button>
		</div>
	</div>
</template>
<script>
import { useUserStore } from '@/stores/userStore'
export default {
	props: ['id', 'name', 'img', 'description', 'price', 'quantity', 'n_order'],
	data() {
		return {
			userStore: useUserStore(),
		}
	},
}
</script>
<style>
.product {
	padding: 24px;
	border: 1px solid grey;
	border-radius: 4px;
}
.product__image {
	width: 100%;
}
.product__actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.product__buy {
	padding: 8px 16px;
	background-color: #fa7500;
	border: none;
	border-radius: 8px;
	color: #ffffff;
	font-size: 16px;
	transition: all 0.3s ease;
}
.product__buy:hover {
	background-color: #f0904c;
}
.product__unlike {
	padding: 0;
	border: none;
	background: none;
}
.product__unlike::before {
	width: 48px;
	height: 48px;
	display: block;
	content: '';
	background-image: url('../assets/icons/unfavorite.svg');
	background-repeat: no-repeat;
	cursor: pointer;
}

.product__like::before {
	background-image: url('../assets/icons/favorite.svg');
}
</style>

<template>
	<div class="favorite">
		<img class="favorite__image" :src="goodStore.getById(favorite).img" />
		<p class="favorite__description">
			{{ goodStore.getById(favorite).description }}
		</p>
		<div class="favorite__btns">
			<button
				class="favorite__btn favorite__btn_remove"
				@click="userStore.removeFromFavorite(favorite)"
			>
				Удалить из избранного
			</button>
			<button
				:disabled="userStore.pay"
				class="favorite__btn"
				@click="userStore.addRemoveToBasket(favorite, true)"
			>
				Добавить единицу товара в корзину
			</button>
		</div>
	</div>
</template>

<script>
import { useUserStore } from '@/stores/userStore'
import { useGoodsStore } from '@/stores/goodsStore'
export default {
	props: ['favorite'],
	data() {
		return {
			userStore: useUserStore(),
			goodStore: useGoodsStore(),
		}
	},
}
</script>

<style>
.favorite {
	max-width: 1024px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	border-bottom: 2px solid #f9579d;
}
.favorite__image {
	width: 200px;
}
.favorite__description {
	width: 300px;
}
.favorite__btns {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.favorite__btn {
	padding: 8px 16px;
	background-color: #f9579d;
	border: none;
	border-radius: 8px;
	color: #ffffff;
	font-size: 16px;
	transition: all 0.3s ease;
	cursor: pointer;
}
.favorite__btn:hover {
	background-color: #fbaed0;
}
.favorite__btn_remove {
	background-color: #f95757;
}
.favorite__btn_remove:hover {
	background-color: #ffa6a6;
}
</style>

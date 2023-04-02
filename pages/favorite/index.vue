<template>
	<div class="container" v-if="userStore.listFavorites.length">
		<div class="favorite">
			<h3>Изображение</h3>
			<h3>Описание товара</h3>
			<h3>Действия с ним</h3>
		</div>
		<AppFavoriteCard
			v-for="favorite of userStore.listFavorites"
			:favorite="favorite"
			:key="favorite"
		/>
	</div>
	<div v-else class="container">
		<h2>Вы ничего не добавили в раздел "Избранное"</h2>
	</div>
</template>
<script>
import { useUserStore } from '@/stores/userStore'
import { useGoodsStore } from '@/stores/goodsStore'
export default {
	data() {
		return {
			userStore: useUserStore(),
			goodStore: useGoodsStore(),
		}
	},
}
</script>

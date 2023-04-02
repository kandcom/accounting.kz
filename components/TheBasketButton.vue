<template>
	<NuxtLink to="/buy" class="basket">
		{{ userStore.listGoodsForBuy.length }}
	</NuxtLink>
</template>
<script>
import { useUserStore } from '@/stores/userStore'
export default {
	data() {
		return {
			userStore: useUserStore(),
		}
	},
}
</script>

<style scoped>
.basket {
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	background-image: url('../assets/icons/buy.svg');
	background-repeat: no-repeat;
	border: 2px solid transparent;
	text-decoration: none;
	transition: 0.3s ease all;
}
.basket:hover {
	border: 2px solid #00aeef;
	border-radius: 4px;
}
</style>

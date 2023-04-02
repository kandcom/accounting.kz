<template>
	<main class="wrapper">
		<TheAsideMenu />
		<div class="container">
			<section>
				<TheFilterPanel />
			</section>
			<section class="list-goods">
				<AppProductCard
					v-for="product of goodsStore.filteredGoods"
					v-bind="product"
					:key="product.id"
				/>
			</section>
		</div>
	</main>
</template>

<script>
// stores
import { useGoodsStore } from '../stores/goodsStore'

export default {
	data() {
		return {
			goodsStore: useGoodsStore(),
		}
	},
}
</script>
<style scoped lang="css">
.wrapper {
	display: flex;
}
.container {
	width: 100%;
}
.list-goods {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
}
</style>

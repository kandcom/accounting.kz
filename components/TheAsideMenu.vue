<template>
	<nav class="menu-goods">
		<ul class="menu-good__wrap">
			<li
				class="menu-good__item"
				v-for="cat of categories"
				:key="cat.type"
				@click="setCategories(cat.type)"
			>
				{{ cat.name }}
			</li>
		</ul>
	</nav>
</template>
<script>
import { useGoodsStore } from '../stores/goodsStore'
export default {
	data() {
		return {
			categories: [
				{
					type: 'all',
					name: 'Все товары',
				},
				{
					type: 'notebook',
					name: 'Ноутбуки',
				},
				{
					type: 'headphones',
					name: 'Наушники',
				},
				{
					type: 'smartwatch',
					name: 'Умные часы',
				},
			],
			goodsStore: useGoodsStore(),
		}
	},
	methods: {
		setCategories: function (categories) {
			this.goodsStore.filteredByCat(categories)
		},
	},
}
</script>

<style scoped>
.menu-goods {
	width: 250px;
	padding: 0 20px 0 0;
}
.menu-good__wrap {
	padding: 0;
	list-style: none;
}
.menu-good__item {
	padding: 4px 0;
	font-size: 1.2rem;
	border: 1px solid transparent;
	cursor: pointer;
	transition: 0.3s ease-in;
}
.menu-good__item:hover {
	border-bottom: 1px solid black;
}
.menu-good__link {
	color: black;
	text-decoration: none;
}
</style>

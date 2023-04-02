<template>
	<div class="filter-panel">
		<input
			class="filter-panel__input"
			type="text"
			placeholder="Введите имя товара"
			v-model="search"
		/>
		<button class="filter-panel__btn" @click="goodsStore.filteredByCat('all')">
			Все
		</button>
		<button class="filter-panel__btn" @click="goodsStore.expensiveFirst()">
			по возрастанию
		</button>
		<button class="filter-panel__btn" @click="goodsStore.cheapFirst()">
			по убыванию
		</button>
	</div>
</template>
<script>
import { useGoodsStore } from '../stores/goodsStore'
export default {
	data() {
		return {
			goodsStore: useGoodsStore(),
			search: '',
		}
	},
	watch: {
		search(newValue) {
			this.goodsStore.filteredByInput(newValue)
		},
	},
}
</script>

<style scoped>
.filter-panel {
	display: flex;
	justify-content: center;
	align-content: center;
	gap: 20px;
	padding: 16px 0;
}
.filter-panel__input {
	width: 400px;
	padding: 0 16px;
	border: 2px solid #01a2b1;
	border-radius: 20px;
	font-size: 14px;
	transition: all 0.3s ease;
}
.filter-panel__input:hover {
	border: 2px solid rgb(177, 229, 255);
}
.filter-panel__btn {
	padding: 8px 20px;
	background: #fff;
	border: 2px solid #01a2b1;
	border-radius: 20px;
	font-size: 14px;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.3s ease;
}
.filter-panel__btn:hover {
	background: rgb(177, 229, 255);
}
</style>

// import { defineStore } from 'pinia'
// import { useGoodsStore } from './goodsStore'

// export const useFilterStore = defineStore('filterStore', {
// 	state: () => {
// 		const goodsStore = useGoodsStore()
// 		const goodsAfterFilter = goodsStore.goods

// 		return {
// 			goodsAfterFilter,
// 			goodsStore,
// 		}
// 	},
// 	getters: {
// 		filteredGoods() {
// 			console.log(' this.goodsAfterFilter', this.goodsAfterFilter)
// 			return this.goodsAfterFilter
// 		},
// 	},
// 	actions: {
// 		filteredByCat(category) {
// 			this.goodsAfterFilter = this.goodsStore.goods
// 			if (category !== 'all')
// 				this.goodsAfterFilter = this.goodsAfterFilter.filter(
// 					good => good.category === category
// 				)
// 		},
// 		expensiveFirst() {
// 			this.goodsAfterFilter = this.goodsAfterFilter.sort((first, second) =>
// 				Number(first.price) < Number(second.price) ? 1 : -1
// 			)
// 		},
// 		cheapFirst() {
// 			this.goodsAfterFilter = this.goodsAfterFilter.sort((first, second) =>
// 				+first.price > +second.price ? 1 : -1
// 			)
// 		},
// 	},
// })

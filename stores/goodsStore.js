import { defineStore } from 'pinia'
import goodsJSON from '../items.json'
export const useGoodsStore = defineStore('goodsStore', {
	state: () => ({
		initialStore: goodsJSON,
		filteredStore: goodsJSON,
		cat: 'all',
	}),
	getters: {
		filteredGoods() {
			return this.filteredStore
		},
	},
	actions: {
		filteredByCat(category) {
			this.filteredStore = this.initialStore
			this.cat = category
			if (category !== 'all') {
				this.filteredStore = this.filteredStore.filter(
					good => good.category === category
				)
			}
		},
		filteredByInput(search) {
			if (!search) {
				this.filteredByCat(this.cat)
			}
			this.filteredStore = this.filteredStore.filter(good => {
				return good.name
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			})
		},
		expensiveFirst() {
			this.filteredStore = this.filteredStore.sort((first, second) =>
				Number(first.price) < Number(second.price) ? 1 : -1
			)
		},
		cheapFirst() {
			this.filteredStore = this.filteredStore.sort((first, second) =>
				+first.price > +second.price ? 1 : -1
			)
		},
		takeFromStore(id) {
			const candidate = this.initialStore.findIndex(good => good.id === id)
			if (this.canBuy(id)) {
				this.initialStore[candidate].n_order++
				this.initialStore[candidate].quantity--
			}
		},
		returnToStore(id) {
			const candidate = this.initialStore.findIndex(good => good.id === id)
			if (this.canReturn(id)) {
				this.initialStore[candidate].n_order--
				this.initialStore[candidate].quantity++
			}
		},
		canBuy(id) {
			const candidate = this.initialStore.findIndex(good => good.id === id)
			return +this.initialStore[candidate].quantity ? true : false
		},
		canReturn(id) {
			const candidate = this.initialStore.findIndex(good => good.id === id)
			return +this.initialStore[candidate].n_order ? true : false
		},
		getById(id) {
			return this.initialStore.find(good => good.id === id)
		},
	},
})

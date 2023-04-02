import { defineStore } from 'pinia'
import { useGoodsStore } from './goodsStore'
export const useUserStore = defineStore('user', {
	state: () => {
		return {
			listGoods: [],
			favorites: [],
			totalMount: 0,
			pay: false,
		}
	},
	getters: {
		listGoodsForBuy() {
			return this.listGoods
		},
		listFavorites() {
			return this.favorites
		},
		isPay() {
			return this.pay
		},
	},
	actions: {
		addRemoveToBasket(id, type) {
			if (this.isPay) return

			const goodsStore = useGoodsStore()
			const candidate = this.listGoods.findIndex(good => good.id === id)

			if (!goodsStore.canBuy(id) && type) {
				return
			}
			if (!goodsStore.canReturn(id) && !type) {
				return
			}
			if (this.listGoods[candidate]) {
				type
					? this.listGoods[candidate].count++
					: this.listGoods[candidate].count--
			} else {
				const goods = goodsStore.initialStore.find(good => good.id === id)
				if (goods) {
					this.listGoods.push({
						...goods,
						count: 1,
					})
				}
			}
			type ? goodsStore.takeFromStore(id) : goodsStore.returnToStore(id)
		},
		deleteById(id) {
			if (this.isPay) return
			const goodsStore = useGoodsStore()
			const candidate = goodsStore.initialStore.findIndex(
				good => good.id === id
			)

			const obj = goodsStore.initialStore[candidate]
			obj.quantity = +obj.quantity + +obj.n_order
			obj.n_order = +obj.n_order - +obj.n_order
			this.listGoods = this.listGoods.filter(good => good.id !== id)
		},
		toggleFavorite(id) {
			this.favorites.includes(id)
				? this.removeFromFavorite(id)
				: this.addToFavorite(id)
		},
		addToFavorite(id) {
			this.favorites.push(id)
		},
		removeFromFavorite(id) {
			if (this.favorites.includes(id)) {
				this.favorites = this.favorites.filter(favorite => favorite !== id)
			}
		},
	},
})

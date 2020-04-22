import Vue from 'vue'
import { calPrice } from '@/utils/index'

export default {
  addBook: (state, payload) => {
    state.basketTotal += 1
    payload.quantity = 1
    payload.discount = 0
    payload.percentDiscount = 0
    payload.priceTotal = parseInt(payload.price)
    payload.price = parseInt(payload.price)
    payload.netTotal = parseInt(payload.price)
    state.basketBookItem.push(payload)
  },
  updateBook: (state, payload) => {
    const { index, quantity, itemTotal } = payload
    state.basketTotal += itemTotal

    const calBasket = calPrice(state.basketBookItem[index], quantity)
    const { priceTotal, percentDiscount, discount, netTotal } = calBasket

    Vue.set(state.basketBookItem[index], 'quantity', quantity)
    Vue.set(state.basketBookItem[index], 'priceTotal', priceTotal)
    Vue.set(state.basketBookItem[index], 'percentDiscount', percentDiscount)
    Vue.set(state.basketBookItem[index], 'discount', discount)
    Vue.set(state.basketBookItem[index], 'netTotal', netTotal)
  },
  deleteBook: (state, payload) => {
    const { itemTotal } = payload
    if (state.basketTotal >= 0) state.basketTotal -= itemTotal

    const { index, quantity } = payload

    if (quantity === 0) return state.basketBookItem.splice(index, 1)

    const calBasket = calPrice(state.basketBookItem[index], quantity)
    const { priceTotal, percentDiscount, discount, netTotal } = calBasket

    Vue.set(state.basketBookItem[index], 'quantity', quantity)
    Vue.set(state.basketBookItem[index], 'priceTotal', priceTotal)
    Vue.set(state.basketBookItem[index], 'percentDiscount', percentDiscount)
    Vue.set(state.basketBookItem[index], 'discount', discount)
    Vue.set(state.basketBookItem[index], 'netTotal', netTotal)
  },
  clearBasket: (state) => {
    state.basketBookItem = []
    state.basketTotal = 0
  }
}

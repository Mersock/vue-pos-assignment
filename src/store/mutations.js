import Vue from 'vue'
import { specialDiscount } from '@/utils/index'

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
    const { price } = state.basketBookItem[index]

    state.basketTotal += itemTotal

    // priceTotal && quantity
    Vue.set(state.basketBookItem[index], 'quantity', quantity)
    Vue.set(state.basketBookItem[index], 'priceTotal', price * quantity)

    // calculate percent discount
    const { priceTotal } = state.basketBookItem[index]
    Vue.set(state.basketBookItem[index], 'percentDiscount', specialDiscount(quantity))

    // calculate discount && netTotal
    const { percentDiscount } = state.basketBookItem[index]
    Vue.set(state.basketBookItem[index], 'discount', quantity > 1 ? (priceTotal * percentDiscount) / 100 : 0)

    const { discount } = state.basketBookItem[index]
    Vue.set(state.basketBookItem[index], 'netTotal', quantity > 1 ? priceTotal - discount : 10)
  },
  clearBasket: (state) => {
    state.basketBookItem = []
    state.basketTotal = 0
  }
}

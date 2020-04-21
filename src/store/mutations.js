import { specialDiscount } from '@/utils/index'

export default {
  addBook: (state, payload) => {
    state.basketTotal += 1
    const index = state.basketBookItem.findIndex(book => book.id === payload.id)

    if (index === -1) {
      payload.quantity = 1
      payload.discount = 0
      payload.percentDiscount = 0
      payload.priceTotal = parseInt(payload.price)
      payload.price = parseInt(payload.price)
      payload.netTotal = parseInt(payload.price)
      state.basketBookItem.push(payload)
    } else {
      // price && quantity
      state.basketBookItem[index].quantity += 1
      state.basketBookItem[index].priceTotal += payload.price
      // calculate percent discount
      const quantity = state.basketBookItem[index].quantity
      const priceTotal = state.basketBookItem[index].priceTotal
      state.basketBookItem[index].percentDiscount = specialDiscount(quantity)
      // calculate discount && netTotal
      const percentDiscount = state.basketBookItem[index].percentDiscount
      state.basketBookItem[index].discount = quantity > 1 ? (priceTotal * percentDiscount) / 100 : 0
      const discount = state.basketBookItem[index].discount
      payload.netTotal = quantity > 1 ? priceTotal - discount : priceTotal
    }
  }
}

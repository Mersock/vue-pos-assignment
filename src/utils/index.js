export function specialDiscount (quantity) {
  if (quantity === 2) {
    return 10
  } else if (quantity === 3) {
    return 11
  } else if (quantity === 4) {
    return 12
  } else if (quantity === 5) {
    return 13
  } else if (quantity === 6) {
    return 14
  } else if (quantity >= 7) {
    return 15
  } else {
    return 0
  }
}

export function calPrice (state, quantity) {
  const { price } = state
  state.quantity = quantity
  state.priceTotal = price * quantity

  const { priceTotal } = state
  state.percentDiscount = specialDiscount(quantity)

  const { percentDiscount } = state
  state.discount = quantity > 1 ? (priceTotal * percentDiscount) / 100 : 0

  const { discount } = state
  state.netTotal = quantity > 1 ? priceTotal - discount : priceTotal

  return state
}

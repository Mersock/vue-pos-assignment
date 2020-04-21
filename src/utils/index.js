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

export function numberWithCommas (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

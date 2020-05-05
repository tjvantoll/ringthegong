export function getLargestItem(cart) {
    return cart.reduce((largest, current) => current.price > largest.price ? current : largest)
  }
export const verifyCartContent = (cartContent, store) => {
  if(cartContent.length < 0) {

    return []
  }

  const email = store.getters['auth/getUserInfo'].email || null
  const owner = store.getters['cart/getOwner']
  if(owner !== email){
    store.dispatch('cart/resetCart')
    store.dispatch('cart/setOwner', email)

    return []
  }

  return cartContent
}

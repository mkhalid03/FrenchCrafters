export const cleanUser = user => {
  if(user !== null) {
    return {
      username: user.username,
      firstName: user.firstname,
      lastName: user.lastname,
      picture: cleanPicture(user.picture),
      title: user.title,
    }
  }
}

export const cleanPicture = picture => {
  if(picture !== null) {
    return {
      url: picture.url,
      name: picture.name || null
    }
  }
}

export const cleanProductArray = array => {
  return array.map(product => cleanProduct(product))
}

export const cleanProduct = product => {
  if(product !== null) {
    return {
      id: product.id,
      name: product.name,
      category: cleanCategory(product.category),
      price: product.price,
      quantity: product.quantity,
      shop: cleanShop(product.shop)
    }
  }
}

export const cleanCategory = category => {
  if(category !== null && category !== undefined) {
    return {
      id: category.id,
      uid: category.uid,
      title: category.title,
    }
  }
}

export const cleanShop = shop => {
  if(shop !== null) {
    return {
      id: shop.id,
      name: shop.name,
    }
  }
}

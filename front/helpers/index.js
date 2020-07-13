export const cleanUser = (user) => {
  if (user !== null && user !== undefined) {
    return {
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      picture: cleanPicture(user.picture),
      title: user.title,
      email: user.email
    }
  }
}

export const cleanPicture = (picture) => {
  console.log(picture)
  if (picture !== null && picture !== undefined) {
    return {
      url: picture.url || null,
      name: picture.name || null,
    }
  }
}

export const cleanProductArray = (array) => {
  return array.map((product) => cleanProduct(product))
}

export const cleanProduct = (product) => {
  if (product !== null && product !== undefined) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      category: cleanCategory(product.category),
      price: product.price,
      quantity: product.quantity,
      selectedSize: product.selectedSize,
      sizes: product.sizes,
      shop: cleanShop(product.shop),
    }
  }
}

export const cleanCategory = (category) => {
  if (category !== null && category !== undefined) {
    return {
      id: category.id,
      uid: category.uid,
      title: category.title,
    }
  }
}

export const cleanShop = (shop) => {
  if (shop !== null && shop !== undefined) {
    return {
      id: shop.id,
      name: shop.name,
    }
  }
}

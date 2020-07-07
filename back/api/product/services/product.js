'use strict';

const getRealProducts = async productsArray => {
    const res = []
    for (const product of productsArray) {
      const realProduct = await strapi.services['product'].findOne({ id: product.id })
      product.selectedSize ? realProduct.selectedSize = product.selectedSize : null
      product.quantity ? realProduct.quantity = product.quantity : null

      res.push(realProduct);
    }
    if(res.length !== productsArray.length){
      throw strapi.errors['resourceGone']('One or many products are no longer available');
    }
    return res
};

const allProductAvailable = async products => {
  products.forEach(product => {
    if(!product.quantity){
      throw strapi.errors['preconditionFailed']('Missing quantity');
    }
    if(product.sizes.length > 0 && !product.selectedSize){
      throw strapi.errors['resourceGone']('One or many products are no longer available');
    }
    if(product.sizes.length > 0){
      const selectedSize = product.sizes.find(size => size.id === product.selectedSize.id)
      if(selectedSize.stock < product.quantity){
        throw strapi.errors['resourceGone']('Missing in stock');
      }
    }
  })
};

const actualizeStock = async products => {
  for (const product of products) {
    product.sizes.map(size => {
      if(size.id === product.selectedSize.id){
        try{
          strapi.components['product.sizes-list'].findByIdAndUpdate(size.id, {stock: size.stock - product.quantity }, () => {})
        } catch {
          throw strapi.errors['badRequest']("Can't update stock");
        }
      }
    })
  }
};

const calculatePrice = async products => {
  let prices = [];
  for (const product of products) {
    prices.push(product.price * product.quantity);
  }
  return prices.reduce((a,b) => a+b, 0);
};

module.exports = {
  actualizeStock,
  allProductAvailable,
  calculatePrice,
  getRealProducts
};

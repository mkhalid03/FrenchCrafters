'use strict';

const getRealProducts = async (ctx, productsArray) => {
    const res = []
    for (const product of productsArray) {
      const realProduct = await strapi.query('product').findOne({ id: product.id })
      product.selectedSize ? realProduct.selectedSize = product.selectedSize : null
      product.quantity ? realProduct.quantity = product.quantity : null

      res.push(realProduct);
    }
    if(res.length !== productsArray.length){
      return ctx.response.resourceGone('One or many products are no longer available')
    }
    return res
};

const calculatePrice = async products => {
  let prices = [];
  for (const product of products) {
    console.log(product)
    prices.push(product.price * product.quantity);
  }
  return prices.reduce((a,b) => a+b, 0);
};

module.exports = {
  calculatePrice,
  getRealProducts
};

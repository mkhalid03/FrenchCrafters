'use strict';

const calculatePrice = async products => {
  let prices = [];
  for (const product of products) {
    const item = await strapi.query('product').findOne({ id: product.id });
    const quantity = product.quantity;

    prices.push(item.price * quantity);
  }
  return prices.reduce((a,b) => a+b, 0);
};

module.exports = {
  calculatePrice
};

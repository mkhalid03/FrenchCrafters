'use strict';
const groupBy = require('lodash/groupBy');

const createShopOrderForOrder = async (products, address, order) => {
  const productsByShop = groupBy(products, n => n.shop.id)
  Object.keys(productsByShop).forEach((shopId) => {
    console.log(shopId)
    const items = []
    const products = productsByShop[shopId]
    products.forEach(product => {
      items.push({
        quantity: product.quantity,
        size: product.selectedSize ? product.selectedSize.name : 'default',
        product: {
          name: product.name,
          description: product.description,
        }
      })
    })

    strapi.services['shop-order'].create({
      products: items,
      shop: shopId,
      order: order.id,
      //address: []
    });
  })
};

module.exports = {
  createShopOrderForOrder
};

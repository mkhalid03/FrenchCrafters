'use strict';
const TVA_VALUE = 20
const groupBy = require('lodash/groupBy');

const createShopInvoiceForOrder = async (products, order) => {
  const productsByShop = groupBy(products, n => n.shop.id)
  for (const shopId of Object.keys(productsByShop)) {
    const products = productsByShop[shopId]
    const shopProductsAmount = await strapi.services['order'].calculatePrice(products);
    const shop = await strapi.query('shop').findOne({id: shopId})
    const shopTaxesPercent = shop.tax
    const fullAmount = shopProductsAmount
    const withoutTaxesAmount = Math.floor((fullAmount - (fullAmount * (TVA_VALUE / 100)) - (fullAmount * (shopTaxesPercent / 100))) * 100) /100

    strapi.services['shop-invoice'].create({
      order: order.id,
      fullAmount,
      withoutTaxesAmount,
      tva: TVA_VALUE,
      shopTaxesPercent,
    });
  }
};

module.exports = {
  createShopInvoiceForOrder
};

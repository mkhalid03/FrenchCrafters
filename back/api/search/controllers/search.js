const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const params = ctx.query;

    const shops = await strapi.query('shop').find(params);
    const sanitizedShops = sanitizeEntity(shops.toJSON ? shops.toJSON() : shops, {
      model: strapi.query('shop').model,
    });

    const products = await strapi.query('product').find(params);
    const sanitizedProducts = sanitizeEntity(products.toJSON ? shops.toJSON() : products, {
      model: strapi.query('product').model,
    });

    return {
      shops: Object.keys(sanitizedShops).map(i => sanitizedShops[i]),
      products: Object.keys(sanitizedProducts).map(i => sanitizedProducts[i])
    }
  }
};


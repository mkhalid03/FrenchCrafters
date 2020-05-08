const { sanitizeEntity } = require('strapi-utils');

const SHOP_COLUMNS = ["description", "name"]
const PRODUCT_COLUMNS = ["description", "name", "target"]

module.exports = {
  async findAll() {
    const shops = await strapi.services.search.randomQueryOutput('shop', 10);
    const products = await strapi.services.search.randomQueryOutput('product', 10);

    return { shops, products };
  },
  async searchAll(ctx) {
    const { query } = ctx.request.body;
    const shops = await strapi.services.search.entityWithQuery(query, 'shop', SHOP_COLUMNS);
    const products = await strapi.services.search.entityWithQuery(query, 'product', PRODUCT_COLUMNS);

    return { shops, products };
  },
  async searchShops(ctx) {
    const { query } = ctx.request.body;
    const shops = await strapi.services.search.entityWithQuery(query, 'shop', SHOP_COLUMNS);

    return { shops };
  },
  async searchProducts(ctx) {
    const { query } = ctx.request.body;
    const products = await strapi.services.search.entityWithQuery(query, 'product', PRODUCT_COLUMNS);

    return { products };
  },
};


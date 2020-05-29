const { sanitizeEntity } = require('strapi-utils');

const SHOP_COLUMNS = ['description', 'name'];
const PRODUCT_COLUMNS = ['description', 'name', 'category', 'target'];

module.exports = {
  async findAll() {
    const shops = await strapi.services.search.randomQueryOutput('shop', 10);
    const products = await strapi.services.search.randomQueryOutput('product', 10);

    return { shops, products };
  },
  async searchAll(ctx) {
    const { query, limit, skip, categories } = ctx.request.body;
    const shops = await strapi.services.search.entityWithQuery(query, 'shop', SHOP_COLUMNS, categories, limit, skip);
    const products = await strapi.services.search.entityWithQuery(query, 'product', PRODUCT_COLUMNS, categories, limit, skip);

    return { shops, products };
  },
  async searchShops(ctx) {
    const { query, limit, skip, categories } = ctx.request.body;
    const shops = await strapi.services.search.entityWithQuery(query, 'shop', SHOP_COLUMNS, categories, limit, skip);

    return { shops };
  },
  async searchProducts(ctx) {
    const { query, limit, skip, categories } = ctx.request.body;
    const products = await strapi.services.search.entityWithQuery(query, 'product', PRODUCT_COLUMNS, categories, limit, skip);

    return { products };
  },
};


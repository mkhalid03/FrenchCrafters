module.exports = {
  async find(ctx) {
    const shops = await strapi.services.search.entityWithParams(ctx.query, 'shop');
    const products = await strapi.services.search.entityWithParams(ctx.query, 'product');

    return { shops, products };
  },
  async findShops(ctx) {
    const shops = await strapi.services.search.entityWithParams(ctx.query, 'shop');

    return { shops };
  },
  async findProducts(ctx) {
    const products = await strapi.services.search.entityWithParams(ctx.query, 'product');

    return { products };
  }
};


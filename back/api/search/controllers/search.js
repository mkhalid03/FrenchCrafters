module.exports = {
  async find(ctx) {
    const params = ctx.query;

    const shops = await strapi.services.search.entityWithParams(params, 'shop');
    const products = await strapi.services.search.entityWithParams(params, 'product');

    return {
      shops,
      products,
    };
  }
};


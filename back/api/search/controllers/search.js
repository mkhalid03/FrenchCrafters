const SHOP_COLUMNS = ['description', 'name'];
const PRODUCT_COLUMNS = ['description', 'name', 'category', 'target'];

const findAll = async () => {
  const shops = await strapi.services.search.randomQueryOutput('shop', 10);
  const products = await strapi.services.search.randomQueryOutput('product', 10);

  return { shops, products };
}

const searchAll = async (ctx) => {
  const { query, limit, skip, categories } = ctx.request.body;
  const shops = await strapi.services.search.entityWithQuery(query, 'shop', SHOP_COLUMNS, categories, limit, skip);
  const products = await strapi.services.search.entityWithQuery(query, 'product', PRODUCT_COLUMNS, categories, limit, skip);

  return { shops, products };
}

const searchShops = async (ctx) => {
  const { query, limit, skip, categories } = ctx.request.body;
  const shops = await strapi.services.search.entityWithQuery(query, 'shop', SHOP_COLUMNS, categories, limit, skip);

  return { shops };
}

const searchProducts = async (ctx) => {
  const { query, limit, skip, categories } = ctx.request.body;
  const products = await strapi.services.search.entityWithQuery(query, 'product', PRODUCT_COLUMNS, categories, limit, skip);

  return { products };
}

module.exports = {
  findAll,
  searchAll,
  searchShops,
  searchProducts,
};


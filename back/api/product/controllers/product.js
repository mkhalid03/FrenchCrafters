'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async check (ctx) {
    const {
      products
    } = ctx.request.body;

    return await strapi.services['product'].getRealProducts(products)
  }
};

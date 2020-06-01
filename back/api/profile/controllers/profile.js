const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    const userId = await strapi.services.profile.getUserIdByToken(ctx);
    let entity = await strapi.query('user', 'users-permissions').findOne({ id: userId });

    const satinizedUser =  sanitizeEntity(entity.toJSON ? entity.toJSON() : entity, {
      model: strapi.query('user', 'users-permissions').model,
    });
    delete satinizedUser.orders
    return satinizedUser
  },

  async update(ctx) {
    const {firstname, lastname, title} = ctx.request.body;
    const id = await strapi.services.profile.getUserIdByToken(ctx);
    let entity = await strapi.services.profile.update({ id }, {firstname, lastname, title});

    return sanitizeEntity(entity.toJSON ? entity.toJSON() : entity, {
      model: strapi.query('user', 'users-permissions').model,
    });
  },

  async findOrders(ctx) {
    const userId = await strapi.services.profile.getUserIdByToken(ctx);
    let entity = await strapi.query('order').model.find({ user: userId });

    return Object.values(sanitizeEntity(entity.toJSON ? entity.toJSON() : entity, {
      model: strapi.query('order').model,
    }));
  },
};


const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;
    let entity = await strapi.query('user', 'users-permissions').findOne({ id });

    return sanitizeEntity(entity.toJSON ? entity.toJSON() : entity, {
      model: strapi.query('user', 'users-permissions').model,
    });
  },
  async update(ctx) {
    console.log(ctx.request.body)
    const {firstname, lastname, title} = ctx.request.body;

    const { _id } = ctx.state.user;
    let entity = await strapi.services.profile.update({ id: _id }, {firstname, lastname, title});

    return sanitizeEntity(entity.toJSON ? entity.toJSON() : entity, {
      model: strapi.query('user', 'users-permissions').model,
    });
  }
};


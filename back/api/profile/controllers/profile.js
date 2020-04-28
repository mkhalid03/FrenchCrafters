const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async update(ctx) {

    const {firstname, lastname, title, profile} = ctx.request.body

    const { _id } = ctx.state.user;
    let entity = await strapi.services.profile.update({ id: _id }, {firstname, lastname, title, profile});

    return sanitizeEntity(entity.toJSON ? entity.toJSON() : entity, {
      model: strapi.query('user', 'users-permissions').model,
    })
  }
};


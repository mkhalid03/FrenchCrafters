'use strict';

module.exports = {
  async create (ctx) {
    const {email, password} = ctx.request.body

    ctx.request.body = {
      username: email,
      email,
      password,
      blocked: true
    }

    try {
      await strapi.plugins['users-permissions'].services.user.add({
        username: email,
        email,
        password
      })

      await strapi.admin.controllers.admin.create(ctx)
      const newAdmin = await strapi.query('administrator', 'admin').findOne({ email });
      await strapi.services['shop'].initializeShopWithOwner(newAdmin)

      ctx.response.statusCode = 201;
      return ctx;
    } catch {
      throw strapi.errors['conflict']('something went wrong during creation.');
    }
  }
};

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

    strapi.admin.controllers.admin.create(ctx)

    //TODO : create user
    //TODO : create a shop with user as owner
  }
};

'use strict';

const update = async (params, data, { files } = {}) => {
  const entry = await strapi.query('user', 'users-permissions').update(params, data);

  if (files) {
    await strapi.entityService.uploadFiles(entry, files, {
      model: 'user',
      plugin: 'users-permissions'
    });
    return this.findOne({ id: entry.id });
  }

  return entry;
};

const getUserByToken = async ctx => {
  const userId = await getUserIdByToken(ctx);
  return strapi.query('user', 'users-permissions').findOne({ id: userId });
};

const getUserIdByToken = async ctx => {
  let userId = null;
  if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
    try {
      const { id } = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
      userId = id;
    } catch (err) {
      throw strapi.errors['unauthorized']('Unauthorized to fetch this account');
    }
  }
  return userId;
};

module.exports = {
  getUserIdByToken,
  getUserByToken,
  update
};

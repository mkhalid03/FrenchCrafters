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
}

module.exports = {
  update
};

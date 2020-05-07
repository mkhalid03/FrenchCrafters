'use strict';
const { sanitizeEntity } = require('strapi-utils');

const entityWithParams = async (params, entity) => {
  const res = await strapi.query(entity).find(params);
  const sanitizedRes = sanitizeEntity(res.toJSON ? res.toJSON() : res, {
    model: strapi.query(entity).model,
  });

  return Object.keys(sanitizedRes).map(i => sanitizedRes[i]);
};

module.exports = {
  entityWithParams
};

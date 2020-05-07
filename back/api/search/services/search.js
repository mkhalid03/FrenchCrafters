'use strict';

const entityWithQuery = async (query, entity, columns) => {
  return strapi.query(entity).model.find( { $or: getParamsFromQuery(query, columns) } ).limit(15)
};

const randomQueryOutput = async (entity, size) => {
  return strapi.query(entity).model.aggregate([ { $sample: { size } } ])
}

const getParamsFromQuery = (query, columns) => {
  const res = []
  columns.forEach(column => res.push({[column]: { "$regex": query, "$options": "i" } }))

  return res
}

module.exports = {
  entityWithQuery,
  randomQueryOutput
};

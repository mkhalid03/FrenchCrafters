'use strict';
const i18n = require('i18n'), path = require("path"), translation = require('../../../config/locales/fr_fr.json')

i18n.configure({
  locales:['fr_fr'],
  register: global,
  updateFiles: false,
  directory: path.join(__dirname + '../../../../config/locales')
});

const entityWithQuery = async (query, entity, columns, categories, limit, skip) => {
  return strapi.query(entity).model
    .find( await getParamsFromQuery(query, columns, categories) )
    .limit(parseInt(limit))
    .skip(parseInt(skip))
    .populate(entity === "product" ? 'category' : null);
};

const randomQueryOutput = async (entity, size) => {
  return strapi.query(entity).model.aggregate([ { $sample: { size } } ])
}

const getParamsFromQuery = async (query, columns, categories = []) => {

  const queryArray = query ? query.split(' ') : [];
  const contentFilter = []
  const targetFilter = []
  const categoriesFilter = []

  for (const column of columns) {
    switch (column) {
      case 'target':
        queryArray.forEach(q => {
          if (q in translation) {
            targetFilter.push({target: {"$regex": __({phrase: q, locale: 'fr_fr'}), "$options": "i"}})
          }
        })
        break;
      case 'category':
        for (const category of categories) {
          const c = await strapi.query("category").model.find({uid: category})
          categoriesFilter.push({"category": c})
        }
        break;
      default:
        queryArray.forEach(q => {
          if (q !== "") {
            contentFilter.push({[column]: {"$regex": q, "$options": "i"}})
          }
        })
    }
  }

  const filters = []

  if(targetFilter.length !== 0) filters.push({$or: targetFilter})
  if(contentFilter.length !== 0) filters.push({$or: contentFilter})
  if(categoriesFilter.length !== 0) filters.push({$or: categoriesFilter})

  console.log(JSON.stringify(filters))

  return filters.length !== 0 ? { $and: filters } : {}
}

module.exports = {
  entityWithQuery,
  randomQueryOutput
};

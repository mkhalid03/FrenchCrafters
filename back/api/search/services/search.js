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
    .populate(entity === "product" ? 'category' : null)
    .populate(entity === "product" ? 'shop' : null)
    .then(res => {
      const tmp = res.slice(res);
      const ret = [];

      for (let i = 0; i < res.length; i++) {
        const index = Math.floor(Math.random() * tmp.length);
        const removed = tmp.splice(index, 1);
        ret.push(removed[0]);
      }
      return ret.filter(function (el) {
        return el != null;
      });
    })
};

const randomQueryOutput = async (entity, size) => {
  return strapi.query(entity).model
    .find()
    .populate('image')
    .populate(entity === "product" ? 'category' : null)
    .populate(entity === "product" ? 'shop' : null)
    .then(res => {
      const tmp = res.slice(res);
      const ret = [];

      for (let i = 0; i < size; i++) {
        const index = Math.floor(Math.random() * tmp.length);
        const removed = tmp.splice(index, 1);
        ret.push(removed[0]);
      }
      return ret.filter(function (el) {
        return el != null;
      });
    })
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
        if(categories !== null){
          for (const category of categories) {
            categoriesFilter.push({"category": category})
          }
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

  //console.log(JSON.stringify(filters))

  return filters.length !== 0 ? { $and: filters } : {}
}

module.exports = {
  entityWithQuery,
  randomQueryOutput
};

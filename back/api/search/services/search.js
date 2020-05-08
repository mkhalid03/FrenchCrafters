'use strict';
const i18n = require('i18n'), path = require("path"), translation = require('../../../config/locales/fr_fr.json')

i18n.configure({
  locales:['fr_fr'],
  register: global,
  updateFiles: false,
  directory: path.join(__dirname + '../../../../config/locales')
});

const entityWithQuery = async (query, entity, columns) => {
  return strapi.query(entity).model.find( getParamsFromQuery(query, columns) )
};

const randomQueryOutput = async (entity, size) => {
  return strapi.query(entity).model.aggregate([ { $sample: { size } } ])
}

const getParamsFromQuery = (query, columns) => {

  const queryArray = query.split(' ');
  const contentFilter = []
  const targetFilter = []

  columns.forEach(column => {
    if(column !== "target"){
      queryArray.forEach(q => {
        contentFilter.push({[column]: { "$regex": q, "$options": "i" } })
      })
    } else {
      queryArray.forEach(q => {
        if(q in translation){
          targetFilter.push({target: { "$regex": __({phrase: q, locale: 'fr_fr'}), "$options": "i" } })
        }
      })
    }
  })

  if(targetFilter.length === 0) {
    return { $and: [{ $or: contentFilter }]}
  }

  return { $and: [{ $or: contentFilter }, { $or: targetFilter }]}
}

module.exports = {
  entityWithQuery,
  randomQueryOutput
};

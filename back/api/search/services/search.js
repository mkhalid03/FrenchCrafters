'use strict';
const i18n = require('i18n'), path = require("path")

i18n.configure({
  locales:['fr_fr'],
  register: global,
  updateFiles: false,
  directory: path.join(__dirname + '../../../../config/locales')
});

const entityWithQuery = async (query, entity, columns) => {
  return strapi.query(entity).model.find( { $or: getParamsFromQuery(query, columns) } ).limit(15)
};

const randomQueryOutput = async (entity, size) => {
  return strapi.query(entity).model.aggregate([ { $sample: { size } } ])
}

const getParamsFromQuery = (query, columns) => {

  const queryArray = query.split(' ');
  const res = []
  columns.forEach(column => {
    if(column === "target"){
      queryArray.forEach(q => {
        res.push({[column]: { "$regex": __({phrase: q, locale: 'fr_fr'}), "$options": "i" } })
      })
    } else {
      queryArray.forEach(q => {
        res.push({[column]: { "$regex": q, "$options": "i" } })
      })
    }
  })

  console.log(res)

  return res
}

module.exports = {
  entityWithQuery,
  randomQueryOutput
};

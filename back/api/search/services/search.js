'use strict';

const entityWithQuery = async (query, entity, columns, categories, targets, limit, skip) => {
  return strapi.query(entity).model
    .find( await getParamsFromQuery(query, columns, categories, targets) )
    .limit(parseInt(limit))
    .skip(parseInt(skip))
    .populate(entity === 'product' ? 'category' : null)
    .populate(entity === 'product' ? 'shop' : null)
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
    });
};

const randomQueryOutput = async (entity, size) => {
  return await strapi.query(entity).model
    .find({'visible': true})
    .populate(entity === 'product' ? 'category' : null)
    .populate(entity === 'product' ? 'shop' : null)
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
    });
};

const getParamsFromQuery = async (query, columns, categories = [], targets = []) => {

  const queryArray = query ? query.split(' ') : [];
  const contentFilter = [];
  const targetFilter = [];
  const categoriesFilter = [];

  for (const column of columns) {
    switch (column) {
      case 'target':
        for (const target of targets) {
          targetFilter.push({'target': target});
        }
        break;
      case 'category':
        if(categories !== null){
          for (const category of categories) {
            categoriesFilter.push({'category': category});
          }
        }
        break;
      default:
        queryArray.forEach(q => {
          if (q !== '') {
            contentFilter.push({[column]: {'$regex': q, '$options': 'i'}});
          }
        });
    }
  }

  const filters = [];

  if(targetFilter.length !== 0) filters.push({$or: targetFilter});
  if(contentFilter.length !== 0) filters.push({$or: contentFilter});
  if(categoriesFilter.length !== 0) filters.push({$or: categoriesFilter});
  filters.push({'visible': true})

  return filters.length !== 0 ? { $and: filters } : {};
};

module.exports = {
  entityWithQuery,
  randomQueryOutput
};

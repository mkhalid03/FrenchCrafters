const json2mongo = require('json2mongo');
const data = require('./data/strapi_administrator.json')

module.exports = json2mongo(data)

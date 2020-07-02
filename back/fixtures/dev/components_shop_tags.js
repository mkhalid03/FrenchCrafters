const json2mongo = require('json2mongo');
const data = require('./data/components_shop_tags.json')

module.exports = json2mongo(data)

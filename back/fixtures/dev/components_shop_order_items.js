const json2mongo = require('json2mongo');
const data = require('./data/components_shop_order_items.json')

module.exports = json2mongo(data)

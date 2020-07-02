const json2mongo = require('json2mongo');
const data = require('./data/shop_orders.json')

module.exports = json2mongo(data)

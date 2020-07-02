const json2mongo = require('json2mongo');
const data = require('./data/shop_invoices.json')

module.exports = json2mongo(data)

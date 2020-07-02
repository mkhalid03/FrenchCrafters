const json2mongo = require('json2mongo');
const data = require('./data/components_adress_order_adresses.json')

module.exports = json2mongo(data)

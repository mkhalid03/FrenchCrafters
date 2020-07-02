const json2mongo = require('json2mongo');
const data = require('./data/payments.json')

module.exports = json2mongo(data)

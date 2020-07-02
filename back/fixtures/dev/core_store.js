const json2mongo = require('json2mongo');
const data = require('./data/core_store.json')

module.exports = json2mongo(data)

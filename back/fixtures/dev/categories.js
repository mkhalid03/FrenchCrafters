const json2mongo = require('json2mongo');
const data = require('./data/categories.json')

module.exports = json2mongo(data)

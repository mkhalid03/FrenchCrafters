const json2mongo = require('json2mongo');
const data = require('./data/components_sizes_sizes_lists.json')

module.exports = json2mongo(data)

const json2mongo = require('json2mongo');
const data = require('./data/users-permissions_permission.json')

module.exports = json2mongo(data)

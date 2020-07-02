const json2mongo = require('json2mongo');
const data = require('./data/upload_file.json')

module.exports = json2mongo(data)

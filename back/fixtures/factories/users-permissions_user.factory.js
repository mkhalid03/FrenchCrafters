const factory = require('fakingoose');

const options = {};

const roleFactory = schema => {
  return factory(schema, options)
}

module.exports = {
  roleFactory
}

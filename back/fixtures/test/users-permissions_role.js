const { userFactory } = require('../factories/users-permissions_role.factory')

const model = strapi.query('role', 'users-permissions').model
const factory = userFactory(model)

const data = factory.generate({
  password: 'root'
});

global.context['user'] = data

module.exports = [data]

const { userFactory } = require('../factories/users-permissions_user.factory')

const model = strapi.query('user', 'users-permissions').model
const factory = userFactory(model)

const data = factory.generate({
  password: 'root'
});

global.context['user'] = data

module.exports = [data]

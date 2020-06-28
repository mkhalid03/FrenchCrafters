const factory = require('fakingoose');

const options = {
  email: {
    type: 'email',
  },
  password: {
    value: object => {
      return strapi.plugins['users-permissions'].services.user.hashPassword(object.password)
    }
  },
  provider: {
    value: () => "local"
  },
  blocked: {
    value: () => false
  },
  confirmed: {
    value: () => true
  },
  role: {
    value: () => ""
  }
};

const userFactory = schema => {
  return factory(schema, options)
}

module.exports = {
  userFactory
}

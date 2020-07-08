module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        database: env.int("MONGO_DB_NAME", "back"),
        host: "mongo",
        srv: false,
        port: env.int("MONGO_DB_PORT", 27017),
        username: env.int("MONGO_DB_USERNAME", ""),
        password: env.int("MONGO_DB_PASSWORD", ""),
      },
      options: {
        authenticationDatabase: ""
      }
    }
  }
})

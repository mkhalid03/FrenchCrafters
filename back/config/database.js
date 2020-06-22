module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        database: "back",
        host: "mongo",
        srv: false,
        port: 27017,
        username: "",
        password: ""
      },
      options: {
        authenticationDatabase: ""
      }
    }
  }
})

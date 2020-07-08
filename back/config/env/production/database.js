module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('MONGO_DB_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
});

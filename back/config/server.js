module.exports = ({ env }) => ({
  host: env.int('BACK_HOST_URL', 'localhost'),
  port: env.int('PORT', 1337),
  proxy: {
    enabled: false
  },
  cron: {
    enabled: false
  },
  admin: {
    autoOpen: false
  }
})

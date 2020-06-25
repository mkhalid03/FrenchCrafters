module.exports = ({ env }) => ({
  host: env('BACK_HOST_URL', '0.0.0.0'),
  port: env.int('BACK_HOST_PORT', 1337),
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

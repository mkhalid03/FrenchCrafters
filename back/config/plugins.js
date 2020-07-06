module.exports = ({ env }) => ({
  email: {
    provider: 'gmail',
    settings: {
      defaultFrom: "debug@crafters.com",
      defaultReplyTo: "debug@crafters.com",
    },
    providerOptions: {
      service: 'gmail',
      auth: {
        user: env('SMTP_USER'),
        pass: env('SMTP_PASSWORD')
      }
    }
  },
});

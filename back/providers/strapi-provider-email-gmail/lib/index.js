'use strict';

const nodemailer = require('nodemailer');
const {removeUndefined} = require('strapi-utils');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    const transporter = nodemailer.createTransport({
      ...providerOptions
    });
    return {
      send: async options => {
        const {from, to, cc, bcc, replyTo, subject, text, html, ...rest} = options;

        let msg = {
          from: from || settings.defaultFrom,
          to,
          cc,
          bcc,
          replyTo: replyTo || settings.defaultReplyTo,
          subject,
          text,
          html,
          ...rest,
        };

        return await transporter.sendMail(removeUndefined(msg))
      },
    };
  },
};

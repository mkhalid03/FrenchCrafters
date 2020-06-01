'use strict';
const dayjs = require('dayjs');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const stripePayment = async (ctx, amount, products, user, token) => {

  const cartAmount = Math.round(await strapi.services['product'].calculatePrice(products) * 100) / 100;
  console.log(cartAmount)
  if(Math.round(amount*100)/100 !== Math.round(cartAmount*100)/100){
      return ctx.response.notAcceptable('One or many products are no longer available')
  }

  return await stripe.charges.create({
    amount: Math.round(cartAmount*100),
    currency: 'EUR',
    description: `Order ${dayjs().format('YYYY-MM-DD HH:mm:ss')} by ${user.email} (${user.id})`,
    source: token,
  });
};

const createPaymentForOrder = async (payment, order) => {
  payment.order = order.id;
  payment.details = payment.payment_method_details;
  payment.receipt = payment.receipt_url;
  payment.transactionId = payment.id
  delete payment.id
  strapi.services.payment.create(payment);
};

module.exports = {
  createPaymentForOrder,
  stripePayment
};

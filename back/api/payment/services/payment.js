'use strict';
const dayjs = require('dayjs');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const stripePayment = async (ctx, user) => {
  const {
    amount,
    products,
    token,
  } = ctx.request.body;

  const cartAmount = Math.round(await strapi.services.order.calculatePrice(products) * 100) / 100;

  if(Math.round(amount*100)/100 !== Math.round(cartAmount*100)/100){
    ctx.response.status = 400;
    return {error: 'Something went wrong during payment'};
  }

  return await stripe.charges.create({
    amount: Math.round(cartAmount*100),
    currency: 'EUR',
    description: `Order ${dayjs().format('YYYY-MM-DD HH:mm:ss')} by ${user.email} (${user.id})`,
    source: token,
  });
};

const createPaymentForOrder = async (payment, order) => {
  payment.order = order;
  payment.details = payment.payment_method_details;
  payment.receipt = payment.receipt_url;
  return strapi.query('payment').model.create(payment);
};

module.exports = {
  createPaymentForOrder,
  stripePayment
};

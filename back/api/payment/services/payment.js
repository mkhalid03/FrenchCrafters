'use strict';
const dayjs = require('dayjs');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const stripePayment = async (ctx, products, token, user) => {

  const cartAmount = Math.round(await strapi.services['product'].calculatePrice(products) * 100) / 100;
  if(!cartAmount){
      return ctx.response.notAcceptable('One or many products are no longer available')
  }

  return await createCharge(user, cartAmount, token);
};

const createCharge = async (customer, amount, token) => {
  return await stripe.charges.create({
    source: token,
    amount: Math.round(amount*100),
    currency: 'EUR',
    description: `Order ${dayjs().format('YYYY-MM-DD HH:mm:ss')} by ${customer.email} (${customer.id})`
  });
}

const createSubscription = async (customer, customerInfo) => {
  return await stripe.subscriptions.create({
    customer: customer.id,
    items: [{
      plan: customerInfo.planId,
    }],
    expand: ["latest_invoice.payment_intent"],
  });
}

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

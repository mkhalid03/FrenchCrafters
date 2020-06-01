module.exports = {
  async create (ctx){
    const {
      address,
      products,
      postalCode,
      city,
    } = ctx.request.body;

    const user = await strapi.services.profile.getUserByToken(ctx);

    try {
      const payment = await strapi.services.payment.stripePayment(ctx, user);

      try {
        const order = await strapi.services['order'].create({
          user: user,
          address,
          amount: payment.amount,
          products,
          postalCode,
          city,
        });

        strapi.services['payment'].createPaymentForOrder(payment, order);
        strapi.services['shop-order'].createShopOrderForOrder(products, address, order);
        strapi.services['shop-invoice'].createShopInvoiceForOrder(products, order);

        //return {};
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

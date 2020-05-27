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
      const payment = await strapi.services.payment.stripePayment(ctx, user)
      console.log(payment)

      // Register the order in the database
      try {
        const order = await strapi.services.order.create({
          user: user,
          address,
          amount: payment.amount,
          products,
          postalCode,
          city,
        });

        strapi.services.payment.createPaymentForOrder(payment, order)

        //return {};
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

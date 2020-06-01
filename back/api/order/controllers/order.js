module.exports = {
  async create (ctx){
    const {
      address,
      amount,
      city,
      postalCode,
      products : bodyProducts,
      token
    } = ctx.request.body;

    const user = await strapi.services.profile.getUserByToken(ctx);

    try {
      const products = await strapi.services['product'].getRealProducts(ctx, bodyProducts);
      const payment = await strapi.services['payment'].stripePayment(ctx, amount, products, user, token);

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

        return ctx.response.statusCode = 201;
      } catch (err) {
        throw err
      }
    } catch (err) {
      console.log('products / payment', err);
      throw err
    }
  },
};

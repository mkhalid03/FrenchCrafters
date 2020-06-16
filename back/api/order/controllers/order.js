module.exports = {
  async create (ctx){
    const {
      city,
      postalCode,
      products : bodyProducts,
      token
    } = ctx.request.body;

    const user = await strapi.services.profile.getUserByToken(ctx);

    try {
      const products = await strapi.services['product'].getRealProducts(ctx, bodyProducts);
      const payment = await strapi.services['payment'].stripePayment(ctx, products, token, user);

      const address = {
        city: payment.billing_details.address.city,
        country: payment.billing_details.address.country,
        line1: payment.billing_details.address.line1,
        line2: payment.billing_details.address.line2,
        postalCode: payment.billing_details.address.postal_code,
      }

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
        console.log('invoices creation', err);
        throw err
      }
    } catch (err) {
      console.log('products / payment', err);
      throw err
    }
  },
};

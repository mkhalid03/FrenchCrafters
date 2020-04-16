const stripe = require('stripe')(process.env.STRIPE_API_KEY);

module.exports = {
  async create (ctx){
    const {
      address,
      products,
      postalCode,
      token,
      city,
    } = ctx.request.body;

  try {
      await stripe.charges.create({
        currency: 'EUR',
        description: `Order ${new Date()} by ${ctx.state.user.id}`,
        source: token,
      });

      // Register the order in the database
      try {
        await strapi.services.order.create({
          user: ctx.state.user.id,
          address,
          amount: await strapi.services.order.calculatePrice(products)*100,
          products,
          postalCode,
          city,
        });

        return order;
      } catch (err) {
        console.log(err)
      }
    } catch (err) {
      console.log(err)
    }
  },
};

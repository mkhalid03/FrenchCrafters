const stripe = require('stripe')(process.env.STRIPE_API_KEY);

module.exports = {
  async create (ctx){
    const {
      address,
      amount,
      products,
      postalCode,
      token,
      city,
    } = ctx.request.body;

    console.log(token)
    console.log(process.env.STRIPE_API_KEY)

    // Charge the customer
    try {
      const charge = await stripe.charges.create({
        amount: amount * 100,
        currency: 'EUR',
        description: `Order ${new Date()} by ${ctx.state.user.id}`,
        source: token,
      });

      // Register the order in the database
      try {
        const order = await strapi.services.order.create({
          user: ctx.state.user.id,
          address,
          amount,
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

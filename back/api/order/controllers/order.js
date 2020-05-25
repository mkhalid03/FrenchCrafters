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

    try {
      const cartAmount = Math.round(await strapi.services.order.calculatePrice(products) * 100) / 100;

      if(Math.round(amount*100)/100 !== Math.round(cartAmount*100)/100){
        ctx.response.status = 400
        return {error: "Something went wrong during payment"}
      }

      const payment = await stripe.charges.create({
        amount: Math.round(cartAmount*100),
        currency: 'EUR',
        description: `Order ${new Date()} by ${ctx.state.user.id}`,
        source: token,
      });

      // Register the order in the database
      try {
        await strapi.services.order.create({
          user: ctx.state.user.id,
          address,
          amount: cartAmount,
          products,
          postalCode,
          city,
        });

        console.log(payment)

        //strapi.services.bill.create('product', 10 )

        return {};
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

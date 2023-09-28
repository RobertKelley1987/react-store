const stripe = require('stripe')(process.env.STRIPE_SK);

// Helper fn to total cart items in cents for stripe api
const cartValInCents = cart => {
    const total = cart.reduce((prev, curr) => curr.product.price * curr.qty + prev, 0);
    return Math.round(total * 100);
}

// Create a payment intent with stripe api.
// Returns client secret string for confirmation on client.
module.exports.create = async (req, res) => {
    const { cart } = req.body;

    const intent = await stripe.paymentIntents.create({
        amount: cartValInCents(cart),
        currency: 'usd',
        payment_method_types: ['card']
    });

    res.json({ clientSecret: intent.client_secret });
}
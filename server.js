if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SK);

app.use(express.json());

app.get('/test', (req, res) => {
    res.send({ message: 'success!' });
});

app.post('/client-secret', async (req, res) => {
    const { cart } = req.body;
    const total = cart.reduce((prev, curr) => curr.product.price * curr.qty + prev, 0);
    const totalInCents= Math.round(total * 100);

    const intent = await stripe.paymentIntents.create({
        amount: totalInCents,
        currency: 'usd',
        payment_method_types: ['card']
    });

    res.json({ clientSecret: intent.client_secret });
});

app.listen(process.env.PORT || 3001, () => 'The server listens...');
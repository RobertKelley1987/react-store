if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const fs = require('fs').promises;
const stripe = require('stripe')(process.env.STRIPE_SK);
const { v4: uuid } = require('uuid');

app.use(express.json());

// Helper fn to total cart items in cents for stripe api
const cartValInCents = cart => {
    const total = cart.reduce((prev, curr) => curr.product.price * curr.qty + prev, 0);
    return Math.round(total * 100);
}

app.post('/payment-intents', async (req, res) => {
    const { cart } = req.body;

    const intent = await stripe.paymentIntents.create({
        amount: cartValInCents(cart),
        currency: 'usd',
        payment_method_types: ['card']
    });

    res.json({ clientSecret: intent.client_secret });
});

app.post('/orders', async (req, res) => {
    console.log('hit the orders route');
    try {
        const { order } = req.body;
        // Create new order
        const orderId = uuid();
        const newOrder = { id: orderId, ...order };
        // Add new order to list of all orders and save
        const jsonOrders = await fs.readFile('orders.json');
        const orders = JSON.parse(jsonOrders);
        orders.push(newOrder);
        const updatedOrders = JSON.stringify(orders);
        await fs.writeFile('orders.json', updatedOrders);
        // Send back order num as confirmation
        res.status(200).send({ order: newOrder });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'There was an error processing your order.' });
    }
});

app.listen(process.env.PORT || 3001, () => 'The server listens...');
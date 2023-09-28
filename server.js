if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const apparelRoutes = require('./routes/apparel');
const accessoryRoutes = require('./routes/accessories');
const musicRoutes = require('./routes/music');
const artistRoutes = require('./routes/artists');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payment-intents');

app.use(express.json());

app.use('/apparel', apparelRoutes);
app.use('/accessories', accessoryRoutes);
app.use('/music', musicRoutes);
app.use('/artists', artistRoutes);
app.use('/orders', orderRoutes);
app.use('/payment-intents', paymentRoutes);

// If there is an error, send message to client and log
app.use((req, res, next, error) => {
    console.log(error);
    res.status(error.status).send({ errorMessage: error.message })
});

app.listen(process.env.PORT || 3001, () => 'The server listens...');
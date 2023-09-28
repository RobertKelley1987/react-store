if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const fs = require('fs').promises;
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

app.listen(process.env.PORT || 3001, () => 'The server listens...');
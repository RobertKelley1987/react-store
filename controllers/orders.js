const fs = require('fs').promises;
const { v4: uuid } = require('uuid');

module.exports.create = async (req, res) => {
    try {
        // Create new order
        const { order } = req.body;
        const orderId = uuid();
        const newOrder = { id: orderId, ...order };

        // Add new order to list of all orders and save
        const jsonOrders = await fs.readFile('./data/orders.json');
        const orders = JSON.parse(jsonOrders);
        orders.push(newOrder);
        const updatedOrders = JSON.stringify(orders);
        await fs.writeFile('./data/orders.json', updatedOrders);

        // Send back order num as confirmation
        res.status(200).send({ order: newOrder });
    } catch (err) {
        res.status(500).send({ error: 'There was an error processing your order.' });
    }
}
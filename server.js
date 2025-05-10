const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// API endpoint to save orders
app.post('/api/save-order', async (req, res) => {
    try {
        const orderData = req.body;
        const ordersPath = path.join(__dirname, 'data', 'orders.json');
        
        // Read existing orders
        const data = await fs.readFile(ordersPath, 'utf8');
        const orders = JSON.parse(data);
        
        // Add new order
        orders.orders.push(orderData);
        
        // Save updated orders
        await fs.writeFile(ordersPath, JSON.stringify(orders, null, 2));
        
        res.json({ success: true, orderCode: orderData.orderCode });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ success: false, error: 'Failed to save order' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
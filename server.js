const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1370831812104028183/mK_Uxf2t_-5gqh_rbNY_NqzItIkRa3IQya6XumYT7PUmCcDh7_nQzaXG1Ir4xtxW3G4_';

// Function to send order notification to Discord
async function sendOrderToDiscord(orderData) {
    try {
        const embed = {
            title: '🛍️ New Order Received',
            color: 0x00ff00,
            fields: [
                {
                    name: 'Order Code',
                    value: orderData.orderCode,
                    inline: true
                },
                {
                    name: 'Customer',
                    value: orderData.customerInfo.name,
                    inline: true
                },
                {
                    name: 'Email',
                    value: orderData.customerInfo.email,
                    inline: true
                },
                {
                    name: 'Shipping Address',
                    value: orderData.customerInfo.address,
                    inline: false
                },
                {
                    name: 'Total Amount',
                    value: `$${orderData.total.toFixed(2)}`,
                    inline: true
                }
            ],
            timestamp: new Date().toISOString()
        };

        // Add order items to the embed
        const itemsField = {
            name: 'Order Items',
            value: orderData.items.map(item => 
                `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
            ).join('\n'),
            inline: false
        };
        embed.fields.push(itemsField);

        const payload = {
            embeds: [embed]
        };

        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Discord webhook failed: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error sending order to Discord:', error);
        throw error;
    }
}

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
        
        // Send order notification to Discord
        await sendOrderToDiscord(orderData);
        
        res.json({ success: true, orderCode: orderData.orderCode });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ success: false, error: 'Failed to save order' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 

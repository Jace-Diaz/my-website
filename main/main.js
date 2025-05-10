// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartIcon = document.querySelector('.cart-count');
    if (cartIcon) {
        cartIcon.textContent = cartCount;
    }
}

// Stripe integration
const stripe = Stripe('your_publishable_key');

async function handleCheckout() {
    try {
        const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items: cart }),
        });
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            console.error(result.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Newsletter subscription
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            try {
                // Here you would typically make an API call to your backend
                console.log('Subscribing email:', email);
                alert('Thank you for subscribing!');
                e.target.reset();
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error subscribing. Please try again.');
            }
        });
    }

    // Initialize cart count
    updateCartCount();

    // Add Watches category support
    const products = window.products || {};
    products.watches = [
        { id: 101, name: 'Luxury Watch', price: 299.99, image: '/images/watch1.jpg', description: 'A premium luxury watch.' },
        { id: 102, name: 'Sport Watch', price: 149.99, image: '/images/watch2.jpg', description: 'Durable and stylish for active lifestyles.' }
    ];

    function displayWatches(watches) {
        const watchesGrid = document.getElementById('watches-grid');
        if (!watchesGrid) return;
        watchesGrid.innerHTML = watches.map(product => `
            <div class="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="h-48 bg-gray-800 flex items-center justify-center">
                    <img src="${product.image}" alt="${product.name}" class="h-24 w-24 object-contain rounded">
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-medium text-white">${product.name}</h3>
                    <p class="mt-1 text-xl font-semibold text-blue-400">$${product.price.toFixed(2)}</p>
                    <button
                        onclick='addToCart(${JSON.stringify(product)})'
                        class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }

    if (products.watches && document.getElementById('watches-grid')) {
        displayWatches(products.watches);
    }
});

window.addToCart = addToCart;
window.updateCartCount = updateCartCount; 

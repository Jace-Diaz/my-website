import { useRouter } from 'next/router';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

// Mock product data - replace with your actual product data
const products = {
  electronics: [
    { id: 1, name: 'Smartphone', price: 699.99, image: '/images/smartphone.jpg' },
    { id: 2, name: 'Laptop', price: 1299.99, image: '/images/laptop.jpg' },
    { id: 3, name: 'Headphones', price: 199.99, image: '/images/headphones.jpg' },
  ],
  clothing: [
    { id: 4, name: 'T-Shirt', price: 29.99, image: '/images/tshirt.jpg' },
    { id: 5, name: 'Jeans', price: 79.99, image: '/images/jeans.jpg' },
    { id: 6, name: 'Sweater', price: 59.99, image: '/images/sweater.jpg' },
  ],
  'home-living': [
    { id: 7, name: 'Coffee Table', price: 299.99, image: '/images/coffee-table.jpg' },
    { id: 8, name: 'Lamp', price: 89.99, image: '/images/lamp.jpg' },
    { id: 9, name: 'Cushion', price: 39.99, image: '/images/cushion.jpg' },
  ],
  sports: [
    { id: 10, name: 'Running Shoes', price: 129.99, image: '/images/shoes.jpg' },
    { id: 11, name: 'Yoga Mat', price: 49.99, image: '/images/yoga-mat.jpg' },
    { id: 12, name: 'Dumbbells', price: 79.99, image: '/images/dumbbells.jpg' },
  ],
};

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const categoryProducts = products[category as keyof typeof products] || [];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">
            {category} Products
          </h1>
          <Link href="/" className="text-indigo-600 hover:text-indigo-800">
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200">
                {/* Add actual product images here */}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-xl font-semibold text-indigo-600">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => {
                    // Add to cart functionality will be implemented here
                    console.log('Add to cart:', product);
                  }}
                  className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const categories = [
  { id: 1, name: 'Electronics', image: '/images/electronics.jpg' },
  { id: 2, name: 'Clothing', image: '/images/clothing.jpg' },
  { id: 3, name: 'Home & Living', image: '/images/home.jpg' },
  { id: 4, name: 'Sports', image: '/images/sports.jpg' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Zentic
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/store" className="text-gray-700 hover:text-indigo-600">
                Store
              </Link>
              <Link href="/socials" className="text-gray-700 hover:text-indigo-600">
                Socials
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-indigo-600">
                <ShoppingCartIcon className="h-6 w-6" />
              </Link>
              <Link href="/account" className="text-gray-700 hover:text-indigo-600">
                <UserIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to Zentic
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Discover amazing products in our carefully curated categories
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/store/${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                  <div className="h-48 bg-gray-300 group-hover:opacity-75 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Zentic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
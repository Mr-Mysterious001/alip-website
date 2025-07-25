"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCartIcon, SearchIcon, UserIcon, HeartIcon, StarIcon } from './components/Icons';

export default function Home() {
  const [dark, setDark] = useState(false);

  // On mount, check localStorage or system preference
  useEffect(() => {
    const saved = "light" //localStorage.getItem("theme");
    const prefersDark = "light"//window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);

    setDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  // Toggle dark mode
  const toggleDark = () => {
    setDark((d) => {
      const newDark = !d;
      if (newDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
      return newDark;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Dark mode toggle bubble */}
      <button
        onClick={toggleDark}
        aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-300 shadow-lg rounded-full w-14 h-14 flex items-center justify-center text-2xl hover:scale-110 transition-transform"
      >
        {dark ? "🌙" : "☀️"}
      </button>

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ALIP</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">Shop</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">Categories</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">Contact</a>
            </nav>
            
            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <SearchIcon className="h-6 w-6 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
              <UserIcon className="h-6 w-6 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
              <HeartIcon className="h-6 w-6 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Discover Amazing Products</h2>
              <p className="text-xl mb-8 text-purple-100 dark:text-purple-200">
                Shop the latest trends with unbeatable prices and fast delivery. Your perfect shopping experience starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg h-32"></div>
                  <div className="bg-white/20 rounded-lg h-32"></div>
                  <div className="bg-white/20 rounded-lg h-32"></div>
                  <div className="bg-white/20 rounded-lg h-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Shop by Category</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', icon: '📱', color: 'bg-blue-100 dark:bg-blue-900' },
              { name: 'Fashion', icon: '👕', color: 'bg-pink-100 dark:bg-pink-900' },
              { name: 'Home & Garden', icon: '🏠', color: 'bg-green-100 dark:bg-green-900' },
              { name: 'Sports', icon: '⚽', color: 'bg-orange-100 dark:bg-orange-900' },
            ].map((category, index) => (
              <div key={index} className={`${category.color} rounded-2xl p-8 text-center hover:scale-105 transition-transform cursor-pointer`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out our most popular items that customers love
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Wireless Headphones', price: '$99.99', originalPrice: '$129.99', rating: 4.8, image: '🎧' },
              { name: 'Smart Watch', price: '$199.99', originalPrice: '$249.99', rating: 4.9, image: '⌚' },
              { name: 'Laptop Backpack', price: '$49.99', originalPrice: '$69.99', rating: 4.7, image: '🎒' },
              { name: 'Coffee Maker', price: '$79.99', originalPrice: '$99.99', rating: 4.6, image: '☕' },
            ].map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-100 dark:bg-gray-700 h-48 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h4>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">{product.originalPrice}</span>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">ALIP</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your trusted online shopping destination for quality products at great prices.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Electronics</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Fashion</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Home & Garden</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Sports</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Customer Service</h5>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 ALIP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

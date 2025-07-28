'use client';

import { useState } from 'react';
import { categories, menuItems } from '@/assets/assets';
import Image from 'next/image';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('espresso');

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/menuhero.jpg')`
        }}
      >
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Discover our carefully crafted drinks and fresh pastries
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-amber-800 text-white !bg-amber-800'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200 !bg-amber-100'
                }`}
              >
                <i className={`${category.icon} text-lg`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-gray-700 text-lg">
              Made with love using the finest ingredients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                    <span className="text-xl font-bold text-amber-800">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-900 transition-colors font-semibold whitespace-nowrap cursor-pointer !bg-amber-800">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Special Offers
            </h2>
            <p className="text-gray-700 text-lg">
              Do not miss out on our limited-time deals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Happy Hour</h3>
              <p className="text-gray-700 mb-4">
                Get 20% off all drinks Monday-Friday, 2-5 PM
              </p>
              <span className="text-amber-800 font-semibold">Weekdays Only</span>
            </div>
            
            <div className="bg-amber-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-gift-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Loyalty Program</h3>
              <p className="text-gray-700 mb-4">
                Buy 9 drinks, get the 10th free! Ask about our punch cards.
              </p>
              <span className="text-amber-800 font-semibold">Always Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { categories2, menuItems2 } from '@/assets/assets';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}
interface CartItem extends MenuItem {
  quantity: number;
}
interface OrderForm {
  name: string;
  email: string;
  phone: string;
  pickupTime: string;
  specialInstructions: string;
}
export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '',
    email: '',
    phone: '',
    pickupTime: '',
    specialInstructions: ''
  });
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('drinks');

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length > 0 && orderForm.name && orderForm.email && orderForm.phone) {
      setIsOrderSubmitted(true);
      setCart([]);
      setOrderForm({
        name: '',
        email: '',
        phone: '',
        pickupTime: '',
        specialInstructions: ''
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">

      
      {/* Hero Section */}
      <section className="bg-amber-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Order Online</h1>
          <p className="text-xl md:text-2xl text-amber-100">
            Skip the line and order ahead for pickup
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {isOrderSubmitted ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-12 rounded-xl">
              <i className="ri-check-line text-6xl mb-4"></i>
              <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
              <p className="text-lg mb-4">Thank you for your order. We will have it ready for pickup soon!</p>
              <p className="text-sm">You will receive a confirmation email with pickup details.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Menu Section */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Menu</h2>
              
              {/* Category Tabs */}
              <div className="flex gap-4 mb-8">
                {categories2.map((category) => (
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
              
              {/* Menu Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems2[activeCategory as keyof typeof menuItems2].map((item) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                      <span className="text-lg font-bold text-amber-800">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-900 transition-colors font-semibold whitespace-nowrap cursor-pointer !bg-amber-800"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Cart and Order Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Cart */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6">Your Order</h3>
                  
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div className="flex-1">
                              <h4 className="font-semibold text-amber-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors cursor-pointer !bg-amber-100"
                              >
                                <i className="ri-subtract-line text-amber-800"></i>
                              </button>
                              <span className="w-8 text-center font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors cursor-pointer !bg-amber-100"
                              >
                                <i className="ri-add-line text-amber-800"></i>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center text-xl font-bold text-amber-900">
                          <span>Total:</span>
                          <span>${getTotalPrice()}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Order Form */}
                {cart.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-amber-900 mb-6">Pickup Information</h3>
                    
                    <form id="order-form" onSubmit={handleOrderSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-amber-900 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={orderForm.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-amber-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={orderForm.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-amber-900 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={orderForm.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="pickupTime" className="block text-sm font-semibold text-amber-900 mb-2">
                          Preferred Pickup Time
                        </label>
                        <input
                          type="time"
                          id="pickupTime"
                          name="pickupTime"
                          value={orderForm.pickupTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="specialInstructions" className="block text-sm font-semibold text-amber-900 mb-2">
                          Special Instructions
                        </label>
                        <textarea
                          id="specialInstructions"
                          name="specialInstructions"
                          value={orderForm.specialInstructions}
                          onChange={handleInputChange}
                          rows={3}
                          maxLength={500}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm resize-none"
                          placeholder="Any special requests or modifications..."
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">{orderForm.specialInstructions.length}/500 characters</p>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-amber-800 text-white py-4 rounded-lg hover:bg-amber-900 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer !bg-amber-800"
                      >
                        Place Order - ${getTotalPrice()}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
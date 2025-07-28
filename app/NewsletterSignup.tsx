'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-4">
          Stay Brew-tiful!
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest coffee news, seasonal specials, and exclusive promotions.
        </p>
        
        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-md mx-auto">
            <p className="font-semibold">Thank you for subscribing!</p>
            <p className="text-sm">We will keep you updated with our latest news.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors whitespace-nowrap cursor-pointer !bg-amber-800"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
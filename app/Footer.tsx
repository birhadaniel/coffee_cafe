'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Brew Bliss
            </h3>
            <p className="text-amber-100">
              Where every cup tells a story. Experience the finest coffee in a warm, welcoming atmosphere.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-amber-100 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-amber-100 hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/menu" className="text-amber-100 hover:text-white transition-colors cursor-pointer">Menu</Link></li>
              <li><Link href="/gallery" className="text-amber-100 hover:text-white transition-colors cursor-pointer">Gallery</Link></li>
              <li><Link href="/contact" className="text-amber-100 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-amber-100">
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                 G7V9+VW5,Adama
              </p>
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                +251934567856
              </p>
              <p className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                brew@gmail.com
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer !bg-amber-800">
                <i className="ri-facebook-fill text-white"></i>
              </button>
              <button className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer !bg-amber-800">
                <i className="ri-instagram-line text-white"></i>
              </button>
              <button className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer !bg-amber-800">
                <i className="ri-twitter-fill text-white"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
          <p>&copy; 2024 Brew Bliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
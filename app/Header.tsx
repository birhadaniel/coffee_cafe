'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-800">
            Brew Bliss
          </Link>
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-amber-800 transition-colors whitespace-nowrap cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-800 transition-colors whitespace-nowrap cursor-pointer">
                About
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-amber-800 transition-colors whitespace-nowrap cursor-pointer">
                Menu
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-amber-800 transition-colors whitespace-nowrap cursor-pointer">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-800 transition-colors whitespace-nowrap cursor-pointer">
                Contact
              </Link>
              <Link href="/order" className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors whitespace-nowrap cursor-pointer">
                Order Online
              </Link>
            </div>
          </nav>

          <button 
            className="md:hidden w-6 h-6 items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-amber-800 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-800 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-amber-800 transition-colors cursor-pointer">
                Menu
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-amber-800 transition-colors cursor-pointer">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-800 transition-colors cursor-pointer">
                Contact
              </Link>
              <Link href="/order" className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors text-center cursor-pointer">
                Order Online
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
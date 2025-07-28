'use client';

import { useState } from 'react';
import { galleryImages } from '@/assets/assets';
import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/galleryhero.jpg')`
        }}
      >
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Experience the warmth and beauty of Brew Bliss
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Our Coffee Story in Pictures
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              From bean to cup, discover the passion and craftsmanship that goes into every Brew Bliss experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.src.toString())}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="ri-eye-line text-3xl mb-2"></i>
                    <p className="text-lg font-semibold">{image.alt}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="bg-amber-800 absolute -top-12 right-0 text-white hover:text-gray-300 cursor-pointer"
            >
              <i className="ri-close-line text-3xl"></i>
            </button>
            <Image
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Atmosphere Highlights */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              The Brew Bliss Experience
            </h2>
            <p className="text-gray-700 text-lg">
              What makes our café special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-home-heart-line text-3xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Cozy Atmosphere</h3>
              <p className="text-gray-700">
                Warm lighting and comfortable seating create the perfect environment for relaxation and conversation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-palette-line text-3xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Artistic Craftsmanship</h3>
              <p className="text-gray-700">
                Every drink is a work of art, from intricate latte designs to perfectly balanced flavors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-smile-line text-3xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Friendly Service</h3>
              <p className="text-gray-700">
                Our passionate team is always ready to help you discover your new favorite drink.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-seedling-line text-3xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Fresh Quality</h3>
              <p className="text-gray-700">
                From bean selection to the final pour, we maintain the highest standards of quality and freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Experience It Yourself
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Photos can only capture so much. Come visit us and experience the warmth, aroma, and community that makes Brew Bliss special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 transition-colors whitespace-nowrap cursor-pointer">
              Find Us
            </Link>
            <Link href="/order" className="bg-transparent border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 hover:text-white transition-colors whitespace-nowrap cursor-pointer hover:!bg-amber-800">
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
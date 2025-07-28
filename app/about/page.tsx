'use client';

import { assets, team } from '@/assets/assets';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/abouthero.jpg')`
        }}
      >
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Brewing community, one cup at a time
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-amber-900 mb-6">
                  The Beginning of Brew Bliss
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Founded in 2018 by coffee enthusiasts Maria and David Rodriguez, Brew Bliss began as a dream to create more than just another coffee shop. We wanted to build a community hub where people could connect, create, and find comfort in exceptional coffee.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  After traveling the world and experiencing coffee cultures from Ethiopia to Colombia, we returned home with a vision: to bring the warmth and authenticity of global coffee traditions to our local community.
                </p>
                <p className="text-gray-700 text-lg">
                  Today, Brew Bliss has become a beloved gathering place where students study, professionals meet, friends catch up, and families create memories over the perfect cup of coffee.
                </p>
              </div>
              <div>
                <Image 
                  src={ assets.ourstory}
                  alt="Founders Maria and David Rodriguez"
                  className="rounded-xl shadow-lg object-cover object-top w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Everything we do is guided by our commitment to quality, community, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-2xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Sustainability</h3>
              <p className="text-gray-700">
                We source ethically from farms that prioritize environmental responsibility and fair wages.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-2xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Quality</h3>
              <p className="text-gray-700">
                Every bean is carefully selected and roasted to perfection, ensuring exceptional taste in every cup.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-community-line text-2xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Community</h3>
              <p className="text-gray-700">
                We are more than a café - we are a space where relationships flourish and ideas come to life.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-2xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Passion</h3>
              <p className="text-gray-700">
                Our love for coffee drives everything we do, from sourcing to serving each perfect cup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-700 text-lg">
              The passionate people behind your perfect cup
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{member.name}</h3>
                  <p className="text-amber-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-amber-900 mb-8">
              What Makes Brew Bliss Special
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-global-line text-xl text-amber-800"></i>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Direct Trade Relationships</h3>
                <p className="text-gray-700">
                  We work directly with farmers to ensure fair prices and sustainable practices while bringing you the freshest, highest-quality beans.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-fire-line text-xl text-amber-800"></i>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Small-Batch Roasting</h3>
                <p className="text-gray-700">
                  Our beans are roasted in small batches right here in our shop, ensuring maximum freshness and flavor in every cup.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-book-open-line text-xl text-amber-800"></i>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Coffee Education</h3>
                <p className="text-gray-700">
                  We offer cupping sessions, brewing classes, and coffee education to help you discover your perfect cup at home.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-recycle-line text-xl text-amber-800"></i>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Eco-Friendly Practices</h3>
                <p className="text-gray-700">
                  From compostable cups to recycling programs, we are committed to reducing our environmental impact while serving great coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
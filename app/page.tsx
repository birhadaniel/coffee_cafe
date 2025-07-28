'use client';
import { menu_list, person } from '@/assets/assets';
import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/homeimage.jpg')`
         }}
      >
        <div className="container mx-auto px-6 text-white">
          <div className="w-full max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Every Cup Tells a Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience the finest coffee in a warm, welcoming atmosphere that feels like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu" className="bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 transition-colors text-center whitespace-nowrap cursor-pointer">
                View Menu
              </Link>
              <Link href="/order" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-800 transition-colors text-center whitespace-nowrap cursor-pointer">
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    
      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Why Choose Brew Bliss?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Were passionate about delivering exceptional coffee experiences that bring people together.
            </p>
          </div>
              
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-cup-line text-3xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Premium Quality</h3>
              <p className="text-gray-700">
                We source only the finest beans from sustainable farms around the world, ensuring every cup is perfect.
              </p>
            </div>
                
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-3xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Crafted with Love</h3>
              <p className="text-gray-700">
                Our skilled baristas are passionate about their craft, creating beautiful drinks that taste as good as they look.
              </p>
            </div>
                
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-group-line text-3xl text-amber-800"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Community Focus</h3>
              <p className="text-gray-700">
                More than just a café, we are a gathering place where friends meet, ideas flow, and memories are made.
              </p>
            </div>
          </div>
        </div>
      </section>
    
        {/* Menu Preview */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Our Signature Drinks
            </h2>
            <p className="text-gray-700 text-lg">
              Discover our most popular coffee creations
            </p>
          </div>
              
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menu_list.map((drink, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  width={500} 
                  height={300}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-amber-900">{drink.name}</h3>
                    <span className="text-lg font-bold text-amber-800">{drink.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{drink.description}</p>
                </div>
              </div>
            ))}
          </div>
              
          <div className="text-center mt-12">
            <Link href="/menu" className="bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 transition-colors whitespace-nowrap cursor-pointer">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    
        {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-700 text-lg">
              Real experiences from our coffee-loving community
            </p>
          </div>
              
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {person.map((testimonial, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
                  <p className="text-gray-700 italic">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>   
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/contacthero.jpg')`
        }}
      >
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            We would love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-8">Get in Touch</h2>
              <p className="text-gray-700 text-lg mb-8">
                Whether you have questions about our coffee, want to book an event, or just want to say hello, we are here to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-amber-800"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Address</h3>
                    <p className="text-gray-700">
                      G7V9+VW5, Adama
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-phone-line text-xl text-amber-800"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Phone</h3>
                    <p className="text-gray-700">+251978654356</p>
                    <p className="text-gray-700">+251923415678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-xl text-amber-800"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Email</h3>
                    <p className="text-gray-700">dani@gmail.com</p>
                    <p className="text-gray-700">boy@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-time-line text-xl text-amber-800"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                      <p>Saturday: 7:00 AM - 10:00 PM</p>
                      <p>Sunday: 7:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <button className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors cursor-pointer !bg-amber-800">
                    <i className="ri-facebook-fill text-white text-xl"></i>
                  </button>
                  <button className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors cursor-pointer !bg-amber-800">
                    <i className="ri-instagram-line text-white text-xl"></i>
                  </button>
                  <button className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors cursor-pointer !bg-amber-800">
                    <i className="ri-twitter-fill text-white text-xl"></i>
                  </button>
                  <button className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors cursor-pointer !bg-amber-800">
                    <i className="ri-youtube-fill text-white text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-amber-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
                    <i className="ri-check-line text-2xl mb-2"></i>
                    <h3 className="text-lg font-semibold mb-2">Thank you for your message!</h3>
                    <p>We will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-amber-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-amber-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm resize-none"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-amber-800 text-white py-4 rounded-lg hover:bg-amber-900 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer !bg-amber-800"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Find Us</h2>
            <p className="text-gray-700 text-lg">Located in the heart of Adama</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/place/Black+Coffee/@8.5446642,39.2672554,17z/data=!3m1!4b1!4m6!3m5!1s0x164b1f0a362857bb:0x6c319b5c35f2f30d!8m2!3d8.5446642!4d39.269825!16s%2Fg%2F11qgn969yz?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brew Bliss Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-lg">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Do you offer WiFi?</h3>
              <p className="text-gray-700">Yes! We provide free high-speed WiFi for all customers. Perfect for remote work or studying.</p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Can I host events here?</h3>
              <p className="text-gray-700">Absolutely! We offer event hosting for small gatherings. Contact us at events@brewbliss.com for details.</p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Do you have vegan options?</h3>
              <p className="text-gray-700">Yes, we offer plant-based milk alternatives and vegan pastries. Just ask our baristas!</p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Is parking available?</h3>
              <p className="text-gray-700">We have street parking available, plus a small lot behind the building for customer use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
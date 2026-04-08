'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[600px] overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 hero-overlay">
        <img
          src="/images/header-ph4.avif"
          alt="Shawarma Time Kitchen"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
          <div className="hero-content text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Shawarma Time Kitchen
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md font-light">
              Experience Authentic Middle Eastern Cuisine
            </p>
            <Link
              href="/book"
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-block text-lg uppercase tracking-widest shadow-2xl hover-lift"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 md:h-full min-h-96 overflow-hidden rounded-2xl shadow-2xl group scroll-animate-left">
              <img
                src="/images/f5.png"
                alt="Shawarma"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="scroll-animate-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                We Are Shawarma Time Kitchen
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our restaurant is inspired by the rich heritage of Middle Eastern cuisine, offering a delicious range of
                dishes such as shawarma, kebab, and the beloved mandy rice served with tender chicken or lamb.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Every bite is crafted with care, using only the freshest ingredients. Don't forget to try our freshly made sandwiches
                and cool down with our selection of fresh juices.
              </p>
              <Link
                href="/book"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-block text-lg uppercase tracking-wider hover-lift"
              >
                Book Your Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-24 md:py-32 bg-white scroll-animate">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16 scroll-animate-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Specialties</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our delicious menu of authentic Middle Eastern dishes crafted with passion and the finest ingredients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 scroll-animate" style={{ animationDelay: '0s' }}>
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 h-24 flex items-center justify-center">
                <span className="text-6xl">🌯</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Shawarma</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tender meat cooked on a vertical spit, served with fresh vegetables and tahini sauce
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 scroll-animate" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 h-24 flex items-center justify-center">
                <span className="text-6xl">🍖</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Kebab</h3>
                <p className="text-gray-600 leading-relaxed">
                  Marinated and grilled to perfection, bursting with flavors and spices
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 scroll-animate" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 h-24 flex items-center justify-center">
                <span className="text-6xl">🍚</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Mandy Rice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fragrant rice with tender chicken or lamb, a truly satisfying meal
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/menu"
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-block text-lg uppercase tracking-wider scroll-animate"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-white py-20 scroll-animate">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 scroll-animate-left">Ready to Order?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto scroll-animate-right">
            Place your order online and enjoy delicious Middle Eastern cuisine delivered to your door in no time
          </p>
          <Link
            href="/book"
            className="bg-white text-orange-500 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 inline-block text-lg uppercase tracking-wider shadow-xl scroll-animate hover-lift"
          >
            Order Online Now
          </Link>
        </div>
      </section>
    </main>
  )
}

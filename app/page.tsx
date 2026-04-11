'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const menuItems = [
  { name: 'CHICKEN SHAWARMA',  img: '/images/f1.png', price: 'RM 12', popular: true,  category: 'Shawarmas'    },
  { name: 'MIX GRILL PLATTER', img: '/images/f5.png', price: 'RM 35', popular: false, category: 'Grill & Kebab' },
  { name: 'BEEF KEBAB WRAP',   img: '/images/f6.png', price: 'RM 15', popular: false, category: 'Grill & Kebab' },
  { name: 'LAMB MANDY',        img: '/images/f2.png', price: 'RM 28', popular: true,  category: 'Mandy Rice'   },
  { name: 'FRESH ORANGE JUICE',img: '/images/f8.png', price: 'RM 8',  popular: false, category: 'Fresh Drinks' },
  { name: 'BEEF SHAWARMA',     img: '/images/f1.png', price: 'RM 14', popular: false, category: 'Shawarmas'    },
  { name: 'ARABIC SALAD',      img: '/images/f4.png', price: 'RM 10', popular: false, category: 'Salads'       },
  { name: 'CHICKEN MANDY',     img: '/images/f3.png', price: 'RM 22', popular: false, category: 'Mandy Rice'   },
]

const categories = [
  { id: 'All',         icon: '🍽️' },
  { id: 'Shawarmas',   icon: '🌯' },
  { id: 'Mandy Rice',  icon: '🍚' },
  { id: 'Salads',      icon: '🥗' },
  { id: 'Grill & Kebab', icon: '🥩' },
  { id: 'Fresh Drinks', icon: '🥤' },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = menuItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  )

  return (
    <main style={{ background: 'var(--bg-page)', color: 'var(--txt-primary)' }} className="-mt-24 pt-24 font-sans transition-colors duration-300">

      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col items-center justify-start"
        style={{
          minHeight: 'clamp(500px, 80vh, 800px)',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,107,53,0.14) 0%, transparent 70%), var(--bg-page)',
          transition: 'background 0.35s ease',
        }}
      >
        {/* glow orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
          style={{
            width: 'clamp(400px,70vw,800px)', height: 'clamp(400px,70vw,800px)',
            background: 'radial-gradient(circle, rgba(255,107,53,0.10) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Category pills */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center px-4" style={{ marginTop: '2rem' }}>
          <div className="text-xs font-black tracking-[0.2em] text-orange-600 uppercase mb-4">Select Category</div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16">
            {['Shawarma', 'Mandy', 'Grill', 'Drinks'].map((cat, i) => (
              <button
                key={i}
                className={`px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm transition-all shadow-sm ${
                  i === 0
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'border border-gray-200 text-gray-700 hover:text-orange-600 hover:shadow-md'
                }`}
                style={i !== 0 ? { background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--txt-secondary)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Arc – desktop only */}
          <div
            className="relative border-t-2 border-dashed border-orange-200 rounded-t-full hidden md:block"
            style={{ width: 'min(600px,70vw)', height: 'min(300px,35vw)' }}
          >
            {['Chicken Shawarma', 'Beef Kebab', 'Mandy Rice', 'Mix Grill', 'Fresh Juices'].map((label, i) => {
              const positions = [5, 25, 50, 75, 95]
              const rotations = [-45, -22.5, 0, 22.5, 45]
              const tops = ['8%', '-5%', '-10%', '-5%', '8%']
              return (
                <div
                  key={i}
                  className="absolute font-bold text-xs uppercase tracking-wide px-2"
                  style={{
                    top: tops[i], left: `${positions[i]}%`,
                    transform: `translateX(-50%) rotate(${rotations[i]}deg)`,
                    color: i === 0 ? '#ea580c' : 'var(--txt-secondary)',
                    background: 'var(--bg-page)',
                    transition: 'color 0.35s ease, background 0.35s ease',
                  }}
                >
                  {label}
                </div>
              )
            })}
            {[5, 25, 50, 75, 95].map((pos, i) => (
              <div
                key={i}
                className={`absolute rounded-full shadow-sm ${i === 0 ? 'w-4 h-4 ring-4 ring-orange-100' : 'w-3 h-3'}`}
                style={{
                  background: i === 0 ? '#ea580c' : 'var(--txt-muted)',
                  top: `${Math.sin(Math.PI - (pos / 100) * Math.PI) * -100}%`,
                  left: `${pos}%`,
                  transform: 'translate(-50%,-50%)',
                  marginTop: i === 2 ? '-4px' : (i === 0 || i === 4) ? '-12px' : '-8px',
                }}
              />
            ))}
          </div>

          {/* Central dish image */}
          <div
            className="absolute rounded-full overflow-hidden border-[10px] md:border-[14px] border-white group"
            style={{
              top: 'clamp(160px,25vw,260px)',
              width: 'clamp(300px,50vw,800px)',
              height: 'clamp(300px,50vw,800px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.14)',
              background: 'var(--bg-card)',
              borderColor: 'var(--bg-surface)',
            }}
          >
            <Image
              src="/images/f1.png"
              alt="Delicious Shawarma"
              fill
              className="object-contain p-6 md:p-10 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
              priority
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[30px] md:translate-y-[60px] xl:translate-y-[80px]">
              <Link
                href="/menu"
                className="bg-orange-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-orange-700 transition-all shadow-xl hover:-translate-y-1 inline-block"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. ORDER BAR ═════════════════════════════════════════════ */}
      <section className="relative z-20 w-full flex justify-center px-4" style={{ marginTop: '-2rem' }}>
        <div className="bg-black rounded-full p-2 flex flex-col md:flex-row shadow-2xl items-stretch md:items-center w-full max-w-4xl text-white gap-2 md:gap-0">
          <div className="bg-[#cd4f27] px-6 py-3 rounded-full font-bold text-base whitespace-nowrap w-full md:w-auto text-center uppercase tracking-wide">
            Shawarma Time
          </div>
          <div className="flex-grow px-4 py-3 flex items-center gap-2 min-w-0">
            <input
              type="text"
              placeholder="City, State or Zip"
              className="bg-transparent outline-none w-full placeholder-gray-400 text-white text-sm"
              style={{ border: 'none', background: 'transparent', padding: 0 }}
            />
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <Link href="/book" className="bg-white text-black px-6 py-3 rounded-full font-bold whitespace-nowrap hover:bg-gray-100 transition-colors w-full md:w-auto uppercase text-xs md:text-sm tracking-wider text-center">
            Order Online
          </Link>
        </div>
      </section>

      {/* ══ 3. LOCATIONS ═════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'var(--bg-surface)', transition: 'background 0.35s ease' }}>
        <div className="absolute right-0 top-10 w-24 h-48 md:w-32 md:h-64 opacity-30 hidden md:block">
          <Image src="/images/f2.png" alt="" fill className="object-contain" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-center font-bold uppercase tracking-wider mb-10" style={{ color: 'var(--txt-primary)', fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
            Visit Any of Our Locations
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-6 md:gap-12 font-bold text-xs md:text-sm tracking-wider uppercase mb-12 border-b pb-4 overflow-x-auto" style={{ borderColor: 'var(--border)' }}>
            {['Cyberjaya', 'Kuala Lumpur', 'Putrajaya'].map((loc, i) => (
              <button
                key={loc}
                className={`relative pb-4 whitespace-nowrap transition-colors ${i === 0 ? 'text-orange-600' : 'hover:text-orange-600'}`}
                style={{ color: i === 0 ? '#ea580c' : 'var(--txt-muted)' }}
              >
                {loc}
                {i === 0 && (
                  <div className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-600 rounded-full ring-4 ring-orange-200" />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Scooter SVG */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-48 h-48 md:w-72 md:h-72 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                  <circle cx="100" cy="100" r="90" fill="rgba(255,107,53,0.08)" />
                  <path d="M50 140 A20 20 0 1 0 90 140 A20 20 0 1 0 50 140 Z" fill="#333" />
                  <path d="M130 140 A20 20 0 1 0 170 140 A20 20 0 1 0 130 140 Z" fill="#333" />
                  <rect x="70" y="100" width="80" height="40" rx="10" fill="#f05a28" />
                  <rect x="75" y="80" width="40" height="40" fill="#f05a28" />
                  <rect x="130" y="70" width="20" height="70" fill="#ddd" />
                  <circle cx="95" cy="50" r="15" fill="#fca5a5" />
                  <path d="M85 35 Q95 20 105 35 Z" fill="#333" />
                  <text x="75" y="125" fill="white" fontSize="10" fontWeight="bold">SHAWARMA</text>
                </svg>
              </div>
            </div>

            {/* Location details */}
            <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-2" style={{ color: 'var(--txt-primary)' }}>Cyberjaya</h3>
                <p className="mb-5 font-medium text-sm leading-relaxed" style={{ color: 'var(--txt-secondary)' }}>
                  Jalan Teknokrat 6, Cyberjaya,<br />63000 Cyberjaya, Selangor
                </p>
                <div className="mb-5">
                  <h4 className="font-bold uppercase tracking-wider text-xs mb-1" style={{ color: 'var(--txt-primary)' }}>Hours of Operation</h4>
                  <p className="text-sm" style={{ color: 'var(--txt-secondary)' }}>Every Day: 10:00am – 4:00am</p>
                </div>
                <div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  011-3903 9304
                </div>
              </div>

              {/* Map placeholder */}
              <div className="flex-1 rounded-xl overflow-hidden relative min-h-[160px] md:min-h-[200px]" style={{ background: 'var(--bg-muted)', border: '1px solid var(--border)' }}>
                <Image src="/images/hero-bg.jpg" alt="Map" fill className="object-cover opacity-20 grayscale" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex justify-center items-center text-white shadow-xl animate-bounce text-lg">📍</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. OUR MENU ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative" style={{ background: 'var(--bg-muted)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-center font-bold uppercase tracking-wider mb-10" style={{ color: 'var(--txt-primary)', fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
            Our Menu
          </h2>

          {/* Category filter */}
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 font-bold text-xs md:text-sm tracking-wider uppercase mb-10 md:mb-12">
            {categories.map(cat => (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex flex-col items-center gap-2 cursor-pointer group transition-colors"
                style={{ color: activeCategory === cat.id ? '#ea580c' : 'var(--txt-muted)' }}
              >
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-transform"
                  style={{ background: 'var(--bg-card)', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}
                >
                  {cat.icon}
                </div>
                <span>{cat.id}</span>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-4 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group relative"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
              >
                {item.popular && (
                  <div className="absolute top-3 right-3 w-5 h-5 md:w-6 md:h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs z-10 shadow-md">★</div>
                )}
                <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Image src={item.img} alt={item.name} fill className="object-contain" />
                </div>
                <h3 className="font-bold text-xs md:text-sm lg:text-base uppercase tracking-wide mb-1" style={{ color: 'var(--txt-primary)' }}>
                  {item.name}
                </h3>
                <p className="text-orange-600 font-bold text-xs md:text-sm mb-3">STARTING {item.price}</p>
                <Link
                  href="/menu"
                  className="bg-gray-100 font-bold uppercase tracking-wider text-xs px-4 md:px-6 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors w-full mt-auto"
                  style={{ background: 'var(--bg-muted)', color: 'var(--txt-primary)' }}
                >
                  Order Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. STORY SECTION ═════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#111115', color: '#fff' }}>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] mix-blend-overlay opacity-15 bg-cover bg-center" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Polaroid collage */}
            <div className="w-full md:w-1/2 relative h-64 md:h-[500px] flex-shrink-0">
              <div className="absolute top-0 left-0 w-44 md:w-64 h-56 md:h-80 bg-white p-2 md:p-3 shadow-2xl rounded-sm -rotate-6">
                <div className="relative w-full h-[85%] overflow-hidden">
                  <Image src="/images/Grils.jpg" alt="Grill" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute bottom-4 left-8 md:bottom-10 w-44 md:w-64 h-56 md:h-80 bg-white p-2 md:p-3 shadow-2xl rounded-sm rotate-3">
                <div className="relative w-full h-[85%] overflow-hidden">
                  <Image src="/images/client1.jpg" alt="Customer" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 md:right-10 w-48 md:w-72 h-44 md:h-64 bg-black p-3 md:p-4 shadow-2xl rounded-xl border border-gray-800 flex flex-col justify-center items-center">
                <span className="text-[#f05a28] font-bold text-lg md:text-2xl uppercase tracking-[0.3em] opacity-80 mb-3 md:mb-4 text-center">Authentic<br/>Taste</span>
                <div className="w-16 h-16 md:w-24 md:h-24 relative">
                  <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest leading-tight mb-6 md:mb-8 text-white">
                Authentic Middle Eastern Food That Everyone Will Love
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                Shawarma Time Kitchen is the locally-owned place for delicious, made-from-scratch middle eastern cuisine served in an upscale, comfortable, family-friendly environment.
              </p>
              <Link href="/about" className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-full uppercase tracking-wider text-sm transition-all hover:-translate-y-1 shadow-lg">
                Our Story
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 6. PROMOS ════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 border-b-4 md:border-b-8 border-orange-600 transition-colors duration-300" style={{ background: 'var(--bg-surface)' }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': '1', borderColor: 'var(--border)' } as React.CSSProperties}>

            {[
              { img: '/images/Grils-2.jpg', title: 'Catering & Events', text: 'We cater business lunches, schools, and events. We will cater our delicious dishes for parties from 50 to 500.' },
              { img: '/images/client2.jpg', title: 'Work With Us', text: 'At Shawarma Time, our people are our greatest asset. Want to join our growing team?' },
              { img: '/images/Macarona-Bechamel-12.jpg', title: 'Own A Franchise', text: 'Aside from being part of one of the best cuisines, we offer professionals the opportunity to operate a franchise.' },
            ].map((promo, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-6 py-4 sm:py-0 sm:px-6 md:px-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-4 border-white ring-1" style={{ borderColor: 'var(--border)' }}>
                  <Image src={promo.img} alt={promo.title} width={80} height={80} className={`object-cover w-full h-full${i === 1 ? ' grayscale' : ''}`} />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base lg:text-lg uppercase tracking-wider mb-1 md:mb-2" style={{ color: 'var(--txt-primary)' }}>{promo.title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--txt-secondary)' }}>{promo.text}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}

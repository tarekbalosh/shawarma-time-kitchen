'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-orange-500">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 relative site-logo">
              <img
                src="/images/logo.png"
                alt="Shawarma Time Kitchen Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              About
            </Link>
            <Link
              href="/book"
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              Book Order
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              href="/book"
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-block text-sm uppercase tracking-wider"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block py-2 text-gray-700 hover:text-orange-500"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-orange-500"
            >
              About
            </Link>
            <Link
              href="/book"
              className="block py-2 text-gray-700 hover:text-orange-500"
            >
              Book Order
            </Link>
            <Link
              href="/book"
              className="block mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-center font-semibold"
            >
              Order Online
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

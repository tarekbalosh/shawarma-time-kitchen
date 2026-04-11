'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme]       = useState<'light' | 'dark'>('light')

  /* ── Persist & apply theme ── */
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'light' | 'dark' | null) ?? 'light'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  /* ── Scroll shadow ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const isDark = theme === 'dark'

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4 md:pt-6'}`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <nav
            style={{
              background: 'var(--hdr-pill-bg)',
              boxShadow: 'var(--hdr-pill-shadow)',
              transition: 'background 0.35s ease, box-shadow 0.35s ease',
            }}
            className={`relative flex justify-between items-center rounded-full border border-[var(--border)] transition-all duration-300 ${
              scrolled ? 'py-2 px-4 md:px-6' : 'py-3 px-4 md:py-4 md:px-8'
            }`}
          >
            {/* ── Logo ── */}
            <Link href="/" className="relative z-10 flex items-center group flex-shrink-0">
              <div
                className={`transition-all duration-300 rounded-full border-4 border-white bg-black flex items-center justify-center overflow-hidden shadow-xl ${
                  scrolled ? 'w-12 h-12 md:w-16 md:h-16 -mb-4 md:-mb-6' : 'w-16 h-16 md:w-24 md:h-24 -mb-8 md:-mb-12'
                }`}
              >
                <div className="w-full h-full relative p-1 bg-black flex flex-col items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Shawarma Time Kitchen"
                    fill
                    className="object-contain p-1 invert grayscale"
                  />
                </div>
              </div>
            </Link>

            {/* ── Desktop nav links ── */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold tracking-wider uppercase"
              style={{ color: 'var(--hdr-link)' }}>
              <Link href="/"     className="hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/menu" className="hover:text-orange-500 transition-colors">Our Menu</Link>
              <Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
              <Link href="/book"  className="hover:text-orange-500 transition-colors">Book Order</Link>
            </div>

            {/* ── Desktop right side: theme toggle + CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 flex-shrink-0"
                style={{ background: isDark ? 'linear-gradient(135deg,#ff6b35,#ff8c42)' : '#e5e7eb' }}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center text-[10px] ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
                >
                  {isDark ? '🌙' : '☀️'}
                </span>
              </button>

              {/* CTA */}
              <Link
                href="/book"
                className="bg-[#f05a28] hover:bg-[#d94a1b] text-white px-4 xl:px-6 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 group text-sm uppercase tracking-wider whitespace-nowrap"
              >
                Order Online
                <div className="w-5 h-5 relative group-hover:translate-x-1 transition-transform">
                  <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg>
                </div>
              </Link>
            </div>

            {/* ── Mobile right: theme toggle + hamburger ── */}
            <div className="lg:hidden flex items-center gap-3">
              {/* mobile theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                className="w-9 h-9 rounded-full flex items-center justify-center text-base border transition-all duration-300"
                style={{
                  background: isDark ? 'rgba(255,107,53,0.15)' : '#f3f4f6',
                  borderColor: isDark ? 'rgba(255,107,53,0.3)' : 'rgba(0,0,0,0.1)',
                }}
              >
                {isDark ? '🌙' : '☀️'}
              </button>

              {/* hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ color: 'var(--hdr-link)', background: 'transparent' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ══ Mobile full-screen drawer ════════════════════════════════ */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] flex flex-col transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'var(--hdr-pill-bg)', borderLeft: '1px solid var(--border)' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="w-10 h-10 relative rounded-full overflow-hidden bg-black p-1 flex-shrink-0">
            <Image src="/images/logo.png" alt="Logo" fill className="object-contain invert grayscale" />
          </div>
          <span className="font-bold text-sm uppercase tracking-widest" style={{ color: 'var(--txt-primary)' }}>Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'var(--bg-muted)', color: 'var(--txt-primary)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col flex-1 p-4 gap-1 overflow-y-auto">
          {[
            { href: '/',      label: 'Home',       icon: '🏠' },
            { href: '/menu',  label: 'Our Menu',   icon: '🌯' },
            { href: '/about', label: 'About Us',   icon: '👨‍🍳' },
            { href: '/book',  label: 'Book Order', icon: '📋' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-orange-500/10 hover:text-orange-500"
              style={{ color: 'var(--txt-primary)' }}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          ))}

          <div className="mt-auto pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#f05a28] hover:bg-[#d94a1b] text-white p-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all"
            >
              Order Online 🔔
            </Link>

            {/* Theme toggle in drawer */}
            <button
              onClick={toggleTheme}
              className="mt-3 w-full flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200"
              style={{ background: 'var(--bg-muted)', color: 'var(--txt-primary)' }}
            >
              {isDark ? '☀️  Switch to Light Mode' : '🌙  Switch to Dark Mode'}
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

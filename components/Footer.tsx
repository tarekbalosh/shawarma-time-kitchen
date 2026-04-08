'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Shawarma Time Kitchen</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing authentic Middle Eastern flavors to your table with fresh ingredients and traditional recipes.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/share/173T6mQUNU/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-facebook text-white"></i>
              </a>
              <a href="https://vm.tiktok.com/ZSSsT2Q6V/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-tiktok text-white"></i>
              </a>
              <a href="https://www.instagram.com/shawarmatime_lover?igsh=YnNzaDVrd2x5cXp5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <i className="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  → Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  → Book Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4 text-sm">
              <p className="text-gray-300">
                <span className="text-orange-400 font-semibold">📞 Phone:</span>
                <br />
                <a href="tel:0113903304" className="hover:text-orange-400 transition-colors">
                  011-3903 9304
                </a>
              </p>
              <p className="text-gray-300">
                <span className="text-orange-400 font-semibold">💬 WhatsApp:</span>
                <br />
                <a href="https://wa.me/601139039304" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  Send Message
                </a>
              </p>
              <p className="text-gray-300">
                <span className="text-orange-400 font-semibold">📍 Location:</span>
                <br />
                <a href="https://www.google.com/maps?ll=3.055409,101.75881&z=16&t=m&hl=en&gl=MY" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  View on Maps
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-wider">Hours</h3>
            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500">
              <p className="text-gray-300 text-sm">
                <span className="font-semibold text-white">Every Day</span>
              </p>
              <p className="text-orange-400 font-bold mt-2">10:00 AM - 4:00 AM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} <span className="text-orange-400 font-semibold">Shawarma Time Kitchen</span>. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              Made with <span className="text-orange-500">❤</span> for authentic dining
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

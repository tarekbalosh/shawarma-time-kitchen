'use client'

import { FormEvent, useState } from 'react'

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    order: '',
    deliveryType: 'pick_up',
    location: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate delivery location
    if (formData.deliveryType === 'delivery' && !formData.location.trim()) {
      alert('Location is required for delivery')
      return
    }

    // Create WhatsApp message
    const message = `Hello! I would like to place an order.\n\nDetails:\nName: ${formData.name}\nPhone: ${formData.phone}\nOrder: ${formData.order}\nDelivery Type: ${formData.deliveryType}${formData.location ? `\nLocation: ${formData.location}` : ''}`

    // WhatsApp API URL
    const phoneNumber = '601139039304'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')

    // Reset form
    setFormData({
      name: '',
      phone: '',
      order: '',
      deliveryType: 'pick_up',
      location: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-display">Book Your Order</h1>
          <p className="text-lg mt-2 opacity-90">Fast & Convenient Ordering</p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 md:py-32 section-surface">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 font-display">Place Your Order</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white text-gray-900"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white text-gray-900"
                  />
                </div>

                <div>
                  <textarea
                    id="order"
                    value={formData.order}
                    onChange={handleChange}
                    placeholder="Your Order (describe what you want)"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white text-gray-900"
                  />
                </div>

                <div>
                  <select
                    id="deliveryType"
                    value={formData.deliveryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 bg-white text-gray-900"
                  >
                    <option value="pick_up">Pick Up</option>
                    <option value="delivery">Delivery (RM5 fee)</option>
                  </select>
                </div>

                {formData.deliveryType === 'delivery' && (
                  <div>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Your Location"
                      className="w-full px-4 py-3 border border-orange-500 rounded-lg focus:outline-none focus:border-orange-600 bg-white text-gray-900"
                    />
                    <p className="text-orange-500 font-semibold mt-2">⚠️ Location is required for delivery</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Send Order via WhatsApp
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1465942127243!2d101.75623497371583!3d3.0554146537243234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc359acc10ccd5%3A0xecd58f79b0d8636a!2sShawarma%20Time%20kitchen!5e0!3m2!1sen!2smy!4v1754213825433!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a 
                href="tel:0113903304"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                011-3903 9304
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Us</h3>
              <a 
                href="https://wa.me/601139039304"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                Send Message
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-gray-600">Everyday<br />10:00 AM - 4:00 AM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

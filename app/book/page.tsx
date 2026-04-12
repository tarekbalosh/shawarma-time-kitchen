'use client'

import { FormEvent, useState, useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    order: '',
    deliveryType: 'pick_up',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subtotal, setSubtotal] = useState(0)

  // Link Menu cart with Book order form
  useEffect(() => {
    const savedCart = localStorage.getItem('stk_cart')
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        if (Array.isArray(parsed) && parsed.length > 0) {
          const orderText = parsed.map((item: any) => `${item.quantity}x ${item.name}`).join('\n')
          
          setFormData(prev => {
            if (!prev.order) return { ...prev, order: orderText }
            return prev
          })

          const total = parsed.reduce((sum: number, item: any) => {
             const m = item.price.match(/RM\s*(\d+(?:\.\d+)?)/i)
             const priceNum = m ? Number(m[1]) : 0
             return sum + (priceNum * item.quantity)
          }, 0)
          setSubtotal(total)
        }
      } catch(e) {}
    }
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate delivery location
    if (formData.deliveryType === 'delivery' && !formData.location.trim()) {
      alert('Location is required for delivery')
      return
    }

    setIsSubmitting(true)

    // Simulate small processing for UX
    setTimeout(() => {
      const message = `Hello! I would like to place an order.\n\nDetails:\nName: ${formData.name}\nPhone: ${formData.phone}\nOrder: ${formData.order}\nDelivery Type: ${formData.deliveryType === 'delivery' ? 'Delivery (RM5)' : 'Pick Up'}${formData.location ? `\nLocation: ${formData.location}` : ''}`
      
      const phoneNumber = '601139039304' // Official WhatsApp routing
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

      window.open(whatsappUrl, '_blank')

      setFormData({
        name: '', phone: '', order: '', deliveryType: 'pick_up', location: ''
      })
      setIsSubmitting(false)
    }, 600)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  // UI Animation Sequences
  const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } }
  const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300 overflow-x-hidden font-sans">
      
      {/* ══ HERO SECTION ══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-gray-50 dark:from-[#0f172a] dark:via-slate-900 dark:to-slate-800 border-b border-gray-100 dark:border-slate-800">
        {/* Soft Accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] bg-orange-500/10 dark:bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-orange-400/5 dark:bg-orange-500/5 blur-[80px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="container mx-auto px-6 max-w-4xl text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> Easy Ordering
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-gray-50 tracking-tighter leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Book Your <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Order.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fill out your details below and seamlessly forward your customized order request directly to our culinary team via WhatsApp.
          </p>
        </motion.div>
      </section>

      {/* ══ BOOKING FORM & SUMMARY ══ */}
      <section className="py-16 md:py-24 relative -mt-12 z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            
            {/* Left: Contact Info Form */}
            <motion.div variants={fadeUp} className="lg:col-span-7 bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-xl border border-gray-100 dark:border-slate-700/50 p-6 sm:p-10 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>Customer Details</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">Please provide your contact information to prepare your order pickup or delivery.</p>
              
              <form id="bookForm" onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col group relative">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-orange-500 transition-colors">Full Name</label>
                    <input
                      type="text" id="name" value={formData.name} onChange={handleChange} required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl text-sm md:text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col group relative">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-orange-500 transition-colors">Phone Number</label>
                    <input
                      type="tel" id="phone" value={formData.phone} onChange={handleChange} required
                      placeholder="012-345 6789"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl text-sm md:text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Delivery Type Dropdown */}
                <div className="flex flex-col group relative">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-orange-500 transition-colors">Fulfillment Method</label>
                  <div className="relative">
                    <select
                      id="deliveryType" value={formData.deliveryType} onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl text-sm md:text-base text-gray-900 dark:text-gray-100 appearance-none focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 cursor-pointer font-medium"
                    >
                      <option value="pick_up">🏃‍♂️ Pick Up In-Store</option>
                      <option value="delivery">🛵 Delivery Engine (RM5 fee)</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                  </div>
                </div>

                {/* Animated Location Field Dropdown */}
                <AnimatePresence>
                  {formData.deliveryType === 'delivery' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col group relative pt-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-2">
                          Delivery Address <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        </label>
                        <textarea
                          id="location" value={formData.location} onChange={handleChange}
                          placeholder="House No., Street Name, Postal Code..."
                          rows={2}
                          className="w-full px-5 py-4 bg-orange-50/50 dark:bg-orange-500/5 border border-orange-200 dark:border-orange-500/30 rounded-xl text-sm md:text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 resize-none shadow-inner"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>

            {/* Right: Order Summary Module ("Cart" UI Mimic) */}
            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-xl border border-gray-100 dark:border-slate-700/50 overflow-hidden flex flex-col transition-all duration-300">
                <div className="bg-slate-50 dark:bg-slate-800/80 px-6 sm:px-8 py-5 border-b border-gray-100 dark:border-slate-700/50 flex justify-between items-center">
                  <h3 className="font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs flex items-center gap-3">
                    <span className="text-xl bg-orange-100 dark:bg-orange-900/50 w-8 h-8 rounded-full flex items-center justify-center border border-orange-200 dark:border-orange-700/50">🛒</span> Order Summary
                  </h3>
                </div>
                
                <div className="p-6 sm:p-8 flex-1 flex flex-col group relative">
                  <label htmlFor="order" className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 group-focus-within:text-orange-500 transition-colors">
                    Required Items & Instructions
                  </label>
                  <textarea
                    id="order" form="bookForm" value={formData.order} onChange={handleChange} required
                    placeholder="e.g., 2x Shawarma Chicken (M)&#10;1x Arabic Salad&#10;Please provide extra garlic sauce!"
                    className="w-full flex-1 min-h-[140px] px-5 py-4 bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl text-sm md:text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 resize-y leading-relaxed"
                  />
                  
                  {/* Subtle Cart Breakdown visual to satisfy cart aesthetic requirement safely */}
                  <div className="mt-8 pt-6 border-t border-dashed border-gray-200 dark:border-slate-700 space-y-3 font-sans">
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                      <span>Order Subtotal</span>
                      <span>{subtotal > 0 ? `RM ${subtotal.toFixed(2)}` : 'To be calculated'}</span>
                    </div>
                    {formData.deliveryType === 'delivery' && (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                        <span>Delivery Fee</span>
                        <span className="text-orange-600 dark:text-orange-400">RM 5.00</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 mt-auto bg-white dark:bg-[#1e293b]">
                  <motion.button
                    form="bookForm" type="submit" disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-4 md:py-5 rounded-xl font-bold uppercase tracking-widest text-xs shadow-[0_12px_24px_rgba(255,107,53,0.3)] hover:shadow-[0_16px_32px_rgba(255,107,53,0.4)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z"/></svg>
                        Send via WhatsApp
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
              
              {/* Map Layout Module */}
              <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-lg border border-gray-100 dark:border-slate-700/50 overflow-hidden h-[180px] md:h-[220px] relative group transition-all duration-300 p-2">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                  <iframe
                    src="https://maps.google.com/maps?q=12%20Jalan%20Suadamai%201%2F3%20Tun%20Hussein%20Onn%20Cheras&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 z-10">
                    📍 Locate Us
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </section>
      
      {/* ══ FOOTER INFO SECTION ══ */}
      <section className="bg-orange-50 dark:bg-[#0f172a] py-20 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-slate-800">
            <motion.div variants={fadeUp} className="text-center pt-8 md:pt-0 group">
              <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-slate-700">📞</div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100 mb-3">Call Us</h3>
              <a href="tel:0113903304" className="text-orange-600 dark:text-orange-500 hover:text-orange-700 font-semibold transition-colors text-lg">011-3903 9304</a>
            </motion.div>
            
            <motion.div variants={fadeUp} className="text-center pt-8 md:pt-0 group">
              <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-slate-700">💬</div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100 mb-3">WhatsApp Us</h3>
              <a href="https://wa.me/601139039304" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-500 hover:text-orange-700 font-semibold transition-colors text-lg">Send Message</a>
            </motion.div>
            
            <motion.div variants={fadeUp} className="text-center pt-8 md:pt-0 group">
              <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-slate-700">🕐</div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100 mb-3">Opening Hours</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Open 24 Hours</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
    </main>
  )
}

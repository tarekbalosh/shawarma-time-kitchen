import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-700 dark:bg-[#0f172a] dark:text-gray-300 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden pt-24 min-h-screen transition-all duration-300 ease-in-out">
      
      {/* ══ SECTION 1: HERO (About Us) ══ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-gray-50 dark:from-[#0f172a] dark:via-slate-900 dark:to-slate-800 transition-colors duration-500 pt-28 pb-20 md:py-32 border-b border-gray-100 dark:border-slate-800/50">
        
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] bg-orange-500/10 dark:bg-orange-500/5 blur-[100px] rounded-full pointer-events-none overflow-hidden" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] rounded-full pointer-events-none overflow-hidden" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Block: Title & Text */}
          <div className="flex flex-col items-start justify-center text-left scroll-animate-left relative z-20">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl text-gray-900 dark:text-white mb-8 tracking-tighter leading-[1.05] font-bold drop-shadow-sm transition-colors duration-300" style={{ fontFamily: '"Playfair Display", serif' }}>
              About Us.
            </h1>
            
            <div className="space-y-6 relative group">
              {/* Decorative accent line */}
              <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full hidden sm:block shadow-sm scale-y-95 group-hover:scale-y-100 transition-transform duration-500"></div>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:pl-8">
                Our restaurant is inspired by the rich heritage of Middle Eastern cuisine, offering a delicious range of dishes such as shawarma, kebab, and the beloved mandy rice served with tender chicken or lamb. Every bite is crafted with care, using only the freshest ingredients.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:pl-8">
                Don&apos;t forget to try our freshly made sandwiches and cool down with our selection of fresh juices. We pride ourselves on authentic recipes passed down through generations, combined with modern culinary techniques to bring you an unforgettable dining experience.
              </p>
            </div>
          </div>

          {/* Right Block: Feature Image */}
          <div className="scroll-animate-right relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center group mt-6 lg:mt-0">
            {/* Subtle glow rotating or expanding on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-transparent dark:from-orange-500/10 blur-[50px] rounded-full scale-75 group-hover:scale-105 transition-transform duration-700 ease-in-out z-0"></div>
            
            <Image 
              src="/images/about-img.png" 
              alt="Shawarma Time Heritage" 
              fill 
              className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:-translate-y-3 group-hover:drop-shadow-[0_25px_45px_rgba(255,107,53,0.25)] transition-all duration-700 ease-out z-10 scale-95 group-hover:scale-100"
              priority
            />
          </div>

        </div>
      </section>

      {/* ══ SECTION 2: VALUES SPLIT ══ */}
      <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-24 border-t border-gray-200 dark:border-slate-800 transition-all duration-300 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Text Block */}
          <div className="scroll-animate-left flex flex-col items-start pr-0">
            <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-orange-500 mb-6">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-gray-50 mb-10 leading-[1.1] tracking-tight font-bold transition-all duration-300 ease-in-out" style={{ fontFamily: '"Playfair Display", serif' }}>
              Why Choose Us
            </h2>
            
            <div className="mb-12 space-y-6 w-full">
              
              <div className="bg-white dark:bg-[#1f2937] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 ease-in-out group">
                <h3 className="text-base font-bold uppercase tracking-wider mb-2 text-gray-900 dark:text-gray-100 group-hover:text-orange-500 transition-colors duration-300 ease-in-out">
                  Authentic Recipes
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Our recipes are passed down through generations, ensuring authentic Middle Eastern flavors in every dish.
                </p>
              </div>

              <div className="bg-white dark:bg-[#1f2937] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 ease-in-out group">
                <h3 className="text-base font-bold uppercase tracking-wider mb-2 text-gray-900 dark:text-gray-100 group-hover:text-orange-500 transition-colors duration-300 ease-in-out">
                  Fresh Ingredients
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  We use only the freshest, highest-quality ingredients sourced from trusted suppliers for the best taste.
                </p>
              </div>

              <div className="bg-white dark:bg-[#1f2937] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 ease-in-out group">
                <h3 className="text-base font-bold uppercase tracking-wider mb-2 text-gray-900 dark:text-gray-100 group-hover:text-orange-500 transition-colors duration-300 ease-in-out">
                  Fast Service
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Quick preparation without compromising quality. We believe great food shouldn&apos;t make you wait too long.
                </p>
              </div>

            </div>

            <Link href="/book" className="inline-block px-8 py-3.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs font-bold tracking-[0.15em] uppercase rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-orange-600 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out">
              Book Your Order
            </Link>
          </div>

          {/* Right Image */}
          <div className="scroll-animate-right relative h-[350px] sm:h-[450px] md:h-[600px] w-full mt-4 md:mt-0 shadow-xl rounded-2xl overflow-hidden bg-gray-200 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 via-transparent to-transparent opacity-80 z-10 pointer-events-none transition-all duration-300 ease-in-out" />
            <Image 
              src="/images/Grils.jpg" 
              alt="Shawarma Fresh Ingredients"
              fill
              className="object-cover transition-all duration-500 z-0"
            />
          </div>

        </div>
      </section>

      {/* ══ SECTION 3: FRAMED TEXT ══ */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-24 md:py-32 mt-10 md:mt-16">
        
        {/* Wireframe box backdrop */}
        <div className="absolute inset-4 sm:inset-8 border border-gray-200 dark:border-slate-700 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-3xl z-0 scroll-animate pointer-events-none shadow-sm transition-all duration-300 ease-in-out" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Overlapping Image */}
          <div className="w-full md:w-5/12 h-[300px] sm:h-[400px] md:h-[500px] relative md:-ml-8 scroll-animate-left">
            <Image 
              src="/images/f1.png"
              alt="Experience Our Flavors"
              fill
              className="object-contain drop-shadow-2xl scale-110 md:scale-[1.35] md:-translate-y-6 transition-all duration-500"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-end text-center md:text-right scroll-animate-right pb-10 px-6 md:px-0 md:pr-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl text-gray-900 dark:text-gray-50 mb-6 leading-tight tracking-tight font-bold transition-all duration-300 ease-in-out" style={{ fontFamily: '"Playfair Display", serif' }}>
              Experience <br/><span className="text-orange-500 italic font-medium transition-all duration-300 ease-in-out">&amp;</span> Flavors
            </h2>
            <p className="text-base md:text-lg font-normal leading-relaxed tracking-wide text-gray-600 dark:text-gray-400 max-w-md mb-8">
              Visit us today and discover the authentic taste of Middle Eastern cuisine.
            </p>
            <Link href="/book" className="inline-block px-8 py-3.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs font-bold tracking-[0.15em] uppercase rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-orange-600 dark:hover:bg-gray-200 transition-all duration-300 ease-in-out">
              Place Order Now
            </Link>
          </div>
          
        </div>
      </section>

      {/* ══ SECTION 4: FOOTER-LIKE GET IN TOUCH ══ */}
      <section className="w-full py-20 mb-10 border-t border-gray-200 dark:border-slate-800 transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center text-center space-y-16 px-4">
          
          <div className="scroll-animate">
            <div className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-gray-400 dark:text-slate-500 mb-3 transition-colors duration-300 ease-in-out">Visit</div>
            <a href="https://maps.google.com/maps?q=12%20Jalan%20Suadamai%201%2F3%20Tun%20Hussein%20Onn%20Cheras" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400 transition-colors leading-relaxed block">
              12, Jalan Suadamai 1/3,<br className="md:hidden" /> Tun Hussein Onn<br/>43200 Cheras, Selangor
            </a>
          </div>

          <div className="scroll-animate">
            <div className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-gray-400 dark:text-slate-500 mb-3 transition-colors duration-300 ease-in-out">Contact</div>
            <a href="tel:0113903304" className="block text-base md:text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-2">
              (011) 3903-9304
            </a>
            <a href="mailto:info@shawarmatimekitchen.com" className="block text-base md:text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
              info@shawarmatimekitchen.com
            </a>
          </div>

          <div className="scroll-animate">
            <div className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-gray-400 dark:text-slate-500 mb-3 transition-colors duration-300 ease-in-out">Open Every Day</div>
            <div className="text-base md:text-lg font-medium tracking-wide text-gray-800 dark:text-gray-200 transition-colors duration-300 ease-in-out">
              Open 24 Hours
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}

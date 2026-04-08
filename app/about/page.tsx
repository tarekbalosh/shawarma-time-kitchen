import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-display">About Us</h1>
          <p className="text-lg mt-2 opacity-90">Know Our Story</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <img
                src="/images/f5.png"
                alt="Shawarma Time Kitchen"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 font-display text-gray-900">
                We Are Shawarma Time Kitchen
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our restaurant is inspired by the rich heritage of Middle Eastern cuisine, offering a delicious range of
                dishes such as shawarma, kebab, and the beloved mandy rice served with tender chicken or lamb. Every bite
                is crafted with care, using only the freshest ingredients.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Don't forget to try our freshly made sandwiches and cool down with our selection of fresh juices. We pride
                ourselves on authentic recipes passed down through generations, combined with modern culinary techniques
                to bring you an unforgettable dining experience.
              </p>
              <Link
                href="/book"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 inline-block"
              >
                Book Your Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 section-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-display">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Authentic Recipes</h3>
              <p className="text-gray-600">
                Our recipes are passed down through generations, ensuring authentic Middle Eastern flavors in every dish.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🥘</div>
              <h3 className="text-2xl font-bold mb-4">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We use only the freshest, highest-quality ingredients sourced from trusted suppliers for the best taste.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Fast Service</h3>
              <p className="text-gray-600">
                Quick preparation without compromising quality. We believe great food shouldn't make you wait too long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Experience Our Flavors</h2>
          <p className="text-lg mb-8 text-white/90">Visit us today and discover the authentic taste of Middle Eastern cuisine</p>
          <Link
            href="/book"
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 inline-block"
          >
            Place Order Now
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-32 section-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-display">Get In Touch</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <a 
                href="https://www.google.com/maps?ll=3.055409,101.75881&z=16&t=m&hl=en&gl=MY&mapclient=embed&cid=17065704115811148650"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600"
              >
                View on Google Maps
              </a>
            </div>
            
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

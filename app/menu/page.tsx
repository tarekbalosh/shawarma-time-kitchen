'use client'

import { useState } from 'react'
import Image from 'next/image'

const menuItems = [
  {
    id: 1,
    name: 'Mandi Chicken',
    category: 'rice',
    price: 'RM19',
    description: 'Chicken Mandi is a spiced, tender chicken served over fragrant basmati rice, often garnished with onions, almonds, and raisins, with a smoky flavor.',
    image: 'https://fast.ejazmine.com/wp-content/uploads/2021/11/Untitled-design-2-2.jpg',
  },
  {
    id: 2,
    name: 'Mandi Shawarma Beef',
    category: 'rice',
    price: 'RM25',
    description: 'Mandi beef is a rice dish with slow-cooked, spiced lamb served over fragrant basmati rice, garnished with onions, almonds, and raisins, and finished with a smoky touch.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpub6Qh3JvyoyuPtNvb0SS02jGimrTAKYKATf5ljrfkqSeHm1vN54dhc2caIvhHxfd1pU&usqp=CAU',
  },
  {
    id: 3,
    name: 'Mandi Lamb',
    category: 'rice',
    price: 'RM33',
    description: 'Mandi Lamb is a fragrant basmati rice dish cooked with spices, served with tender, flavorful lamb, and topped with fried onions, raisins, and nuts.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDNaxXb_fJu-ixF1teYBwC3kq-HxBThBXLw&s',
  },
  {
    id: 4,
    name: 'Kabsa Chicken',
    category: 'rice',
    price: 'RM23',
    description: 'Chicken Kabsa is a spiced basmati rice dish cooked with aromatic spices like cinnamon, cardamom, and cloves, topped with tender chicken, raisins, and toasted almonds.',
    image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg',
  },
  {
    id: 5,
    name: 'Kabsa Shawarma Beef',
    category: 'rice',
    price: 'RM28',
    description: 'Kabsa Shawarma Beef is a fusion of spiced basmati rice and grilled marinated beef shawarma, topped with caramelized onions and nuts for a rich, savory experience.',
    image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg',
  },
  {
    id: 6,
    name: 'Kabsa Lamb',
    category: 'rice',
    price: 'RM36',
    description: 'Lamb Kabsa is a traditional Arabian rice dish made with tender lamb, aromatic spices, and tomato, served over basmati rice and garnished with nuts and raisins.',
    image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg',
  },
  {
    id: 7,
    name: 'Crispy Chicken Set',
    category: 'crispy',
    price: 'RM28',
    description: 'Fried Chicken and Chips is a classic comfort food combo featuring crispy, golden-brown chicken pieces seasoned with herbs and spices, deep-fried to perfection.',
    image: 'https://thumbs.dreamstime.com/z/chicken-tenders-fries-fried-french-dipping-sauce-93035208.jpg',
  },
  {
    id: 8,
    name: 'Crispy Chicken Roll',
    category: 'crispy',
    price: 'RM17',
    description: 'Crispy Chicken Roll is a crunchy, deep-fried wrap filled with seasoned chicken and veggies. Perfect as a tasty snack or appetizer.',
    image: 'https://img.freepik.com/premium-photo/fried-chicken-wraps-white-paper-wrap-white-background_439318-4590.jpg',
  },
  {
    id: 9,
    name: 'Shawarma Chicken',
    category: 'shawarma',
    price: 'M : RM9 | L : RM14',
    description: 'Tender, marinated chicken grilled to perfection and wrapped in warm pita.',
    image: 'https://thebusybaker.ca/wp-content/uploads/2025/03/chicken-shawarma-fb-ig-12-scaled.jpg',
  },
  {
    id: 10,
    name: 'Shawarma Chicken Cheese',
    category: 'shawarma',
    price: 'M : RM10 | L : RM15',
    description: 'Deliciously marinated chicken shawarma topped with melted cheese, wrapped in warm pita.',
    image: 'https://previews.123rf.com/images/jeannierv/jeannierv2111/jeannierv211100105/177527882-cheese-roll-of-shawarma-with-cheese-sauce-chicken-and-vegetables-in-pita-bread-on-wooden-dark.jpg',
  },
  {
    id: 11,
    name: 'Shawarma Chicken Fries',
    category: 'shawarma',
    price: 'M : RM10 | L : RM15',
    description: 'Crispy fries topped with tender, spiced chicken shawarma, drizzled with creamy garlic sauce and fresh veggies.',
    image: 'https://www.thechunkychef.com/wp-content/uploads/2021/03/Chicken-Shawarma-recipe-card.jpg',
  },
  {
    id: 12,
    name: 'Shawarma Beef',
    category: 'shawarma',
    price: 'M : RM12 | L : RM16',
    description: 'Spiced beef slow-cooked and sliced thin, wrapped in soft pita bread.',
    image: 'https://www.corriecooks.com/wp-content/uploads/2023/08/beefshawarma.jpg',
  },
  {
    id: 13,
    name: 'Shawarma Beef Cheese',
    category: 'shawarma',
    price: 'M : RM14 | L : RM18',
    description: 'Tender, marinated beef shawarma layered with melted cheese, wrapped in warm pita.',
    image: 'https://thumbs.dreamstime.com/b/shawarma-sandwich-gyro-fresh-roll-lavash-pita-bread-chicken-beef-shawarma-falafel-recipetin-eatsfilled-grilled-shawarma-166799143.jpg',
  },
  {
    id: 14,
    name: 'Shawarma Beef Fries',
    category: 'shawarma',
    price: 'M : RM14 | L : RM18',
    description: 'Spiced beef slow-cooked and sliced thin, served with crispy fries.',
    image: 'https://static.wixstatic.com/media/443ab6_d5bfc18415034a099a1f3f5671b3f385~mv2.jpg/v1/fill/w_315,h_315,al_c,lg_1,q_80,enc_avif,quality_auto/443ab6_d5bfc18415034a099a1f3f5671b3f385~mv2.jpg',
  },
]

const categoryList = [
  { value: '*', label: 'All', icon: '🍽️' },
  { value: 'shawarma', label: 'Shawarma', icon: '🌯' },
  { value: 'rice', label: 'Rice Dishes', icon: '🍚' },
  { value: 'crispy', label: 'Crispy', icon: '🍗' },
]

export default function MenuPage() {
  const [filteredItems, setFilteredItems] = useState(menuItems)
  const [activeFilter, setActiveFilter] = useState('*')
  const [cartItems, setCartItems] = useState<Array<{ id: number; name: string; price: string; quantity: number; image: string }>>([])

  const handleFilter = (category: string) => {
    setActiveFilter(category)
    if (category === '*') {
      setFilteredItems(menuItems)
    } else {
      setFilteredItems(menuItems.filter(item => item.category === category))
    }
  }

  const getNumericPrice = (price: string) => {
    const match = price.match(/RM\s*(\d+)/)
    return match ? Number(match[1]) : 0
  }

  const addToCart = (item: { id: number; name: string; price: string; image: string }) => {
    setCartItems(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id)
      if (existing) {
        return prev.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id: number, value: number) => {
    setCartItems(prev =>
      prev
        .map(item => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + value) } : item))
        .filter(item => item.quantity > 0)
    )
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + getNumericPrice(item.price) * item.quantity, 0)

  return (
    <main>
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-display">Our Menu</h1>
          <p className="text-lg mt-2 opacity-90">Discover our delicious selection and order instantly</p>
        </div>
      </section>

      <section className="py-20 md:py-32 section-surface scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[2.5fr_1fr]">
            <div>
              <div className="mb-10 overflow-x-auto py-2">
                <div className="inline-flex gap-4">
                  {categoryList.map(category => (
                    <button
                      key={category.value}
                      onClick={() => handleFilter(category.value)}
                      className={`min-w-[140px] flex-shrink-0 rounded-3xl border px-5 py-3 text-left transition-all duration-300 ${
                        activeFilter === category.value
                          ? 'border-transparent bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-xl'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                          {category.icon}
                        </span>
                        <div>
                          <p className="text-sm opacity-80">Category</p>
                          <p className="font-semibold">{category.label}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="card-advanced bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 scroll-animate"
                    style={{ animationDelay: `${(index % 3) * 0.1}s` }}
                  >
                    <div className="card-image relative h-60 overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="rounded-3xl bg-orange-50 px-4 py-2 text-orange-700 font-semibold text-sm">
                          {item.price}
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <button
                          onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-white font-semibold shadow-lg transition duration-300 hover:bg-orange-600"
                        >
                          Add
                        </button>
                        <span className="text-sm text-gray-500">Best choice</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">My Order</h2>
                  <p className="text-sm text-gray-500">{cartItems.length} item{cartItems.length === 1 ? '' : 's'}</p>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-lg">
                  🛒
                </div>
              </div>

              <div className="space-y-4">
                {cartItems.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-orange-200 bg-orange-50 p-6 text-center text-orange-700">
                    Add an item to your order
                  </div>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="rounded-3xl border border-gray-100 p-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-3xl bg-gray-100">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.price}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-2 text-lg text-orange-600"
                          >
                            -
                          </button>
                          <span className="px-4 py-2 text-sm font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-2 text-lg text-orange-600"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">RM {getNumericPrice(item.price) * item.quantity}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-8 rounded-3xl bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between text-sm opacity-80">
                  <span>Estimated total</span>
                  <span className="font-semibold">RM {totalAmount}</span>
                </div>
                <button className="mt-5 w-full rounded-full bg-orange-500 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition hover:bg-orange-600">
                  Checkout
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

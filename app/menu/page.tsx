'use client'

import { useState, useEffect } from 'react'
import MenuFilter from '@/components/MenuFilter'

const menuItems = [
  // Rice Dishes
  {
    id: 1,
    name: 'Mandi Chicken',
    category: 'rice',
    price: 'RM19',
    description: 'Chicken Mandi is a spiced, tender chicken served over fragrant basmati rice, often garnished with onions, almonds, and raisins, with a smoky flavor',
    image: 'https://fast.ejazmine.com/wp-content/uploads/2021/11/Untitled-design-2-2.jpg'
  },
  {
    id: 2,
    name: 'Mandi Shawarma Beef',
    category: 'rice',
    price: 'RM25',
    description: 'Mandi beef is a rice dish with slow-cooked, spiced lamb served over fragrant basmati rice, garnished with onions, almonds, and raisins, and finished with a smoky touch',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpub6Qh3JvyoyuPtNvb0SS02jGimrTAKYKATf5ljrfkqSeHm1vN54dhc2caIvhHxfd1pU&usqp=CAU'
  },
  {
    id: 3,
    name: 'Mandi Lamb',
    category: 'rice',
    price: 'RM33',
    description: 'Mandi Lamb is a fragrant basmati rice dish cooked with spices, served with tender, flavorful lamb, and topped with fried onions, raisins, and nuts. A smoky finish adds depth to its rich taste.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDNaxXb_fJu-ixF1teYBwC3kq-HxBThBXLw&s'
  },
  {
    id: 4,
    name: 'Kabsa Chicken',
    category: 'rice',
    price: 'RM23',
    description: 'Chicken Kabsa is a spiced basmati rice dish cooked with aromatic spices like cinnamon, cardamom, and cloves, topped with tender chicken, raisins, and toasted almonds.',
    image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg'
  },
  {
    id: 5,
    name: 'Kabsa Shawarma Beef',
    category: 'rice',
    price: 'RM28',
    description: 'Kabsa Shawarma Beef is a fusion of spiced basmati rice and grilled marinated beef shawarma, topped with caramelized onions and nuts for a rich, savory experience.',
    image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg'
  },
  {
    id: 6,
    name: 'Kabsa Lamb',
    category: 'rice',
    price: 'RM36',
    description: 'Lamb Kabsa is a traditional Arabian rice dish made with tender lamb, aromatic spices, and tomato, served over basmati rice and garnished with nuts and raisins.',
    image: 'https://resepichenom.com/images/recipes/Chicken_Kabsah_1_x_1.jpg'
  },
  // Crispy Items
  {
    id: 7,
    name: 'Crispy Chicken Set',
    category: 'crispy',
    price: 'RM28',
    description: 'Fried Chicken and Chips is a classic comfort food combo featuring crispy, golden-brown chicken pieces seasoned with herbs and spices, deep-fried to perfection.',
    image: 'https://thumbs.dreamstime.com/z/chicken-tenders-fries-fried-french-dipping-sauce-93035208.jpg'
  },
  {
    id: 8,
    name: 'Crispy Chicken Roll',
    category: 'crispy',
    price: 'RM17',
    description: 'Crispy Chicken Roll is a crunchy, deep-fried wrap filled with seasoned chicken and veggies. Perfect as a tasty snack or appetizer.',
    image: 'https://img.freepik.com/premium-photo/fried-chicken-wraps-white-paper-wrap-white-background_439318-4590.jpg'
  },
  // Shawarma Items
  {
    id: 9,
    name: 'Shawarma Chicken',
    category: 'shawarma',
    price: 'M : RM9 | L : RM14',
    description: 'Tender, marinated chicken grilled to perfection and wrapped in warm pita.',
    image: 'https://thebusybaker.ca/wp-content/uploads/2025/03/chicken-shawarma-fb-ig-12-scaled.jpg'
  },
  {
    id: 10,
    name: 'Shawarma Chicken Cheese',
    category: 'shawarma',
    price: 'M : RM10 | L : RM15',
    description: 'Deliciously marinated chicken shawarma topped with melted cheese, wrapped in warm pita.',
    image: 'https://previews.123rf.com/images/jeannierv/jeannierv2111/jeannierv211100105/177527882-cheese-roll-of-shawarma-with-cheese-sauce-chicken-and-vegetables-in-pita-bread-on-wooden-dark.jpg'
  },
  {
    id: 11,
    name: 'Shawarma Chicken Fries',
    category: 'shawarma',
    price: 'M : RM10 | L : RM15',
    description: 'Crispy fries topped with tender, spiced chicken shawarma, drizzled with creamy garlic sauce and fresh veggies.',
    image: 'https://www.thechunkychef.com/wp-content/uploads/2021/03/Chicken-Shawarma-recipe-card.jpg'
  },
  {
    id: 12,
    name: 'Shawarma Beef',
    category: 'shawarma',
    price: 'M : RM12 | L : RM16',
    description: 'Spiced beef slow-cooked and sliced thin, wrapped in soft pita bread.',
    image: 'https://www.corriecooks.com/wp-content/uploads/2023/08/beefshawarma.jpg'
  },
  {
    id: 13,
    name: 'Shawarma Beef Cheese',
    category: 'shawarma',
    price: 'M : RM14 | L : RM18',
    description: 'Tender, marinated beef shawarma layered with melted cheese, wrapped in warm pita.',
    image: 'https://thumbs.dreamstime.com/b/shawarma-sandwich-gyro-fresh-roll-lavash-pita-bread-chicken-beef-shawarma-falafel-recipetin-eatsfilled-grilled-shawarma-166799143.jpg'
  },
  {
    id: 14,
    name: 'Shawarma Beef Fries',
    category: 'shawarma',
    price: 'M : RM14 | L : RM18',
    description: 'Spiced beef slow-cooked and sliced thin, served with crispy fries.',
    image: 'https://static.wixstatic.com/media/443ab6_d5bfc18415034a099a1f3f5671b3f385~mv2.jpg/v1/fill/w_315,h_315,al_c,lg_1,q_80,enc_avif,quality_auto/443ab6_d5bfc18415034a099a1f3f5671b3f385~mv2.jpg'
  },
]

export default function MenuPage() {
  const [filteredItems, setFilteredItems] = useState(menuItems)
  const [activeFilter, setActiveFilter] = useState('*')

  const categories = [
    { value: '*', label: 'All' },
    { value: 'shawarma', label: 'Shawarma' },
    { value: 'rice', label: 'Rice' },
    { value: 'crispy', label: 'Crispy' },
  ]

  const handleFilter = (category: string) => {
    setActiveFilter(category)
    if (category === '*') {
      setFilteredItems(menuItems)
    } else {
      setFilteredItems(menuItems.filter(item => item.category === category))
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-display">Our Menu</h1>
          <p className="text-lg mt-2 opacity-90">Discover Our Delicious Selection</p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 md:py-32 section-surface scroll-animate">
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <MenuFilter categories={categories} activeFilter={activeFilter} onFilter={handleFilter} />

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="card-advanced bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                <div className="card-image relative overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg px-4 py-3 mb-4 text-center">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                    {item.description}
                  </p>
                  <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center py-4 rounded-lg font-bold hover:shadow-lg transition-shadow">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

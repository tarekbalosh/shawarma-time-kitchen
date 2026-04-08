'use client'

interface MenuFilterProps {
  categories: Array<{ value: string; label: string }>
  activeFilter: string
  onFilter: (category: string) => void
}

export default function MenuFilter({ categories, activeFilter, onFilter }: MenuFilterProps) {
  return (
    <div className="mb-12 text-center">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onFilter(category.value)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === category.value
                ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}

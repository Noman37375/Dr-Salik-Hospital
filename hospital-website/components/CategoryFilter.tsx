'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface Category {
  _id: string
  title: string
  slug: { current: string }
}

interface CategoryFilterProps {
  categories: Category[]
  activeCategory?: string
}

export default function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className="mb-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
              ${!activeCategory 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
          >
            All Posts
          </Link>
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/blog/category/${category.slug.current}`}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === category.slug.current
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
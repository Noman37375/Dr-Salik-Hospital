'use client'

import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { useEffect, useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import Link from "next/link"
import CategoryFilter from "@/components/CategoryFilter"

interface Category {
  _id: string
  title: string
  slug: { current: string }
}

interface Author {
  _id: string
  name: string
  image: any
  specialization: string
  slug: { current: string }
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  featuredImage: any
  excerpt: string
  publishedAt: string
  categories: Category[]
  author: Author
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      // Fetch all categories
      const categoriesQuery = groq`
        *[_type == "category"] {
          _id,
          title,
          slug
        }
      `
      const categoriesResult = await client.fetch(categoriesQuery)
      setCategories(categoriesResult)

      // Fetch current category
      const categoryQuery = groq`
        *[_type == "category" && slug.current == $slug][0] {
          _id,
          title,
          slug
        }
      `
      const category = await client.fetch(categoryQuery, { slug: params.slug })
      setCurrentCategory(category)

      // Fetch posts for this category
      const postsQuery = groq`
        *[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
          _id,
          title,
          slug,
          featuredImage,
          excerpt,
          publishedAt,
          "categories": categories[]->{ _id, title, slug },
          "author": author->{ _id, name, image, specialization, slug }
        }
      `
      const postsResult = await client.fetch(postsQuery, { categoryId: category._id })
      setPosts(postsResult)
      setLoading(false)
    }

    fetchData()
  }, [params.slug])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {currentCategory ? `Posts in ${currentCategory.title}` : 'Blog Posts'}
      </h1>

      <CategoryFilter categories={categories} activeCategory={params.slug} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {post.featuredImage && (
                <div className="relative h-48">
                  <Image
                    src={urlForImage(post.featuredImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories?.map((category) => (
                    <span
                      key={category._id}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center">
                  {post.author?.image && (
                    <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                      <Image
                        src={urlForImage(post.author.image).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">{post.author?.name}</p>
                    <p className="text-xs text-gray-500">
                      {post.author?.specialization}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 
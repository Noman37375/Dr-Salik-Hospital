'use client'

import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { useEffect, useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import Link from "next/link"
import { FiSearch } from 'react-icons/fi'

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

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    const fetchData = async () => {
      const categoriesQuery = groq`
        *[_type == "category"] {
          _id,
          title,
          slug
        }
      `
      const categoriesResult = await client.fetch(categoriesQuery)
      setCategories(categoriesResult)

      const postsQuery = groq`
        *[_type == "post"] | order(publishedAt desc) {
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
      const postsResult = await client.fetch(postsQuery)
      setPosts(postsResult)
      setLoading(false)
    }

    fetchData()
  }, [])

  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (activeCategory === "all") return matchesSearch
    return matchesSearch && post.categories.some(cat => cat.slug.current === activeCategory)
  })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing! We will keep you updated.')
    setEmail("")
  }

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-center py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest medical insights and hospital news
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2 -mx-4 px-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setActiveCategory(category.slug.current)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.slug.current
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug.current}`} key={post._id}>
              <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {post.featuredImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={urlForImage(post.featuredImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.categories?.length > 0 && (
                    <div className="text-blue-500 text-sm font-medium mb-2">
                      {post.categories[0].title}
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Get the latest medical insights and hospital updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

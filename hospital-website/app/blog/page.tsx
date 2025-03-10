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

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    )
  }

  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Our Blog</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest medical insights and hospital news
          </p>
        </div>

        <CategoryFilter categories={categories} />

        {featuredPost && (
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.slug.current}`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[400px] md:h-full">
                    {featuredPost.featuredImage && (
                      <Image
                        src={urlForImage(featuredPost.featuredImage).url()}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.categories?.map((category) => (
                        <span
                          key={category._id}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center">
                      {featuredPost.author?.image && (
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={urlForImage(featuredPost.author.image).url()}
                            alt={featuredPost.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900">
                          {featuredPost.author?.name}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{featuredPost.author?.specialization}</span>
                          <span className="mx-2">•</span>
                          <time>
                            {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <Link href={`/blog/${post.slug.current}`} key={post._id}>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {post.featuredImage && (
                  <div className="relative h-56">
                    <Image
                      src={urlForImage(post.featuredImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories?.map((category) => (
                      <span
                        key={category._id}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center pt-4 border-t border-gray-100">
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
                      <p className="text-sm font-medium text-gray-900">
                        {post.author?.name}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{post.author?.specialization}</span>
                        <span className="mx-2">•</span>
                        <time>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

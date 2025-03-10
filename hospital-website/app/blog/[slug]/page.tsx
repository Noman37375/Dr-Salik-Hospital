'use client'

import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { useEffect, useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"

interface Category {
  _id: string
  title: string
  slug: { current: string }
}

interface Post {
  title: string
  featuredImage: any
  content: any[]
  publishedAt: string
  categories: Category[]
  author: {
    name: string
    image: any
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      const query = groq`
        *[_type == "post" && slug.current == $slug][0] {
          title,
          featuredImage,
          content,
          publishedAt,
          "categories": categories[]->{ _id, title, slug },
          author
        }
      `
      const result = await client.fetch(query, { slug: params.slug })
      setPost(result)
      setLoading(false)
    }

    fetchPost()
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

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    )
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {post.categories?.map((category) => (
          <span
            key={category._id}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            {category.title}
          </span>
        ))}
      </div>

      {post.featuredImage && (
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={urlForImage(post.featuredImage).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex items-center mb-8">
        {post.author?.image && (
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image
              src={urlForImage(post.author.image).url()}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-medium">{post.author?.name}</p>
          <p className="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.content} />
      </div>
    </article>
  )
} 
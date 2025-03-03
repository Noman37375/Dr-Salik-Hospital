import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

// Mock blog post data (same as in blog/page.tsx)
const blogPosts = [
  {
    id: "1",
    title: "Understanding Heart Health: Tips for a Stronger Cardiovascular System",
    content: `
      <p>Heart health is crucial for overall well-being. In this article, we'll explore some key tips for maintaining a strong cardiovascular system:</p>
      <h2>1. Regular Exercise</h2>
      <p>Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week. This can include activities like brisk walking, jogging, cycling, or swimming.</p>
      <h2>2. Balanced Diet</h2>
      <p>Consume a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit your intake of saturated fats, trans fats, and excessive salt.</p>
      <h2>3. Manage Stress</h2>
      <p>Chronic stress can negatively impact heart health. Practice stress-reduction techniques such as meditation, deep breathing exercises, or yoga.</p>
      <h2>4. Get Enough Sleep</h2>
      <p>Aim for 7-9 hours of quality sleep each night. Poor sleep has been linked to increased risk of heart disease.</p>
      <h2>5. Avoid Smoking and Limit Alcohol</h2>
      <p>If you smoke, consider quitting. Limit alcohol consumption to moderate levels (up to one drink per day for women and up to two drinks per day for men).</p>
      <p>By incorporating these habits into your daily life, you can significantly improve your heart health and reduce the risk of cardiovascular diseases.</p>
    `,
    date: "2023-05-15",
    author: "Dr. John Smith",
    category: "Cardiology",
    image: "/placeholder.svg?height=400&width=800",
  },
  // Add more blog posts as needed
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return {
      title: "Blog Post Not Found | Dr. Salik Hospital",
    }
  }

  return {
    title: `${post.title} | Dr. Salik Hospital Blog`,
    description: post.content.substring(0, 160),
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/blog" className="text-blue-100 hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center text-blue-100">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="mr-4">{post.date}</span>
            <User className="h-5 w-5 mr-2" />
            <span className="mr-4">{post.author}</span>
            <Tag className="h-5 w-5 mr-2" />
            <span>{post.category}</span>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full bg-gray-300 mr-6"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-600">
                  Dr. John Smith is a renowned cardiologist with over 15 years of experience in treating heart
                  conditions. He is passionate about educating patients on heart health and preventive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}


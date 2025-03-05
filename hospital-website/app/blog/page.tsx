import Image from "next/image"
import Link from "next/link"

// Mock blog post data
const blogPosts = [
  {
    id: "1",
    title: "Understanding Heart Health: Tips for a Stronger Cardiovascular System",
    excerpt:
      "Learn about the importance of heart health and discover practical tips to maintain a strong cardiovascular system.",
    date: "2023-05-15",
    author: "Dr. John Smith",
    category: "Cardiology",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "The Importance of Regular Check-ups: Preventing Health Issues Before They Start",
    excerpt:
      "Regular health check-ups are crucial for early detection and prevention of potential health problems. Find out why you shouldn't skip your annual physical.",
    date: "2023-05-10",
    author: "Dr. Sarah Johnson",
    category: "General Health",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Nutrition for Optimal Health: A Guide to Balanced Eating",
    excerpt:
      "Discover the principles of balanced nutrition and learn how to make healthier food choices for overall wellbeing.",
    date: "2023-05-05",
    author: "Dr. Michael Brown",
    category: "Nutrition",
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more blog posts as needed
]

export const metadata = {
  title: "Blog | Dr. Salik Hospital",
  description:
    "Stay informed with the latest health news, medical advancements, and wellness tips from Dr. Salik Hospital.",
}

export default function BlogPage() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Stay informed with the latest health news, medical advancements, and wellness tips from our experts.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-primary font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay up-to-date with our latest health tips, hospital news, and medical advancements. Subscribe to our
            newsletter for regular updates.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-r-lg hover:bg-primary-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}


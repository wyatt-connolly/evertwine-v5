import Navigation from "@/components/Navigation";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Evertwine <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stories, tips, and insights about building meaningful connections
              in your community
            </p>
          </div>

          <div className="space-y-8">
            {/* Blog post placeholder */}
            <article className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
                  <p className="text-gray-400">
                    Blog posts will be available here soon
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We're working on bringing you amazing content about community
                building, event planning tips, and stories from our amazing
                users. Check back soon for our first blog posts!
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

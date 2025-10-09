import Navigation from "@/components/Navigation";
import { supabase, BlogPost } from "@/lib/supabase";
import Link from "next/link";

async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }

  return data || [];
}

export default async function PressPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Evertwine <span className="gradient-text">Press</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stories, tips, and insights about building meaningful connections
              in your community
            </p>
          </div>

          <div className="space-y-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {post.title.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                        <Link href={`/press/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>
                          {new Date(post.published_at).toLocaleDateString()}
                        </span>
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/press/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </article>
              ))
            ) : (
              <article className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Coming Soon
                    </h2>
                    <p className="text-gray-400">
                      Press articles will be available here soon
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We&apos;re working on bringing you amazing content about community
                  building, event planning tips, and stories from our amazing
                  users. Check back soon for our first press articles!
                </p>
              </article>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

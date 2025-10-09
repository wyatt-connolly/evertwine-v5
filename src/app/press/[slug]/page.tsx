import Navigation from "@/components/Navigation";
import { supabase, BlogPost } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

async function getAdjacentPosts(currentSlug: string): Promise<{
  previous: BlogPost | null;
  next: BlogPost | null;
}> {
  // Get all posts ordered by published date
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, published_at")
    .order("published_at", { ascending: false });

  if (error || !posts) {
    return { previous: null, next: null };
  }

  // Find current post index
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  // Previous post is the one before (newer)
  const previous = currentIndex > 0 ? posts[currentIndex - 1] : null;

  // Next post is the one after (older)
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return { previous, next };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = await getAdjacentPosts(params.slug);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/press"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Press
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-400 mb-6">
              <span>By {post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article content */}
          <article className="prose prose-invert max-w-none">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-6 text-gray-300">{children}</p>
                    ),
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold mb-4 text-white">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold mb-3 text-white">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {children}
                      </h3>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-white">
                        {children}
                      </strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-6 ml-6 list-disc text-gray-300">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mb-6 ml-6 list-decimal text-gray-300">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="mb-2 text-gray-300">{children}</li>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-blue-400 hover:text-blue-300 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-6">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-200">
                        {children}
                      </code>
                    ),
                    img: ({ src, alt }) => (
                      <img
                        src={src}
                        alt={alt}
                        className="max-w-full h-auto rounded-lg my-6 shadow-lg"
                      />
                    ),
                  }}
                >
                  {post.content.replace(/\n\n/g, "\n\n")}
                </ReactMarkdown>
              </div>
            </div>
          </article>

          {/* Article Navigation */}
          <div className="mt-16">
            <div className="border-t border-gray-700 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Previous Article */}
                {previous ? (
                  <Link
                    href={`/press/${previous.slug}`}
                    className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
                  >
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 text-blue-400 text-sm font-medium">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </div>
                        <span>Previous Article</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                        {previous.title}
                      </h3>
                      <div className="mt-4 flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        <span>Read more</span>
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-800 opacity-40">
                    <div className="flex items-center gap-3 mb-4 text-gray-500 text-sm">
                      <div className="w-8 h-8 bg-gray-600/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </div>
                      <span>No Previous Article</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      You're reading the latest article
                    </p>
                  </div>
                )}

                {/* Next Article */}
                {next ? (
                  <Link
                    href={`/press/${next.slug}`}
                    className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden text-right"
                  >
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-end gap-3 mb-4 text-purple-400 text-sm font-medium">
                        <span>Next Article</span>
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                          <svg
                            className="w-4 h-4"
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
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                        {next.title}
                      </h3>
                      <div className="mt-4 flex items-center justify-end text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        <span>Read more</span>
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-800 opacity-40 text-right">
                    <div className="flex items-center justify-end gap-3 mb-4 text-gray-500 text-sm">
                      <span>No Next Article</span>
                      <div className="w-8 h-8 bg-gray-600/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm">
                      You're reading the oldest article
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Back to Press link */}
            <div className="mt-16 text-center">
              <Link
                href="/press"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

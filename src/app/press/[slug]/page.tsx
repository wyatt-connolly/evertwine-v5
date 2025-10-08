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

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

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

          {/* Back to press link */}
          <div className="mt-12 text-center">
            <Link
              href="/press"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
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
          </div>
        </div>
      </div>
    </div>
  );
}

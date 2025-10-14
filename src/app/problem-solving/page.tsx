export default function ProblemSolvingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mb-8">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 gradient-text">
              The Problem We&apos;re Solving
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              In today&apos;s digital world, genuine human connection has become
              increasingly rare. Despite being more &quot;connected&quot; than
              ever through social media, many people report feeling isolated and
              lonely.
            </p>
          </div>

          {/* Problem Sections */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Digital Disconnect */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold gradient-text">
                  Digital Disconnect
                </h2>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-pink-600/10 rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">61%</span>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Studies show that despite spending an average of 7+ hours
                    daily on digital devices, 61% of young adults report feeling
                    &quot;very lonely&quot; on a regular basis. Traditional
                    social media often creates shallow connections rather than
                    meaningful relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Concerns */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold gradient-text">
                  Safety Concerns
                </h2>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">73%</span>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Meeting new people in-person comes with legitimate safety
                    concerns. 48% of adults say they avoid meeting new people
                    due to safety worries, and 73% of women report having safety
                    concerns when considering attending events with strangers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Our Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Evertwine bridges the gap between digital convenience and
                authentic human connection. We&apos;ve created a platform that
                facilitates real-world meetups while prioritizing safety,
                community standards, and genuine connections.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-teal-600/10 rounded-3xl p-10 border border-green-500/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-lg">
                      Upcoming ID verification and enhanced safety features for
                      every interaction
                    </span>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-lg">
                      Location-based meetups with like-minded individuals
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-lg">
                      Community-driven events and interest groups
                    </span>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-lg">
                      Privacy-first approach to social networking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Opportunity */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                The Opportunity
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We&apos;re addressing a significant and growing need in
                today&apos;s increasingly digital society.
              </p>
            </div>

            {/* Market Size */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Market Size
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Social Networking
                  </h4>
                  <p className="text-gray-300 mb-2 text-lg">Today: $142B</p>
                  <p className="text-blue-400 font-bold text-xl">
                    →2030: $223B
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Event Discovery
                  </h4>
                  <p className="text-gray-300 mb-2 text-lg">Today: $52B</p>
                  <p className="text-purple-400 font-bold text-xl">
                    →2030: $87B
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Safety Tech
                  </h4>
                  <p className="text-gray-300 mb-2 text-lg">Today: $27B</p>
                  <p className="text-green-400 font-bold text-xl">
                    →2030: $54B
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-center mt-8 text-lg">
                Our platform sits at the intersection of these growing markets,
                with a unique focus on authentic connections and safety.
              </p>
            </div>

            {/* Key Insights */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">
                Key Insights
              </h3>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 gradient-text">
                        Growing Loneliness Epidemic
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        36% of Americans report feeling &quot;serious
                        loneliness,&quot; with rates highest among young adults
                        (61%) and mothers with young children (51%).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 gradient-text">
                        Digital Fatigue
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        73% of Gen Z and Millennials report experiencing
                        &quot;digital fatigue&quot; and express desire for more
                        in-person interactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 gradient-text">
                        Safety Concerns
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        82% of women and 52% of men consider safety features
                        &quot;extremely important&quot; when using platforms to
                        meet new people.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  These insights drive our product development, focusing on
                  creating safe, meaningful connections in a digital age.
                </p>
                <blockquote className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-l-4 border-blue-500 pl-8 py-6 rounded-r-2xl italic text-xl text-gray-300 max-w-3xl mx-auto">
                  &quot;We&apos;re building Evertwine to be the bridge between
                  digital convenience and authentic human connection.&quot;
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

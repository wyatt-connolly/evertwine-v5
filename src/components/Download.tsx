export default function Download() {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Start Connecting?
        </h2>

        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Join thousands of people already using Evertwine to discover amazing
          activities and meet new people.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="https://apps.apple.com/us/app/evertwine-friends-events/id6479545288"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 btn-hover"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-300">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
        </div>

        <div className="flex justify-center space-x-8 text-sm">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Community Guidelines
          </a>
        </div>
      </div>
    </section>
  );
}

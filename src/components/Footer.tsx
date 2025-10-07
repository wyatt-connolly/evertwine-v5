export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">Evertwine</h3>
            <p className="text-gray-400 mb-6">
              Where interests become friendships
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <div className="space-y-3">
              <a
                href="#features"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                How It Works
              </a>
              <a
                href="#download"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Download
              </a>
            </div>
          </div>

          {/* Community Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <div className="space-y-3">
              <a
                href="#community"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Join Community
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Safety
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Guidelines
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Evertwine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

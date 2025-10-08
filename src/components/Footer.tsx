export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-gray-400">
            &copy; 2025 Evertwine. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-gray-500 text-sm">
            <a
              href="/legal?doc=privacy-policy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/legal?doc=cookie-policy"
              className="hover:text-gray-300 transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="/legal?doc=terms-of-service"
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/legal?doc=eula"
              className="hover:text-gray-300 transition-colors"
            >
              End User License Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

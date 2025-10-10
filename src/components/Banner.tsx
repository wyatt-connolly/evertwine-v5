export default function Banner() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-[length:200%_100%] animate-gradient text-white py-4 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <div className="relative flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-150"></div>
        </div>
        <p className="text-sm sm:text-base font-semibold text-center animate-fade-in">
          ✨ Get ready to start a new chapter. Our biggest update yet is just around the corner.
        </p>
        <div className="relative flex items-center gap-2">
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-150"></div>
          <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Auto Vera
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="/pricing" className="hover:text-white transition">
  Pricing
</a>

        </nav>

        {/* CTA */}
        <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-[0_0_20px_rgba(59,130,246,0.6)]">
          Get Report
        </button>
      </div>
    </header>
  );
}

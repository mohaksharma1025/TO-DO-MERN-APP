export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 flex items-center justify-center p-10">

      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20">

        {/* TOP SECTION */}
        <div className="text-center mb-14">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
            SuperTask Manager
          </h1>
          <p className="text-xl text-white/90 mt-4 max-w-3xl mx-auto">
            A powerful, fast and beautifully designed To-Do App that helps you plan,
            organize, and dominate your day like a pro.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white/20 p-8 rounded-2xl border border-white/30 shadow-xl hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">⚡ Lightning Fast</h2>
            <p className="text-white/90">
              Add, update, delete tasks instantly with a silky-smooth interface made
              to boost your productivity and efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/20 p-8 rounded-2xl border border-white/30 shadow-xl hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">🧠 Smart & Organized</h2>
            <p className="text-white/90">
              Keep your daily tasks structured and easy to access. Your workflow becomes
              clean, clear, and distraction-free.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/20 p-8 rounded-2xl border border-white/30 shadow-xl hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-3">☁️ Secure Cloud Storage</h2>
            <p className="text-white/90">
              Your tasks stay safely stored in the backend, allowing access anytime,
              anywhere — with zero data loss.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center mt-16">
          <button
            className="px-10 py-4 text-xl font-semibold bg-white text-indigo-700 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
          >
            Start Managing Tasks 🚀
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-white/70 text-sm mt-10">
          Build your success, one task at a time.
        </p>
      </div>
    </div>
  );
}

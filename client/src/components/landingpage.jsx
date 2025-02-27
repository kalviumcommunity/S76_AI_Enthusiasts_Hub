import React from "react";

function LandingPg() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full text-center py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400">🚀 AI Enthusiast's Hub</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-3">
          Your ultimate AI resource hub – Learn, Share, and Explore!
        </p>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-4xl px-6">
        <p className="text-lg md:text-xl text-gray-300">
          Discover top AI websites, contribute new resources, and engage with the AI community.
        </p>
        <div className="flex  justify-center flex-col md:flex-row gap-6 mt-8">
          <button className="bg-blue-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
            Explore AI Websites
          </button>
          <button className="bg-blue-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
            Contribute Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-center text-blue-300">✨ Features</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">🔍 Discover AI Tools</h3>
            <p className="text-gray-300 mt-2">Find the best AI resources for learning, entertainment, and productivity.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">📝 Contribute AI Websites</h3>
            <p className="text-gray-300 mt-2">Add new AI websites, rate them, and help the community grow.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">📊 Vote & Comment</h3>
            <p className="text-gray-300 mt-2">Upvote your favorite AI tools and share your insights with others.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-center text-blue-300">💬 What Users Say</h2>
        <div className="mt-8 space-y-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-gray-300">"This hub has helped me find amazing AI tools I never knew existed!" - Alex T.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-gray-300">"I love how easy it is to contribute new AI websites. Great initiative!" - Sarah L.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-blue-300">🚀 Join the AI Community Today!</h2>
        <p className="text-gray-300 mt-2">Sign up now and become a part of the AI Enthusiast's Hub.</p>
        <button className="mt-6 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-400 text-sm">
        <p>© 2025 AI Enthusiast's Hub | Made with ❤️ by AI Enthusiasts</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-blue-400 transition">Twitter</a>
          <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPg;

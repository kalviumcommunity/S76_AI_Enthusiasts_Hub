import React from "react";
import { Link } from "react-router-dom";

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
        <div className="flex justify-center flex-col md:flex-row gap-6 mt-8">
          <Link to={'user-reviews'}>
          <button className="bg-blue-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition shadow-lg">
            Explore AI Websites
          </button>
          </Link>
          <button className="bg-blue-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition shadow-lg">
            Contribute Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-center text-blue-300">✨ Features</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { icon: "🔍", title: "Discover AI Tools", description: "Find the best AI resources for learning, entertainment, and productivity." },
            { icon: "📝", title: "Contribute AI Websites", description: "Add new AI websites, rate them, and help the community grow." },
            { icon: "📊", title: "Vote & Comment", description: "Upvote your favorite AI tools and share your insights with others." }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold">{feature.icon} {feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-center text-blue-300">💬 What Users Say</h2>
        <div className="mt-8 space-y-6">
          {[
            { user: "Alex T.", comment: "This hub has helped me find amazing AI tools I never knew existed!" },
            { user: "Sarah L.", comment: "I love how easy it is to contribute new AI websites. Great initiative!" }
          ].map((review, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-300">"{review.comment}" - {review.user}</p>
            </div>
          ))}
        </div>

        {/* Button to navigate to the User Reviews Page */}
        <div className="text-center mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition">
              View All Reviews
            </button>
          
        </div>
      </section>

      {/* Call to Action
      <section className="mt-16 text-center max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-blue-300">🚀 Join the AI Community Today!</h2>
        <p className="text-gray-300 mt-2">Sign up now and become a part of the AI Enthusiast's Hub.</p>
        <button className="mt-6 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition shadow-lg">
          Get Started
        </button>
      </section> */}

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-400 text-sm">
        <p>© 2025 AI Enthusiast's Hub | Made with ❤️ by AI Enthusiasts</p>
        <div className="flex justify-center gap-4 mt-2">
          {["Twitter", "LinkedIn", "GitHub"].map((platform, index) => (
            <a key={index} href="#" className="hover:text-blue-400 transition">{platform}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default LandingPg;

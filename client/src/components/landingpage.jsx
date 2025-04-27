import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogIn, LogOut, ChevronDown } from "lucide-react";

function LandingPg() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mock login toggle for demo purposes
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Add CSS animations via style tag in the head on component mount
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes gradientText {
        0% { color: #60a5fa; }
        50% { color: #a78bfa; }
        100% { color: #60a5fa; }
      }
      
      .animate-fadeIn {
        opacity: 0;
        animation: fadeIn 1s forwards;
      }
      
      .animate-slideUp {
        animation: slideUp 0.8s forwards;
      }
      
      .animate-gradientText {
        animation: gradientText 3s infinite;
      }
      
      .animation-delay-300 {
        animation-delay: 0.3s;
      }
      
      .animation-delay-500 {
        animation-delay: 0.5s;
      }
      
      /* Adding vendor prefixes for better compatibility */
      html {
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }
      
      .user-select-none {
        -webkit-user-select: none;
        user-select: none;
      }
      
      .width-full {
        width: -webkit-fill-available;
        width: stretch;
        width: 100%;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center">
      {/* Fixed Navbar */}
      <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-400">AI Enthusiast's Hub</h2>
          
          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-400 transition-colors duration-300">Features</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors duration-300">Testimonials</a>
            <Link to="/user-reviews" className="hover:text-blue-400 transition-colors duration-300">Reviews</Link>
          </div>
          
          {/* Auth Button - Added aria-label for accessibility */}
          <div className="flex items-center space-x-2">
            {isLoggedIn ? (
              <button 
                onClick={toggleLogin}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
                aria-label="Logout"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <Link to="/login">
                <button 
                  onClick={toggleLogin}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
                  aria-label="Sign In"
                >
                  <LogIn size={18} />
                  <span>Sign In</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Header Section with animation */}
      <header className="w-full text-center py-24 mt-12">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400">
            🚀 <span className="animate-gradientText">AI Enthusiast's Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-3 animate-slideUp">
            Your ultimate AI resource hub – Learn, Share, and Explore!
          </p>
        </div>
        <div className="flex justify-center flex-col md:flex-row gap-6 mt-8 animate-fadeIn animation-delay-300">
          <a href="#features">
            <button 
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
              aria-label="Explore Features"
            >
              Explore Now
              <ChevronDown size={20} className="animate-bounce" />
            </button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-4xl px-6 animate-fadeIn animation-delay-500">
        <p className="text-lg md:text-xl text-gray-300">
          Discover top AI websites, contribute new resources, and engage with the AI community.
        </p>
        <div className="flex justify-center flex-col md:flex-row gap-6 mt-8">
          <Link to="user-reviews">
            <button 
              className="bg-blue-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50"
              aria-label="Explore AI Websites"
            >
              Explore AI Websites
            </button>
          </Link>
          <button 
            className="bg-blue-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            aria-label="Contribute Resources"
          >
            Contribute Now
          </button>
        </div>
      </section>

      {/* Features Section with hover effects */}
      <section id="features" className="mt-24 max-w-5xl px-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-center text-blue-300">✨ Features</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { icon: "🔍", title: "Discover AI Tools", description: "Find the best AI resources for learning, entertainment, and productivity." },
            { icon: "📝", title: "Contribute AI Websites", description: "Add new AI websites, rate them, and help the community grow." },
            { icon: "📊", title: "Vote & Comment", description: "Upvote your favorite AI tools and share your insights with others." }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-gray-700 hover:shadow-xl transform hover:-translate-y-2 cursor-pointer ${activeFeature === index ? 'ring-2 ring-blue-400' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              role="button"
              tabIndex={0}
              aria-label={`Feature: ${feature.title}`}
            >
              <div className="text-4xl mb-3" aria-hidden="true">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section with animation */}
      <section id="testimonials" className="mt-24 max-w-4xl px-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-center text-blue-300">💬 What Users Say</h2>
        <div className="mt-8 space-y-6">
          {[
            { user: "Alex T.", comment: "This hub has helped me find amazing AI tools I never knew existed!", avatar: "A" },
            { user: "Sarah L.", comment: "I love how easy it is to contribute new AI websites. Great initiative!", avatar: "S" }
          ].map((review, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 hover:bg-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold" aria-hidden="true">
                {review.avatar}
              </div>
              <div>
                <p className="text-gray-300">"{review.comment}"</p>
                <p className="text-blue-400 font-medium mt-1">{review.user}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter subscription */}
      <section className="mt-24 w-full max-w-4xl px-6 bg-gray-800 rounded-lg p-8 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-300">Stay Updated</h2>
          <p className="text-gray-300 mt-2">Subscribe to our newsletter for the latest AI news and tools</p>
        </div>
        <form className="mt-6 flex flex-col md:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            id="email-subscription"
            name="email" 
            autoComplete="email"
            aria-label="Email address for newsletter"
            required
          />
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer with improved links */}
      <footer className="mt-24 py-8 w-full bg-gray-900 text-center text-gray-400">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg">© 2025 AI Enthusiast's Hub | Made with ❤️ by AI Enthusiasts</p>
          <div className="flex justify-center gap-6 mt-4">
            {[
              { name: "Twitter", icon: "𝕏", url: "#twitter" },
              { name: "LinkedIn", icon: "in", url: "#linkedin" }, 
              { name: "GitHub", icon: "⌨", url: "#github" }
            ].map((platform, index) => (
              <a 
                key={index} 
                href={platform.url}
                className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-1"
                aria-label={`Visit our ${platform.name} page`}
              >
                <span className="font-bold" aria-hidden="true">{platform.icon}</span> {platform.name}
              </a>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-bold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Directory</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPg;
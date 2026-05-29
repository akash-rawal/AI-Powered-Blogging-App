import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuMail, LuGithub, LuLinkedin, LuTwitter, LuArrowRight, LuSparkles } from "react-icons/lu";
import toast from "react-hot-toast";
import LOGO from "../../../assets/6534601.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    toast.success("Subscribed successfully to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-20">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <img src={LOGO} alt="logo" className="h-[40px] md:h-[48px] rounded-lg bg-white p-1" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Discover cutting-edge tech articles, coding guides, and expert perspectives designed to elevate your developer workflow.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all hover:-translate-y-1 duration-300"
              >
                <LuGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all hover:-translate-y-1 duration-300"
              >
                <LuLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all hover:-translate-y-1 duration-300"
              >
                <LuTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Portal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/admin-login" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Admin Login
                </Link>
              </li>
              <li>
                <Link to="/admin/dashboard" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="#support" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <LuSparkles className="w-4 h-4 text-sky-400 animate-pulse" /> Keep Updated
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to get notified about the latest developer guides and articles.
            </p>
            {subscribed ? (
              <div className="text-emerald-400 text-sm font-semibold flex items-center gap-2 bg-emerald-950/30 border border-emerald-900/30 px-4 py-3 rounded-2xl">
                <span>✓ Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mt-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-slate-900 transition-all text-white placeholder-slate-500"
                  />
                  <button
                    type="submit"
                    className="bg-linear-to-r from-sky-500 to-cyan-400 hover:scale-[1.02] text-white p-3 rounded-2xl flex items-center justify-center shrink-0 cursor-pointer shadow-md hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <LuArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} BlogApp. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-sky-400 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-sky-400 transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

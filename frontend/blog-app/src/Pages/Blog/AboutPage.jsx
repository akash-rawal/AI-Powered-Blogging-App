import React from 'react';
import BlogLayout from '../../components/layout/BlogLayout/BlogLayout';
import { LuSparkles, LuUsers, LuTarget, LuHeart, LuArrowRight } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <BlogLayout activeMenu="About">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-slate-950 text-white rounded-[2.5rem] mb-16 px-8 py-20 md:px-16 md:py-28 flex flex-col items-center justify-center text-center shadow-2xl transition-all group">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 text-xs sm:text-sm font-medium text-sky-300 shadow-inner tracking-wide">
              <LuSparkles className="w-4 h-4 fill-sky-300 animate-spin-slow" />
              <span>Behind the Scenes</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              We Empower <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">Curiosity & Creativity.</span>
            </h1>
            
            <p className="text-gray-300/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
              We are a team of tech enthusiasts, writers, and designers committed to sharing high-quality, actionable insights for the modern developer.
            </p>
          </div>
        </div>

        {/* Brand Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 transition-transform">
              <LuTarget className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              To distill complex technology concepts into simple, structured, and beautiful reads that help developers elevate their craft.
            </p>
          </div>

          <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
              <LuUsers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Community</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Fostering a collaborative ecosystem where tech creators and learners exchange fresh perspectives and robust solutions daily.
            </p>
          </div>

          <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
              <LuHeart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Passion</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              We live and breathe software design, clean code, and user experience, striving to bring you nothing less than aesthetic excellence.
            </p>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="bg-gradient-to-tr from-sky-50/50 via-white to-indigo-50/30 rounded-[2.5rem] border border-slate-100 p-8 md:p-16 mb-20 shadow-sm flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              The Journey Towards Better Tech Publishing.
            </h2>
            <p className="text-slate-600 leading-relaxed text-md font-light">
              This blog began with a simple philosophy: technical documentation doesn't have to be dry, and developer blogs don't have to be visually unappealing. We believe in visual clarity, premium interfaces, and detailed curation.
            </p>
            <p className="text-slate-600 leading-relaxed text-md font-light">
              By utilizing AI for smart features like instant post summarization and content insights, combined with top-tier human writing, we bring you a publishing experience that feels truly futuristic.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-2xl rotate-3 scale-102 opacity-10 filter blur-lg"></div>
            <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Aesthetic First</h4>
                    <p className="text-xs text-slate-500">Premium design to complement advanced ideas.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">AI Enhanced</h4>
                    <p className="text-xs text-slate-500">Integrated summaries, tag insights, and more.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Pure Value</h4>
                    <p className="text-xs text-slate-500">No filler content—just comprehensive guides.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 text-white rounded-[2rem] p-10 md:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-[50px]"></div>
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold">Have Questions or Want to Collaborate?</h3>
            <p className="text-slate-300 text-sm md:text-base font-light">
              We are always excited to hear from fellow developers, writers, or potential partners. Let's build something beautiful together.
            </p>
            <div>
              <button 
                onClick={() => navigate('/contact')}
                className="group relative inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-md hover:bg-sky-50 transition-all hover:scale-[1.03] cursor-pointer"
              >
                Get in Touch
                <LuArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default AboutPage;

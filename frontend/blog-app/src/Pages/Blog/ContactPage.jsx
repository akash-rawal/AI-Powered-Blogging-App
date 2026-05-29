import React, { useState } from 'react';
import BlogLayout from '../../components/layout/BlogLayout/BlogLayout';
import { LuSparkles, LuMail, LuPhone, LuMapPin, LuSend,  } from 'react-icons/lu';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <BlogLayout activeMenu="Contact">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold text-sky-600 shadow-inner">
            <LuSparkles className="w-4 h-4 fill-sky-200" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            We'd Love to Hear From You.
          </h1>
          <p className="text-slate-500 font-light text-md sm:text-lg">
            Have a question, feedback, or an idea for a guest post? Drop us a line and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Details Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50/60 border border-slate-100/80 rounded-3xl p-8 space-y-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 shrink-0">
                    <LuMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-950 text-sm">Email Us</h5>
                    <p className="text-xs text-slate-400 mt-0.5">For general inquiries</p>
                    <a href="mailto:hello@blogapp.com" className="text-sm font-medium text-sky-600 hover:text-sky-700 hover:underline">
                      hello@blogapp.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 shrink-0">
                    <LuPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-950 text-sm">Call Us</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Mon-Fri from 9am to 6pm</p>
                    <a href="tel:+1234567890" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shrink-0">
                    <LuMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-950 text-sm">Headquarters</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Visit our collaborative workspace</p>
                    <p className="text-sm font-medium text-slate-700">
                      100 Tech Hub Blvd, Suite 400<br />San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles or note */}
            <div className="bg-gradient-to-tr from-sky-50/20 to-indigo-50/20 border border-slate-100 rounded-3xl p-8 text-center space-y-4">
              <h4 className="font-bold text-slate-800 text-sm">Follow Our Socials</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Stay updated with the latest posts, trends, and design releases by following us on social media.
              </p>
              <div className="flex justify-center gap-3">
                {['Twitter', 'GitHub', 'LinkedIn'].map((platform) => (
                  <span key={platform} className="px-3.5 py-1.5 bg-white border border-slate-100 rounded-full text-xs font-semibold text-slate-600 cursor-pointer hover:border-sky-500 hover:text-sky-600 transition-all duration-300">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-100/50">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                    <p className="text-slate-500 max-w-md mx-auto text-sm font-light">
                      Thank you for getting in touch. One of our team members will read your message and respond as quickly as possible.
                    </p>
                  </div>
                  <div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100/80 px-6 py-2.5 rounded-full transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Collaboration opportunity, feedback, etc."
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your thoughts here..."
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-3 bg-linear-to-r from-sky-500 to-cyan-400 hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-200/50 text-white font-bold py-3.5 px-8 rounded-2xl cursor-pointer disabled:opacity-60 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <LuSend className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default ContactPage;

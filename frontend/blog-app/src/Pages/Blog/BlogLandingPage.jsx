import React, { useEffect, useState } from 'react'
import BlogLayout from '../../components/layout/BlogLayout/BlogLayout'

import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  LuGalleryVerticalEnd,
  LuLoaderCircle,
  LuArrowRight,
  LuSparkles
} from "react-icons/lu";
import FeaturedBlogPost from './Components/FeaturedBlogPost';
import BlogPostSummaryCard from './Components/BlogPostSummaryCard';
import TrendingPostsSection from './Components/TrendingPostsSection';
import { STATIC_BLOGS } from '../../utils/staticData';




const BlogLandingPage = () => {
  const navigate = useNavigate();

const [blogPostList, setBlogPostList] = useState([]);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(null);
const [isLoading, setIsLoading] = useState(false);

// Fetch paginated posts
const getAllPosts = async (pageNumber = 1) => {
  try {
  setIsLoading(true);
  const response = await axiosInstance.get(API_PATHS.POSTS.GET_ALL, {
    params: {
      status: "published",
      page: pageNumber,
    },
  });

  const { posts, totalpages:totalPages } = response.data;

  setBlogPostList((prevPosts) =>
    pageNumber === 1 ? posts : [...prevPosts, ...posts]
  );

  setTotalPages(totalPages);
  setPage(pageNumber);
} catch (error) {
  console.error("Error fetching data:", error);
} finally {
  setIsLoading(false);
}

    
};

// Load more posts
const handleLoadMore = () => {
    if (page < totalPages) {
        getAllPosts(page + 1);
    }
};

// Initial load
useEffect(() => {
    getAllPosts(1);
}, []);

const handleClick = (post) => {
    navigate(`/${post.slug}`);
};

  const combinedBlogs = [
    ...STATIC_BLOGS,
    ...blogPostList.filter(p => !STATIC_BLOGS.some(s => s.slug === p.slug))
  ];

  const featuredPost = combinedBlogs.length > 0 ? combinedBlogs[0] : null;
  const otherPosts = combinedBlogs.slice(1);

  return (
    <BlogLayout activeMenu="Home">
      {/* High-end Modern Hero Section */}
      <div className="relative overflow-hidden bg-slate-950 text-white rounded-[2.5rem] mb-16 px-8 py-24 md:px-16 md:py-32 flex flex-col items-center justify-center text-center shadow-2xl transition-all group">
        {/* Animated Ambient Gradients */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 text-xs sm:text-sm font-medium text-sky-300 shadow-inner tracking-wide">
            <LuSparkles className="w-4 h-4 fill-sky-300" />
            <span>Welcome to the Next Generation of Blogging</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
            Knowledge, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">Curated for You.</span>
          </h1>
          
          <p className="text-gray-300/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
            Immerse yourself in cutting-edge articles blending human creativity with powerful technology. 
          </p>

          <div className="pt-4">
            <button 
              onClick={() => {
                const el = document.getElementById('main-blog-feed');
                el?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="group relative inline-flex items-center gap-3 bg-white text-slate-950 font-bold px-10 py-4 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              Explore the Feed
              <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 lg:gap-12 md:mx-2" id="main-blog-feed">
        <div className="col-span-12 lg:col-span-8">
          {featuredPost && (
            <div className="mb-12 group">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-sky-500 rounded-full"></span>
                Featured Spotlight
              </h3>
              <div className="transform transition-transform duration-500 hover:scale-[1.01]">
                <FeaturedBlogPost
                  title={featuredPost.title}
                  coverImageUrl={featuredPost.coverImageUrl}
                  description={featuredPost.content}
                  tags={featuredPost.tags}
                  updatedOn={
                    featuredPost.updatedAt
                      ? moment(featuredPost.updatedAt).format("Do MMM YYYY")
                      : "_"
                  }
                  authorName={featuredPost.author.name}
                  authProfileImg={featuredPost.author.profileImageUrl}
                  onClick={() => handleClick(featuredPost)}
                />
              </div>
            </div>
          )}

          {otherPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                Lately Published
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherPosts.map((item) => (
                  <div key={item._id} className="hover:scale-[1.02] transition-transform duration-300">
                    <BlogPostSummaryCard
                      title={item.title}
                      coverImageUrl={item.coverImageUrl}
                      description={item.content}
                      tags={item.tags}
                      updatedOn={
                        item.updatedAt
                          ? moment(item.updatedAt).format("Do MMM YYYY")
                          : "_"
                      }
                      authorName={item.author.name}
                      authProfileImg={item.author.profileImageUrl}
                      onClick={() => handleClick(item)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {page < totalPages && (
            <div className="flex items-center justify-center mt-16">
              <button
                className="group flex items-center gap-3 text-sm font-bold bg-slate-900 text-white px-10 py-4 rounded-full shadow-xl shadow-slate-900/20 hover:bg-sky-600 hover:shadow-sky-600/30 transition-all duration-300 cursor-pointer disabled:opacity-60"
                disabled={isLoading}
                onClick={handleLoadMore}
              >
                {isLoading ? (
                  <LuLoaderCircle className="animate-spin text-lg" />
                ) : (
                  <LuGalleryVerticalEnd className="text-lg group-hover:scale-110 transition-transform" />
                )}{" "}
                {isLoading ? "Fetching new content..." : "Load More Articles"}
              </button>
            </div>
          )}
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="sticky top-24">
            <TrendingPostsSection />
          </div>
        </div>
      </div>
    </BlogLayout>
  );

}

export default BlogLandingPage

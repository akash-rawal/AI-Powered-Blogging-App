import React from "react";

const FeaturedBlogPost = ({
  title,
  coverImageUrl,
  description,
  tags = [],
  updatedOn,
  authorName,
  authProfileImg,
  onClick,
}) => {
  return (
  <div
    className="grid grid-cols-1 md:grid-cols-12 bg-white shadow-xl shadow-gray-100/80 rounded-2xl overflow-hidden cursor-pointer border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
    onClick={onClick}
  >
    <div className="md:col-span-6 overflow-hidden">
      <img
        src={coverImageUrl}
        alt={title}
        className="w-full h-64 md:h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="md:col-span-6 flex flex-col justify-center">
      <div className="p-6 md:p-10">
        <h2 className="text-lg md:text-2xl font-bold mb-2 line-clamp-3">
          {title}
        </h2>
        <p className="text-gray-700 text-[13px] mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-sky-200/50 text-sky-800/80 text-xs font-medium px-3 py-0.5 rounded-full text-nowrap"
            >
              # {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <img
            src={authProfileImg}
            alt={authorName}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-gray-600 text-sm">{authorName}</p>
            <p className="text-gray-500 text-xs">{updatedOn}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default FeaturedBlogPost;

import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogPostSummaryCard = ({
     title,
  coverImageUrl,
  description,
  tags = [],
  updatedOn,
  authorName,
  authProfileImg,
  onClick,
}) => {
  const navigate = useNavigate();
  return <div
  className="bg-white shadow-xl shadow-gray-100/60 rounded-2xl overflow-hidden cursor-pointer border border-gray-100 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-1"
  onClick={onClick}
>
  <div className="overflow-hidden relative">
    <img
      src={coverImageUrl}
      alt={title}
      className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
  </div>

  <div className="p-4 md:p-6">
    <h2 className="text-base md:text-lg font-bold mb-2 line-clamp-3">
      {title}
    </h2>

    <p className="text-gray-700 text-xs mb-4 line-clamp-3">{description}</p>

    <div className="flex items-center flex-wrap gap-2 mb-4">
      {tags.slice(0, 3).map((tag, index) => (
        <button
          key={index}
          className="bg-sky-200/50 text-sky-800/80 text-xs font-medium px-3 py-0.5 rounded-full text-nowrap cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/tag/${tag}`);
          }}
        >
          # {tag}
        </button>
      ))}
    </div>
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
}

export default BlogPostSummaryCard

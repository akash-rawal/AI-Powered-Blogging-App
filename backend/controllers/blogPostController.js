const { cloudinary } = require("../config/cloudinary");
const BlogPost = require("../models/BlogPost");
const mongoose = require("mongoose");

const createPost = async (req, res) => {
  try {
    const { title, content, coverImageUrl, coverImagePublicId, tags, isDraft, generatedByAI } =
      req.body;
    const slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const newPost = new BlogPost({
      title,
      slug,
      content,
      coverImageUrl,
      coverImagePublicId,
      tags,
      author: req.user._id,
      isDraft,
      generatedByAI,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create post", error: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "post not found" });
    if (
      post.author.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "not authorise to update this post" });
    }
    const updatedData = req.body;
    if (updatedData.title) {
      updatedData.slug = updatedData.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }

    if (
      updatedData.coverImagePublicId !== undefined &&
      post.coverImagePublicId &&
      post.coverImagePublicId !== updatedData.coverImagePublicId
    ) {
      try {
        await cloudinary.uploader.destroy(post.coverImagePublicId);
      } catch (err) {
        console.error("Failed to delete old image from Cloudinary:", err);
      }
    }

    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update post", error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "post not found" });

    if (post.coverImagePublicId) {
      try {
        await cloudinary.uploader.destroy(post.coverImagePublicId);
      } catch (err) {
        console.error("Failed to delete image from Cloudinary during post deletion:", err);
      }
    }

    await post.deleteOne();
    res.json({ message: "post deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete post", error: err.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const status = req.query.status || "published";
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;

    let filter = {};
    if (status === "published") filter.isDraft = false;
    else if (status === "draft") filter.isDraft = true;

    const posts = await BlogPost.find(filter)
      .populate("author", "name profileImageUrl")
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit);

    const [totalCount, allCount, publishedCount, draftCount] =
      await Promise.all([
        BlogPost.countDocuments(filter),
        BlogPost.countDocuments(),
        BlogPost.countDocuments({ isDraft: false }),
        BlogPost.countDocuments({ isDraft: true }),
      ]);

    res.json({
      posts,
      page,
      totalpages: Math.ceil(totalCount / limit),
      totalCount,
      counts: {
        all: allCount,
        published: publishedCount,
        draft: draftCount,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get all post", error: err.message });
  }
};

const getpostBySlug = async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug }).populate(
      "author",
      "name profileImageUrl"
    );
    if (!post) return res.status(404).json({ message: "post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to get post", error: err.message });
  }
};

const getPostsByTag = async (req, res) => {
  try {
    const posts = await BlogPost.find({
      tags: req.params.tag,
      isDraft: false,
    }).populate("author", "name profileImageUrl");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to get post", error: err.message });
  }
};

const searchPosts = async (req, res) => {
  try {
    const q = req.query.q;
    const posts = await BlogPost.find({
      isDraft: false,
      $or: [
        {
          title: { $regex: q, $options: "i" }, 
        },
        {
          content: { $regex: q, $options: "i" }, 
        },
      ],
    }).populate("author", "name profileImageUrl");
    res.json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to search post", error: err.message });
  }
};

const incrementView = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "post not found" });
    post.views += 1;
    await post.save();
    res.json(post.views);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to failed to increment post",
        error: err.message,
      });
  }
};

const likePost = async (req, res) => {
  try {
    await BlogPost.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
    res.json({ message: "liked added" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to like a  post", error: err.message });
  }
};

const getTopPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find({ isDraft: false })
      .sort({ views: -1, likes: -1 })
      .limit(5);
    res.json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create post", error: err.message });
  }
};

module.exports = {
  getAllPosts,
  getPostsByTag,
  getTopPosts,
  getpostBySlug,
  likePost,
  incrementView,
  searchPosts,
  deletePost,
  updatePost,
  createPost,
};

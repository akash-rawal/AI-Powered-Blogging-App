import BLOG_IMAGE_1 from "../assets/blog_img_1.png";
import BLOG_IMAGE_2 from "../assets/blog_img_2.png";

export const STATIC_BLOGS = [
  {
    _id: "static-1",
    title: "Unlocking Creativity with AI-Driven Blogging Tools",
    coverImageUrl: BLOG_IMAGE_1,
    content: "Explore how artificial intelligence is revolutionizing written content. From generating topic ideas to refining tone and structure, modern AI tools can exponentially boost your output. Dive in to learn strategies for pairing human authenticity with machine efficiency.\n\n### Key Benefits of AI Blogging:\n1. **Speed**: Draft content in minutes instead of hours.\n2. **Optimization**: Automatically improve readability and flow.\n3. **Inspiration**: Never experience writer's block again with dynamic brainstorming features.",
    tags: ["AI", "Productivity", "Creative"],
    updatedAt: new Date().toISOString(),
    author: {
      name: "AI Explorer",
      profileImageUrl: "https://ui-avatars.com/api/?name=AI+Explorer&background=0D8ABC&color=fff"
    },
    slug: "static-ai-blog",
    likes: 142,
    views: 1200
  },
  {
    _id: "static-2",
    title: "The Evolution of Modern Frontend Development",
    coverImageUrl: BLOG_IMAGE_2,
    content: "Web development moves fast. Staying relevant means keeping your pulse on the latest framework features, design methodologies, and performance benchmarks. In this post, we take a detailed look at what the next generation of responsive, interactive web apps will look like.\n\n### Trends for 2026:\n* **Rich Aesthetics**: Fluid animations, dynamic gradients, and glassmorphism.\n* **Next-Level Performance**: Server components and edge compute reducing latencies.\n* **Component-Driven Design**: Highly reusable, accessible design systems.",
    tags: ["React", "Tailwind", "2026"],
    updatedAt: new Date().toISOString(),
    author: {
      name: "Dev Lead",
      profileImageUrl: "https://ui-avatars.com/api/?name=Dev+Lead&background=D80D50&color=fff"
    },
    slug: "static-frontend-evolution",
    likes: 98,
    views: 850
  }
];

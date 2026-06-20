const { GoogleGenAI } = require("@google/genai");
const Groq = require("groq-sdk");
const {
  blogPostIdeasPrompt,
  generateReplyPrompt,
  blogSummaryPrompt,
} = require("../utils/Prompt");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const generateAIContent = async (prompt) => {
  try {
    const response = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.1-8b-instant",
    });
    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq API failed, falling back to Gemini:", error.message);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });
    return response.text;
  }
};

const generateBlogPost = async (req, res) => {
  try {
     const {title,tone} = req.body;

     if(!title || !tone){
        return res.status(400).json({message:"missing required feilds"})
     }
     const prompt = `Write a markdown-formatted blogPost titled "${title}". use a ${tone} tone. Include an introduction subheadings code examples if relevalent and a conclusion`;
     const rawText = await generateAIContent(prompt);
     res.status(200).json(rawText);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate blog post",
      error: error.message,
    });
  }
};

const generateBlogPostIdeas = async (req, res) => {
  try {
    const { topics } = req.body;

    if (!topics) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = blogPostIdeasPrompt(topics);
    const rawText = await generateAIContent(prompt);

    // Clean it: Remove ```json and ``` from beginning and end
    const cleanedText = rawText
      .replace(/^```json\s*/, "") // remove starting ```json
      .replace(/```$/, "") // remove ending ```
      .trim(); // remove extra spaces

    // Now safe to parse
    const data = JSON.parse(cleanedText);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate blog post ideas",
      error: error.message,
    });
  }
};

const generateCommentReply = async (req, res) => {
  try {
    const { author, content } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = generateReplyPrompt({ author, content });
    const rawText = await generateAIContent(prompt);
    res.status(200).json(rawText);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate comment repy",
      error: error.message,
    });
  }
};

const generatePostSummary = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = blogSummaryPrompt(content);
    const rawText = await generateAIContent(prompt);

    // Clean it: Remove ```json and ``` from beginning and end
    const cleanedText = rawText
      .replace(/^```json\s*/, "") // remove starting ```json
      .replace(/```$/, "") // remove ending ```
      .trim(); // remove extra spaces

    // Now safe to parse
    const data = JSON.parse(cleanedText);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate post summarry",
      error: error.message,
    });
  }
};

module.exports = {
  generateBlogPostIdeas,
  generateBlogPost,
  generatePostSummary,
  generateCommentReply,
};

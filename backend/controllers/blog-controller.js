import {
  createBlog,
  updateBlog,
  getBlogById,
  getBlogsByUserId,
  updateBlogStatus,
  deleteBlog,
} from "../db/blog-queries.js";

//new blog
async function handleCreateBlog(req, res) {
  const { title, content, authorId } = req.body;
  try {
    if (!title || !content || !authorId) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newBlog = await createBlog(title, content, authorId);
    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ error: "Could not create blog" });
  }
}
//update blog
async function handleUpdateBlog(req, res) {
  const blogId = req.params.id;
  const { title, content } = req.body;
  try {
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }
    const updatedBlog = await updateBlog(blogId, title, content);
    res.status(200).json(updatedBlog);
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ error: "Could not update blog" });
  }
}
//get blog by id
async function handleGetBlogById(req, res) {
  const userId = req.params.userId;
  const blogId = req.params.id;
  try {
    if (!userId || !blogId) {
      return res
        .status(400)
        .json({ error: "User ID and Blog ID are required" });
    }
    const blog = await getBlogById(userId, blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.error("Error fetching blog by ID:", err);
    res.status(500).json({ error: "Could not fetch blog" });
  }
}
//get all user blogs
async function handleGetBlogsByUserId(req, res) {
  const userId = req.params.id;
  try {
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const blogs = await getBlogsByUserId(userId);
    res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching blogs by user ID:", err);
    res.status(500).json({ error: "Could not fetch blogs" });
  }
}
//update blog status
async function handleUpdateBlogStatus(req, res) {
  const authorId = req.params.authorId;
  const blogId = req.params.id;
  const { newStatus } = req.body;
  try {
    if (!newStatus) {
      return res.status(400).json({ error: "New status is required" });
    }
    const updatedBlog = await updateBlogStatus(authorId, blogId, newStatus);
    res.status(200).json(updatedBlog);
  } catch (err) {
    console.error("Error updating blog status:", err);
    res.status(500).json({ error: "Could not update blog status" });
  }
}
//delete blog
async function handleDeleteBlog(req, res) {
  const blogId = req.params.id;
  try {
    if (!blogId) {
      return res.status(400).json({ error: "Blog ID is required" });
    }
    const deletedBlog = await deleteBlog(blogId);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ error: "Could not delete blog" });
  }
}
export {
  handleCreateBlog,
  handleUpdateBlog,
  handleGetBlogById,
  handleGetBlogsByUserId,
  handleUpdateBlogStatus,
  handleDeleteBlog,
};

import {
  createComment,
  updateComment,
  updateCommentLikes,
  getUserAllComments,
  getCommentsByBlogId,
  getCommentById,
  deleteComment,
} from "../db/comment-queries.js";

//new comment
async function handleCreateComment(req, res) {
  const { blogId, userId, content } = req.body;
  try {
    if (!blogId || !userId || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newComment = await createComment(blogId, userId, content);
    res.status(201).json(newComment);
  } catch (err) {
    console.error("Error creating comment:", err);
    res.status(500).json({ error: "Could not create comment" });
  }
}
//update comment
async function handleUpdateComment(req, res) {
  const commentId = req.params.id;
  const { content } = req.body;
  try {
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }
    const updatedComment = await updateComment(commentId, content);
    res.status(200).json(updatedComment);
  } catch (err) {
    console.error("Error updating comment:", err);
    res.status(500).json({ error: "Could not update comment" });
  }
}
//update likes
async function handleUpdateCommentLikes(req, res) {
  const commentId = req.params.id;
  const { likes } = req.body;
  try {
    if (!likes) {
      return res.status(400).json({ error: "Likes must be provided" });
    }
    const updatedComment = await updateCommentLikes(commentId, likes);
    res.status(200).json(updatedComment);
  } catch (err) {
    console.error("Error updating comment likes:", err);
    res.status(500).json({ error: "Could not update comment likes" });
  }
}
//get blog comments
async function handleGetCommentsByBlogId(req, res) {
  const blogId = req.params.id;
  try {
    if (!blogId) {
      return res.status(400).json({ error: "Blog ID is required" });
    }
    const comments = await getCommentsByBlogId(blogId);
    res.status(200).json(comments);
  } catch (err) {
    console.error("Error fetching comments by blog ID:", err);
    res.status(500).json({ error: "Could not fetch comments" });
  }
}
//get user all comments
async function handleGetCommentsByUserId(req, res) {
  const userId = req.params.id;
  try {
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const comments = await getUserAllComments(userId);
    res.status(200).json(comments);
  } catch (err) {
    console.error("Error fetching comments by user ID:", err);
    res.status(500).json({ error: "Could not fetch comments" });
  }
}
//get comment by id
async function handleGetCommentById(req, res) {
  const commentId = req.params.id;
  try {
    if (!commentId) {
      return res.status(400).json({ error: "Comment ID is required" });
    }
    const comment = await getCommentById(commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (err) {
    console.error("Error fetching comment by ID:", err);
    res.status(500).json({ error: "Could not fetch comment" });
  }
}
//delete comment
async function handleDeleteComment(req, res) {
  const commentId = req.params.id;
  try {
    if (!commentId) {
      return res.status(400).json({ error: "Comment ID is required" });
    }
    const deletedComment = await deleteComment(commentId);
    res.status(200).json(deletedComment);
  } catch (err) {
    console.error("Error deleting comment:", err);
    res.status(500).json({ error: "Could not delete comment" });
  }
}
export {
  handleCreateComment,
  handleUpdateComment,
  handleUpdateCommentLikes,
  handleGetCommentsByBlogId,
  handleGetCommentsByUserId,
  handleGetCommentById,
  handleDeleteComment,
};

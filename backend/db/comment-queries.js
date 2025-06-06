//new comment
async function createComment(userId, content, blogId) {
  try {
    const comment = await prisma.comment.create({
      data: {
        userId,
        blogId,
        content,
      },
    });
    return comment;
  } catch (err) {
    console.error("Error creating comment:", err);
    throw new Error("Could not create comment");
  }
}
//update comment
async function updateComment(commentId, newContent) {
  try {
    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { content: newContent },
    });
    return updatedComment;
  } catch (err) {
    console.error("Error updating comment:", err);
    throw new Error("Could not update comment");
  }
}
//update comment likes

async function updateCommentLikes(commentId, likes) {
  try {
    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { likes },
    });
    return updatedComment;
  } catch (err) {
    console.error("Error updating comment likes:", err);
    throw new Error("Could not update comment likes");
  }
}
//get comment by id
async function getCommentById(commentId) {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });
    return comment;
  } catch (err) {
    console.error("Error fetching comment by ID:", err);
    throw new Error("Could not fetch comment");
  }
}
//get all comments for a blog
async function getCommentsByBlogId(blogId) {
  try {
    const comments = await prisma.comment.findMany({
      where: { blogId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return comments;
  } catch (err) {
    console.error("Error fetching comments for blog:", err);
    throw new Error("Could not fetch comments");
  }
}
//delete comment by id
async function deleteComment(commentId) {
  try {
    const deletedComment = await prisma.comment.delete({
      where: { id: commentId },
    });
    return deletedComment;
  } catch (err) {
    console.error("Error deleting comment:", err);
    throw new Error("Could not delete comment");
  }
}
//get all comments
async function getUserAllComments(userId) {
  try {
    const comments = await prisma.comment.findMany({
      where: { userId },
      include: {
        blog: {
          select: {
            id: true,
            title: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return comments;
  } catch (err) {
    console.error("Error fetching all comments:", err);
    throw new Error("Could not fetch comments");
  }
}
export {
  createComment,
  updateComment,
  updateCommentLikes,
  getCommentById,
  getCommentsByBlogId,
  getUserAllComments,
  deleteComment,
};

//create new blog
async function createBlog(title, content, authorId) {
  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    return blog;
  } catch (err) {
    console.error("Error creating blog:", err);
    throw new Error("Could not create blog");
  }
}
//update blog
async function updateBlog(blogId, newTitle, newContent) {
  try {
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: { title: newTitle, content: newContent },
    });
    return updatedBlog;
  } catch (err) {
    console.error("Error updating blog:", err);
    throw new Error("Could not update blog");
  }
}
//get blog by id
async function getBlogById(userId, blogId) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: blogId, authorId: userId },
    });
    return blog;
  } catch (err) {
    console.error("Error fetching blog by ID:", err);
    throw new Error("Could not fetch blog");
  }
}
//get all user blogs
async function getBlogsByUserId(userId) {
  try {
    const blogs = await prisma.blog.findMany({
      where: { authorId: userId },
      orderBy: {
        createdAt: "desc",
      },
    });
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs by user ID:", err);
    throw new Error("Could not fetch blogs");
  }
}
//update blog status
async function updateBlogStatus(authorId, blogId, newStatus) {
  try {
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId, authorId: authorId },
      data: { status: newStatus },
    });
    return updatedBlog;
  } catch (err) {
    console.error("Error updating blog status:", err);
    throw new Error("Could not update blog status");
  }
}
//delete blog by id
async function deleteBlog(blogId) {
  try {
    const deletedBlog = await prisma.blog.delete({
      where: { id: blogId },
    });
    return deletedBlog;
  } catch (err) {
    console.error("Error deleting blog:", err);
    throw new Error("Could not delete blog");
  }
}
export{
    createBlog,
    updateBlog,
    getBlogById,
    getBlogsByUserId,
    updateBlogStatus,
    deleteBlog,
}
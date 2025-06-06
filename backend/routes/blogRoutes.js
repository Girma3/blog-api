import { Router } from "express";

import { authenticateJwt } from "../authentication/authController.js";
//blog related routes
const blogRoutes = Router();

import {
  handleCreateBlog,
  handleUpdateBlog,
  handleGetBlogById,
  handleGetBlogsByUserId,
  handleUpdateBlogStatus,
  handleDeleteBlog,
} from "../controllers/blog-controller.js";

blogRoutes.get("/:id", authenticateJwt, handleGetBlogById);
blogRoutes.get("/user/:id", authenticateJwt, handleGetBlogsByUserId);
blogRoutes.post("/", authenticateJwt, handleCreateBlog);
blogRoutes.put("/:id", authenticateJwt, handleUpdateBlog);
blogRoutes.patch("/:id/status", authenticateJwt, handleUpdateBlogStatus);
blogRoutes.delete("/:id", authenticateJwt, handleDeleteBlog);

export default blogRoutes;

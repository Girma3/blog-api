import { Router } from "express";

import { authenticateJwt } from "../authentication/authController.js";

import {
  handleCreateComment,
  handleUpdateComment,
  handleUpdateCommentLikes,
  handleGetCommentsByBlogId,
  handleGetCommentsByUserId,
  handleGetCommentById,
  handleDeleteComment,
} from "../controllers/comment-controller.js";
// comment related routes
const commentRoutes = Router();

commentRoutes.post("/", authenticateJwt, handleCreateComment);
commentRoutes.put("/:id", authenticateJwt, handleUpdateComment);
commentRoutes.patch("/:id/likes", authenticateJwt, handleUpdateCommentLikes);
commentRoutes.get("/blog/:id", authenticateJwt, handleGetCommentsByBlogId);
commentRoutes.get("/user/:id", authenticateJwt, handleGetCommentsByUserId);
commentRoutes.get("/:id", authenticateJwt, handleGetCommentById);
commentRoutes.delete("/:id", authenticateJwt, handleDeleteComment);

export default commentRoutes;

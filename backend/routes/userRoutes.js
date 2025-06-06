import { Router } from "express";
import { authenticateJwt } from "../authentication/authController.js";

import {
  handleCreateUser,
  handleUpdateUserName,
  handleUpdateUserAvatar,
  handleUpdateUserRole,
  handleGetUserById,
  handleGetAllUsers,
  handleDeleteUser,
} from "../controllers/user-controller.js";

// user related routes
const userRoutes = Router();

userRoutes.get("/:id", authenticateJwt, handleGetUserById);
userRoutes.get("/", authenticateJwt, handleGetAllUsers);
userRoutes.post("/", authenticateJwt, handleCreateUser);

userRoutes.patch("/:id/name", authenticateJwt, handleUpdateUserName);
userRoutes.patch("/:id/avatar", authenticateJwt, handleUpdateUserAvatar);
userRoutes.patch("/:id/role", authenticateJwt, handleUpdateUserRole);
userRoutes.delete("/:id", authenticateJwt, handleDeleteUser);

export default userRoutes;

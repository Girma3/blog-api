import { Router } from "express";

import { handleSignIn, handleLogIn } from "../controllers/auth-controller.js";
const authRoutes = Router();

authRoutes.get("/", (req, res, next) => {
  res.send("Welcome to the blog API");
});
authRoutes.post("/sign-in", handleSignIn);
authRoutes.post("/log-in", handleLogIn);

export default authRoutes;

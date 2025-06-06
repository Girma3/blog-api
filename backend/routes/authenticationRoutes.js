import { Router } from "express";

import {
  generateToken,
  authenticateJwt,
} from "../authentication/authController.js";

const authRoutes = Router();

authRoutes.get("/", (req, res, next) => {
  res.send("Welcome to the blog API");
});
authRoutes.post("/sign-in", (req, res) => {
  const users = [{ id: 3, name: "king", password: "1234" }];
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  const user = users.find((user) => user.id === Number(userId));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const token = generateToken(user);
  res.status(200).json({ token });
});
authRoutes.get("/protected", authenticateJwt, (req, res) => {
  const header = req.headers.authorization;
  res.status(200).json({
    message: "This is a protected route",
    // user: req.user,
    auth: header,
  });
});

export default authRoutes;

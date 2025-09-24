import { createUser, getUserByEmail } from "../db/user-queries.js";
import bcrypt from "bcrypt";
import { generateToken } from "../authentication/authController.js";
//sign in and log in controllers
async function handleSignIn(req, res) {
  const { userName, userEmail, userPassword } = req.body;
  try {
    if (!userName || !userPassword || !userEmail) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required" });
    }
    const hashPassword = await bcrypt.hash(userPassword, 10);
    const user = await createUser(userName, userEmail, hashPassword);
    console.log(user);
    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Could not create user" });
  }
}
async function handleLogIn(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({ error: "Could not log in user" });
  }
}
export { handleSignIn, handleLogIn };

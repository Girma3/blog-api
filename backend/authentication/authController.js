import jwt from "jsonwebtoken";
import passport from "./passportConfig.js";

// Use environment variable for secret key
const JWT_SECRET = process.env.JWT_KEY || "secret_key";

// Generate JWT token for a user
const generateToken = (user) => {
  if (!user || !user.id || !user.name) {
    throw new Error("User object must have 'id' and 'name' properties");
  }
  const payload = {
    id: user.id,
    name: user.name,
  };
  const options = {
    expiresIn: "7d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
};

async function authenticateJwt(req, res, next) {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Authentication failed" });
    }
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = user; // Attach user to request object
    next(); // Proceed to the next middleware or route handler
  })(req, res, next);
}


export { generateToken, authenticateJwt };

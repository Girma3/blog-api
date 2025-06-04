import express from "express";
//import blogRoutes from "./backend/routes/blogRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
const app = express();
const PORT = process.env.PORT || 3300;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ... http://localhost:${PORT}`);
});

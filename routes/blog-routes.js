import express from 'express';
const blogRouter = express.Router();
import { getAllBlogs } from '../controllers/blog-controller';
import { addBlog } from '../controllers/blog-controller';
import { updateBlog } from '../controllers/blog-controller';
import { getById } from '../controllers/blog-controller';
import { deleteBlog } from '../controllers/blog-controller';
import { getByUserId } from '../controllers/blog-controller';
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByUserId);
export default blogRouter;
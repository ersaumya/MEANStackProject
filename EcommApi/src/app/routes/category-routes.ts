import { CategoryController } from './../controllers/category-controller';
import * as express from "express";

export const categoryRoute = express.Router();

categoryRoute.get("/", CategoryController.getCategories);
categoryRoute.post("/", CategoryController.saveCategories);
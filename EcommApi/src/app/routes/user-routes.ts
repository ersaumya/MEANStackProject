import { UserController } from '../controllers/user-controller';
import * as express from "express";

export const userRoute=express.Router();
userRoute.post("/login",UserController.login);
userRoute.post("/register", UserController.register);
userRoute.put("/", UserController.updateProfile);
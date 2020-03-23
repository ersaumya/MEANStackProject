"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user-controller");
const express = require("express");
exports.userRoute = express.Router();
exports.userRoute.get("/", user_controller_1.UserController.login);
exports.userRoute.post("/register", user_controller_1.UserController.register);
exports.userRoute.put("/", user_controller_1.UserController.updateProfile);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user-controller");
const express = require("express");
const auth_1 = require("../middleware/auth");
exports.userRoute = express.Router();
exports.userRoute.post("/login", user_controller_1.UserController.login);
exports.userRoute.post("/register", user_controller_1.UserController.register);
exports.userRoute.put("/", auth_1.validateUser, user_controller_1.UserController.updateProfile);

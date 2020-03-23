"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class UserController {
    static login(req, res, next) {
        res.json({ user: "Test", success: "true" });
    }
    static register(req, res, next) {
        const user = new User_1.User(req.body);
        User_1.User.create(user, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Registration Successful', data: result });
            }
        });
    }
    static updateProfile(req, res, next) {
        console.log(req.body);
        res.json({ user: "Test", success: "true" });
    }
}
exports.UserController = UserController;

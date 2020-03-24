"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class UserController {
    static login(req, res, next) {
        const private_key = process.env.PRIVATE_KEY || "";
        User_1.User.findOne({ email: req.body.email }, (err, result) => {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                if (result != undefined) {
                    if (bcryptjs_1.compareSync(req.body.password, result.password)) {
                        const token = jsonwebtoken_1.sign({ id: result._id }, private_key, { expiresIn: '1h' });
                        res.json({ status: "success", message: 'Login Success!', data: token });
                    }
                    else {
                        res.json({ status: "failed", message: 'UserName or Password is incorrect!' });
                    }
                }
                else {
                    res.json({ status: "failed", message: 'UserName or Password is incorrect!' });
                }
            }
        });
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

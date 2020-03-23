"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    static login(req, res, next) {
        res.json({ user: "Test", success: "true" });
    }
    static register(req, res, next) {
        console.log(req.body);
        res.json({ user: "Test", success: "true" });
    }
    static updateProfile(req, res, next) {
        console.log(req.body);
        res.json({ user: "Test", success: "true" });
    }
}
exports.UserController = UserController;

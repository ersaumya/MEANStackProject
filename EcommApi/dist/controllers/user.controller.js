"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    login(req, res, next) {
        res.json({ user: "Test", success: "true" });
    }
}
exports.UserController = UserController;

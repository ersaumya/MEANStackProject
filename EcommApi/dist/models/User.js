"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const salt_Round = process.env.SALT_ROUND;
let UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 12
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    role: {
        type: String,
        trim: true,
        required: true,
        default: 'User'
    }
});
UserSchema.pre('save', function (next) {
    const user = this;
    if (user.isModified("password")) {
        const saltRound = parseInt(salt_Round);
        bcryptjs_1.genSalt(saltRound, (err, salt) => {
            bcryptjs_1.hash(user.password, salt, (err, hash) => {
                if (err) {
                    throw err;
                }
                else {
                    user.password = hash;
                    next();
                }
            });
        });
    }
    else {
        next();
    }
});
exports.User = mongoose_1.model('User', UserSchema);

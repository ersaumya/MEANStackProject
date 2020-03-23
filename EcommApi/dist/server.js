"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = require("./routes/user-routes");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db_1 = require("./db/db");
dotenv.config();
var app = express();
//app.get("/", (req, res) => res.send("This is get express Api"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", user_routes_1.userRoute);
app.listen(3000, () => {
    db_1.MongoConnect.connect().then((res) => console.log("DB Connected"));
    console.log("Server running on port 3000");
});

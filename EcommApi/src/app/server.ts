import { categoryRoute, userRoute, productRoute } from "./routes/index";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { MongoConnect } from "./db/db";
import * as helmet from "helmet";
import * as compression from "compression";

dotenv.config();
var app = express();
app.use(helmet());
app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);

app.listen(3000, () => {
  MongoConnect.connect().then(res => console.log("DB Connected"));
  console.log("Server running on port 3000");
});

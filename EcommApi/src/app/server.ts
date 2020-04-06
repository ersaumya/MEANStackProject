import {
  categoryRoute,
  userRoute,
  productRoute,
  errorLogRoute,
} from "./routes/index";
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

//enable cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,x-access-token"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/errorLog", errorLogRoute);

app.listen(process.env.PORT || 3000, () => {
  MongoConnect.connect().then(res => console.log("DB Connected"));
  console.log("Server running on port 3000");
});

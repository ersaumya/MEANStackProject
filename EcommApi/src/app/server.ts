import { categoryRoute } from './routes/category-routes';
import { userRoute } from './routes/user-routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { MongoConnect } from './db/db';
dotenv.config();
var app = express();
//app.get("/", (req, res) => res.send("This is get express Api"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/user",userRoute);
app.use("/category", categoryRoute);

app.listen(3000, () => {
    MongoConnect.connect().then((res)=>console.log("DB Connected"));
    console.log("Server running on port 3000")
});

import { ErrorLogController } from "./../controllers/errorlog-controller";
import * as express from "express";

export const errorLogRoute = express.Router();

errorLogRoute.get("/", ErrorLogController.getErrorLog);
errorLogRoute.post("/", ErrorLogController.saveError);

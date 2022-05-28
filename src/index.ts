import express, { NextFunction, Response } from "express"
import { AppError } from "./errors/errors";
import routes from "./routes"

const app = express();
app.use(express.json()) 
app.use(routes)


const PORT = 3333;
app.listen(PORT)
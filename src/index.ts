import express, { NextFunction, Response } from "express"
import { appRoutes } from "./routes";


const app = express();
app.use(express.json()) 

appRoutes(app)

const PORT = 3333;
app.listen(PORT)
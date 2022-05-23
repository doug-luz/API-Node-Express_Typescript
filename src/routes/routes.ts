import { Router } from "express"; 

const routes = Router()


import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.Controller";


routes.post("/users", userCreateController)
routes.get("/users", userListController)

export default routes
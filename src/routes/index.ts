import { Router } from "express"; 

const routes = Router()


import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListByEmailController from "../controllers/users/userListByEmail.controller"
import userLoginController from "../controllers/users/userLogin.controller"


routes.post("/users", userCreateController)
routes.post("/users/login", userLoginController)


routes.get("/users", userListController)
routes.get("/users/:email", userListByEmailController)

export default routes
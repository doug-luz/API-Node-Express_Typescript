import { Router } from "express"; 

const routes = Router()

import { authUser } from "../middlewares/authUser.middleware";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListByEmailController from "../controllers/users/userListByEmail.controller"
import userLoginController from "../controllers/users/userLogin.controller"
import UserDeleteController from "../controllers/users/userDelete.controller";
import userUpdatePWDController from "../controllers/users/userUpdadePWD.controller";


routes.post("/users", userCreateController)
routes.post("/users/login", userLoginController)


routes.get("/users", authUser, userListController)
routes.get("/users/:email", authUser, userListByEmailController)

routes.delete("/users/:email", authUser, UserDeleteController)

routes.patch("/users/:email", authUser, userUpdatePWDController)

export default routes
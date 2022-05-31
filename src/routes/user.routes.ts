import { Router } from "express"; 


import { authUser } from "../middlewares/authUser.middleware";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListByEmailController from "../controllers/users/userListByEmail.controller"
import userLoginController from "../controllers/users/userLogin.controller"
import UserDeleteController from "../controllers/users/userDelete.controller";
import userUpdatePWDController from "../controllers/users/userUpdadePWD.controller";


const routes = Router()

export const userRoutes = () => {
    
    routes.post("/", userCreateController)
    routes.post("/login", userLoginController)
    
    
    routes.get("/", authUser, userListController)
    routes.get("/:email", authUser, userListByEmailController)
    
    routes.delete("/:email", authUser, UserDeleteController)
    
    routes.patch("/:email", authUser, userUpdatePWDController)

    return routes
}

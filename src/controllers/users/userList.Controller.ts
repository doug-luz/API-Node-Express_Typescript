import {Request, Response} from "express"
import userListServices from "../../services/user/userList.service"

const userListController = async(req:Request, res:Response) => {
    try {

        const users = await userListServices()

        return res.status(200).json(users)
    }catch (err) {
        if(err instanceof Error){
            return res.status(400).json({"Error":err.name, "Msg":err.message})
        }
    }
}

export default userListController
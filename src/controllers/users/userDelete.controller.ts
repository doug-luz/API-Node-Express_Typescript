import {Request, Response} from "express"
import userDeleteService from "../../services/user/userDelete.service"

const UserDeleteController = async (req:Request, res:Response) => {
    try{
        const email = req.userEmail

        const user = await userDeleteService(email)

        return res.status(200).json({msg:"User Deleted!"})

    } catch(err){
        if(err instanceof Error){
        return res.status(401).json({
            error: err.name,
            msg: err.message
        })
    }
    }
}

export default UserDeleteController
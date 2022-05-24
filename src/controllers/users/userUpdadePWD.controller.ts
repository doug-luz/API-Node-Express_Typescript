import {Request, Response} from "express"
import userUpdatePWDService from "../../services/user/userUpdatePWD.service"


const userUpdatePWDController = async (req:Request, res:Response) =>{
    try{
        const email = req.userEmail
        const {password} = req.body

        if(!password){
            throw new Error("Password is required!")
        }

        const user = await userUpdatePWDService(email, password)

        return res.status(201).json({msg:"Password updated!"})

     }catch(err){
         if(err instanceof Error){
             return res.status(401).json({
                error:err.name,
                msg:err.message
            })
         }
     }
}

export default userUpdatePWDController
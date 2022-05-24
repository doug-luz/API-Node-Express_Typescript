import { Request, Response } from "express";
import userListByEmailService from "../../services/user/userListByEmail.service";


const userListByEmailController = async (req:Request, res:Response) => {

    try{
        const user = await userListByEmailService({authorization:req.headers.authorization})

        return res.status(201).json(user)

    }catch(err){
        if(err instanceof Error){
            return res.status(401).json({
                error:err.name,
                msg:err.message
            })
        }

    }
}

export default userListByEmailController


//Está com este problema no await, verificar. 
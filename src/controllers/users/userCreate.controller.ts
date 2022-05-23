import {Request, Response} from "express"
import userCreateService from "../../services/user/userCreate.service"

const userCreateController = async(req:Request, res:Response) => {
    try {
        const {name, email} = req.body

        const newUser = await userCreateService({name, email})

        return res.status(201).json(newUser)

    }catch (err) {
        if(err instanceof Error){
            return res.status(400).json({"Error":err.name, "Msg":err.message})
        }
    }
}

export default userCreateController
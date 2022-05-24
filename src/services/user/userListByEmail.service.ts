import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data";
import { IUserListByEmail } from "../../interfaces/user";
import jwt  from "jsonwebtoken";

const userListByEmailService = async ({authorization}:IUserListByEmail) =>{
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    if(!authorization){
        throw new Error("Missing Authorization")
    }

    const token = authorization.split(" ")[1]

    const account = jwt.verify(token, String(process.env.JWT_SECRET), (err, decoded)=> {
        if(!decoded){
            throw new Error("Invalid Token")
        }

        const user = users.find(u => u.email === (<any>decoded).email)

        return user
    })

    return account

}

export default userListByEmailService
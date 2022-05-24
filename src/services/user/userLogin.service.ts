import { IUserLogin } from "../../interfaces/user";
import { AppDataSource } from "../../data";
import { User } from "../../entities/user.entities";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

const userLoginService = async({email, password}:IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find(u => u.email === email)

    if(!account){
        throw new Error("Wrong credentials")
    }

    if(!bcrypt.compareSync(password, account.password)){
        throw new Error("Wrong credentials")

    }

    const token = jwt.sign(
        {email:email},
        String(process.env.JWT_SECRET),
        {expiresIn: '1h'}
    )

    return token
}

export default userLoginService
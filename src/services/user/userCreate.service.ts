import { User } from "../../entities/user.entities";
import { IUserCreate } from "../../interfaces/user";

import { AppDataSource } from "../../data";
import bcrypt from "bcrypt"

const userCreateService = async({name, email, password}:IUserCreate) => {
    const userRepository =  AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const emailAlreadyExists = users.find(u=>u.email===email)

    if(emailAlreadyExists){
        throw new Error("Email already exists")
    }

    const user = new User() 
        
        user.name = name,
        user.email = email,
        user.password = bcrypt.hashSync(password, 10)

  
    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export default userCreateService
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data";

const userListByEmailService = async (email:string) =>{

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find(u => u.email === email)

    return account

}

export default userListByEmailService
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data";

const userListServices = async() => {
    const userRepository = AppDataSource.getRepository(User)
    const users = userRepository.find()

    return users
}

export default userListServices
import { AppDataSource } from "../../data";
import { User } from "../../entities/user.entities";

const userDeleteService = async (email:string) => {
    const userRepoitory = AppDataSource.getRepository(User)

    const users = await userRepoitory.find()

    const account = users.find(u => u.email === email)

    await userRepoitory.delete(account!.id)
    
    return true
}

export default userDeleteService
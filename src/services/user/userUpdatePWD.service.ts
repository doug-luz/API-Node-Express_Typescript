import { AppDataSource } from "../../data";
import { User } from "../../entities/user.entities";
import bcrypt from "bcrypt"


const userUpdatePWDService = async (email:string, password:string) => {
    const userRepoitory = AppDataSource.getRepository(User)
    const users = await userRepoitory.find()

    const account = users.find(u => u.email === email)

    if(bcrypt.compareSync(password, account!.password)){
        throw new Error("Insert a new password!")
    }
     const newPWD = bcrypt.hashSync(password, 10)
     
     await userRepoitory.update(account!.id, {password:newPWD})

     return true
}

export default userUpdatePWDService
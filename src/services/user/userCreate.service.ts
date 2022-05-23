import { users } from "../../database";
import { IUser, IUserCreate } from "../../interfaces/user";

import {v4} from "uuid"

const userCreateService = ({name, email}:IUserCreate) => {

    const emailAlreadyExists = users.find(u=>u.email===email)

    if(emailAlreadyExists){
        throw new Error("Email already exists")
    }

    const newUser: IUser =  {
        id: v4(),
        name,
        email

    }

    users.push(newUser)

    return newUser
}

export default userCreateService
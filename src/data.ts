import {DataSource} from "typeorm"
import { User } from "./entities/user.entities";

require("dotenv").config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,

    username: process.env.DB_Name,
    password: process.env.DB_PWD,
    database: process.env.DATABASE,

    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"]
})

AppDataSource.initialize().then(()=> {console.log("Data Source Initialized")}).catch((err)=>{console.log("Deu ruim!", err)})
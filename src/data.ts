import {DataSource} from "typeorm"
 
require("dotenv").config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,

    username: process.env.DB_Name,
    password: process.env.DB_PWD,
    database: process.env.DATABASE,

    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"]
})

AppDataSource.initialize().then(()=> {console.log("Data Source Initialized")}).catch((err)=>{console.log("Deu ruim!", err)})
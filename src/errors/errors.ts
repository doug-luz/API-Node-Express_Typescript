import { Response } from "express";
import { Index } from "typeorm";

export class AppError extends Error {
    statusCode;

    constructor ( statusCode: number, message: string){
        super()
        this.statusCode = statusCode;
        this.message = message;
    }
}

export const handleError = (err:AppError, res:Response) => {
    const { statusCode, message} = err

    return res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    })
}


//CONTEÚDO COM QUE IRIA NO Index.JS

// app.use((err:Error, req:Request, res:Response, _:NextFunction) => {
//     if(err instanceof AppError){
//         return res.status(err.statusCode).json({
//             status:"error",
//             msg:err.message
//         })
//     }
//     console.error(err)
//     return res.status(500).json({
//         status:"error",
//         msg:"Internal Server Error"
//     })
// })

//ERRO AO TENTAR USAR ESSA CONFIGURAÇÃO **************


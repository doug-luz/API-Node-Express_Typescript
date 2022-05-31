import e, { Request, Response } from "express";
import { IProduct } from "../../interfaces/products";
import productCreateService from "../../services/products/productCreate.service";


const productCreateController = async (req:Request, res:Response) => {
    try{
        const data = req.body
        const product:IProduct = await productCreateService(data)

        return res.status(201).json({product})
    } catch(err){
        if(err instanceof Error){
            return res.status(400).json({
                error:err.name,
                msg:err.message
            })
        }
    }
}

export default productCreateController
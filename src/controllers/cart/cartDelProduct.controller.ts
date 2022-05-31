import { Request, Response } from "express";

import cartDelProductService from "../../services/cart/cartDelProduct.service";


const cartDelProductController = async (req:Request, res:Response) => {
    try{
        const {product_id} =req.params
        const {userEmail} = req

        const cartDel = cartDelProductService(userEmail, product_id)

        return res.sendStatus(204)
    }catch (err){
        if(err instanceof Error){
            return res.status(400).json({
                error:err.name,
                msg:err.message
            })
        }
    }
}

export default cartDelProductController
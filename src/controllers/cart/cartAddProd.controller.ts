import {Request, Response } from "express"
import cartAddProdService from "../../services/cart/cartAddProduct.service"

const cartAddProdController = async (req:Request, res:Response) => {
    try{
        const {userEmail} = req
        const {product_id} =req.body

        const cartAdd = await cartAddProdService(product_id, userEmail)

        return res.status(201).json(cartAdd)
    }catch(err){
        if(err instanceof Error){

            return res.status(400).json({
                error:err.name,
                msg:err.message
            })
        }
    }
}
export default cartAddProdController
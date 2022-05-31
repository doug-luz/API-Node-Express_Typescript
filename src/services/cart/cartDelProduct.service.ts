import { AppDataSource } from "../../data";
import { fixedFloat } from "../../utils";
import { Cart } from "../../entities/carts.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entities";

const cartDelProductService = async (userEmail:string, product_id:string) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({where:{email:userEmail}})

    const cartRepository = AppDataSource.getRepository(Cart)

    const cart = await cartRepository.findOne({where:{id:user?.cart.id}})

    if(cart){
        if(cart.products.filter(p => p.id === product_id).length ===0){
            throw new Error("Product not in the cart")
        }
        cart.products = cart.products.filter(p => p.id !== product_id)
        cart.subtotal = fixedFloat(
            cart.products.reduce((acc, product) => acc + product.price, 0)
        )

        await cartRepository.save(cart)

        return cart
    }
}

export default cartDelProductService
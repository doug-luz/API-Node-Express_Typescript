import { AppDataSource } from "../../data";
import { fixedFloat } from "../../utils";
import { Cart } from "../../entities/carts.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entities";


const cartAddProdService = async (product_id:string, userEmail:string) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {email:userEmail}
    })

    
    
    const cartRepository = AppDataSource.getRepository(Cart)

    const cart = await cartRepository.findOne({
        where: {id:user?.cart.id}
    })

    
    
    const productRepository = AppDataSource.getRepository(Product)

    const productToAdd = await productRepository.findOne({
        where:{id:product_id}
    })

    if(!productToAdd) {
        throw new Error ("Product not found!")
    }

    if(cart && productToAdd){
        if(cart.products.filter(p => p.name === productToAdd.name).length >0){
            throw new Error ("Product already in the cart")
        }
        cart.products = [...cart.products, productToAdd ]
        cart.subtotal = fixedFloat(cart.subtotal + productToAdd.price)

        await cartRepository.save(cart)

        return cart
    }
}

export default cartAddProdService
import { AppDataSource } from "../../data";
import { Product } from "../../entities/product.entity";
import { IProductCreate } from "../../interfaces/products";

const productCreateService = async ({name, description, price}:IProductCreate) =>{
    const productRepository = AppDataSource.getRepository(Product)

    const productAlreadyExists = await productRepository.findOne({where:{name}})

    if(productAlreadyExists){
        throw new Error ("Product Already Exists!")
    }

    const product = new Product()
        product.name = name
        product.description = description
        product.price= price 

        productRepository.create(product)
        await productRepository.save(product)

        return product
    }

export default productCreateService
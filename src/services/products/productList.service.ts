
import { AppDataSource } from "../../data";
import { Product } from "../../entities/product.entity";

const productListService = async () => {
    const productRepository = AppDataSource.getRepository(Product)
    const productList = await productRepository.find()

    return productList

}

export default productListService
import { Router} from "express";

import productCreateController from "../controllers/products/productsCreate.controller";
import productListController from "../controllers/products/product List.controller";

const routes = Router()

export const productRoutes = () => {
    routes.post("/", productCreateController)
    routes.get("/", productListController)

    return routes
}
import { Express } from "express";

import { userRoutes } from "./user.routes";
import { cartRoutes } from "./cart.routes";
import { productRoutes } from "./products.routes";

export const appRoutes = (app:Express) => {
    app.use("/users", userRoutes())
    app.use("/cart", cartRoutes())
    app.use("/products", productRoutes())

}
import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import {v4} from "uuid"
import { Product } from "./product.entity";

@Entity("cart")
export class Cart {
    @PrimaryColumn("uuid")
    readonly id:string

    @Column("float")
    subtotal:number

    @ManyToMany((type) => Product, {eager:true})
    @JoinTable()
    products: Product[]

    constructor() {
        if(!this.id){
            this.id = v4()
              
        }
    }
}

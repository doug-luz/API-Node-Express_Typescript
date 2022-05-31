import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import {v4} from "uuid"
import { Cart } from "./carts.entity";

@Entity("users")
export class User {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password:string

    @OneToOne((type) => Cart, {eager:true})
    @JoinColumn()
    cart:Cart;
    
    constructor(){
        if(!this.id){
            this.id = v4()
        }
    }
}
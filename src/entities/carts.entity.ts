import { Entity, Column, PrimaryColumn } from "typeorm";
import {v4} from "uuid"

@Entity()
export class Cart {
    @PrimaryColumn("uuid")
    readonly id:string

    @Column("float")
    subtotal:number

    constructor() {
        if(!this.id){
            this.id = v4()
              
        }
    }
}

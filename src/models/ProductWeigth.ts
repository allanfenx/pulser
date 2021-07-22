import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Product from "./Product";

@Entity("product-weigth")
export default class ProductWeigth {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    type_measure: "centimeter" | "meters";

    @Column()
    type_weigth: "kilograms" | "grams";

    @Column()
    measure: number;

    @Column()
    weigth: number;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

}
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Product from "./Product";


export default class ProductWeigth {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    productId: number;

    @Column()
    mesuare: "centimeters" | "meters";

    @Column()
    weigth: "kilograms" | "grams";

    @Column()
    measures: number;

    @Column()
    weigths: number;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @ManyToOne(() => Product, product => product.weigth, {
        cascade: ["insert", "remove", "update"]
    })
    @JoinColumn()
    product: Product;
}
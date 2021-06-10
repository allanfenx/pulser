import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "./Product";

@Entity("product_stock")
export default class ProductStock {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    productId: number;

    @Column()
    amount: number;

    @Column()
    color: string;

    @ManyToOne(() => Product, product => product.stocks, {
        cascade: ["insert", "remove", "update"]
    })
    @JoinColumn()
    product: Product;
}
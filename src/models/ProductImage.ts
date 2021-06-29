import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "./Product";

@Entity("product_image")
export default class ProductImage {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name_image: string;

    @Column()
    key_name: string;

    @Column()
    color: string;

    @Column()
    productId: number

    @ManyToOne(() => Product, product => product.images)
    @JoinColumn()
    product: Product;
}
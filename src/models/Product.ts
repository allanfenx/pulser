import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./Category";

@Entity("products")
class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    categoryId: string;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn()
    category: Category;
}

export default Product;
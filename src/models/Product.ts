import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Category from "./Category";
import ProductStock from "./ProductStock";

@Entity("products")
class Product {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    measure: number;

    @Column()
    weight: number;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @Column()
    categoryId: number;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn()
    category: Category;

    @OneToMany(() => ProductStock, stocks => stocks.product)
    @JoinColumn()
    stocks: ProductStock[];
}

export default Product;
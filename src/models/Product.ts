import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./Category";
import ProductImage from "./ProductImage";
import ProductStock from "./ProductStock";
import ProductWeigth from "./ProductWeigth";

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

    @OneToMany(() => ProductImage, image => image.product, {
        cascade: ["insert", "update", "remove"]
    })
    @JoinColumn()
    images: ProductImage[];


    @OneToOne(type => ProductWeigth, {
        cascade: ["insert", "remove", "update"]
    })
    @JoinColumn()
    productWeigth: ProductWeigth;
}

export default Product;
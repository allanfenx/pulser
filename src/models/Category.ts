import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "./Product";

@Entity("categories")
class Category {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    slug: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: string;

    @OneToMany(() => Product, products => products.category, {
        cascade: ['insert', 'update']
    })
    @JoinColumn()
    products: Product[];
}

export default Category;
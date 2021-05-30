import { Column, PrimaryGeneratedColumn } from "typeorm";


class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: string;
}

export default Category;
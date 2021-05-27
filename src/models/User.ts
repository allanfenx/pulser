import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;
}
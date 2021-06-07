import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Andress from "./Andress";

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cpf: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: "client" | "manager" | "admin"

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @OneToMany(() => Andress, andress => andress.user, {
        cascade: ['insert', 'update']
    })
    andress: Andress[];

}
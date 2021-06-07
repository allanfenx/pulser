import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity("andress")
export default class Andress {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    userId: string;

    @Column()
    cep: string

    @Column()
    street: string;

    @Column()
    district: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    number: number;

    @Column()
    created_at: Date;

    @Column()
    update_at: Date;

    @ManyToOne(() => User, user => user.andress)
    @JoinColumn()
    user: User;

}
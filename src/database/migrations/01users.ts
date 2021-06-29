import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1622089270135 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        //await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "50"
                },
                {
                    name: "cpf",
                    type: "varchar",
                    isUnique: true,
                    length: "14"
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "80",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "role",
                    type: "enum",
                    enum: ["client", "manager", "admin"],
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'update_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
        //await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}

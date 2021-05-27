import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class users1622089270135 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "50"
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "80"
                },
                {
                    name: "password",
                    type: "varchar"
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
    }

}

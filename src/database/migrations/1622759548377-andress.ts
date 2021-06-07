import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class andress1622759548377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "andress",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "userId",
                    type: "uuid"
                },
                {
                    name: "cep",
                    type: "varchar",
                    length: "9"
                },
                {
                    name: "street",
                    type: "varchar",
                    length: "50"
                },
                {
                    name: "district",
                    type: "varchar",
                    length: "50",
                },
                {
                    name: "city",
                    type: "varchar",
                    length: "50"
                },
                {
                    name: "state",
                    type: "character",
                    length: "2"
                },
                {
                    name: "number",
                    type: "smallint"
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
            ],
            foreignKeys: [
                {
                    name: "User",
                    columnNames: ["userId"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("andress");
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class productWeigth1624891594657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "product-weigth",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "type_measure",
                    type: "enum",
                    enum: ["centimeter", "meters"]
                },
                {
                    name: "type_weigth",
                    type: "enum",
                    enum: ["kilograms", "grams"]
                },
                {
                    name: "measure",
                    type: "decimal"
                },
                {
                    name: "weigth",
                    type: "decimal"
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

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("product-weigth")
    }

}

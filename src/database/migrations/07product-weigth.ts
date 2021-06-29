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
                    name: "productId",
                    type: "integer"
                },
                {
                    name: "measure",
                    type: "enum",
                    enum: ["centimeter", "meters"]
                },
                {
                    name: "weigth",
                    type: "enum",
                    enum: ["kilograms", "grams"]
                },
                {
                    name: "measures",
                    type: "decimal"
                },
                {
                    name: "weigths",
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
            foreignKeys: [
                {
                    name: "ProductWeigth",
                    columnNames: ["productId"],
                    referencedTableName: "products",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("product-weigth")
    }

}

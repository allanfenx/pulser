import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class productStock1623079977562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "product_stock",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                    isUnique: true
                },
                {
                    name: "productId",
                    type: "integer",
                },
                {
                    name: "amount",
                    type: "integer",
                },
                {
                    name: "color",
                    type: "varchar",
                    length: "80"
                }
            ],
            foreignKeys: [
                {
                    name: "Product",
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
        await queryRunner.dropTable("product_stock");
    }

}

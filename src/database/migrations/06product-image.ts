import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class productImage1623350437478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "product_image",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isUnique: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name_image",
                    type: "varchar",
                },
                {
                    name: "key_name",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "color",
                    type: "varchar",
                    length: "80"
                },
                {
                    name: "productId",
                    type: "integer"
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
                    name: "ProductImage",
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
        await queryRunner.dropTable("product_image");
    }

}

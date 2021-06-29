import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class product1622667837539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "categoryId",
                    type: "integer"
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true,
                    length: "50"
                },
                {
                    name: "slug",
                    type: "varchar",
                    length: "51",
                },
                {
                    name: "description",
                    type: "text"
                },
                {
                    name: "price",
                    type: "decimal",
                    precision: 9,
                    scale: 2
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
                    name: "Product",
                    columnNames: ["categoryId"],
                    referencedTableName: "categories",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}

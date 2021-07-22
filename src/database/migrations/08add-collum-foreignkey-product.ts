import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class addCollumForeignkeyProduct1626904694663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("products", new TableColumn({
            name: "productWeigthId",
            type: "integer"
        }))

        await queryRunner.createForeignKey("products", new TableForeignKey({

            name: "ProductWeigth",
            columnNames: ["productWeigthId"],
            referencedTableName: "product-weigth",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("products", "ProductWeigth");

        await queryRunner.dropColumn("products", "productWeigthId");
    }

}

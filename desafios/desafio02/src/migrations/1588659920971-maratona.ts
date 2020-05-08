import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class maratona1588659920971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.createTable(new Table({
            name: "maratona",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "aula",
                    type: "varchar",
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropTable("maratona");
    }

}

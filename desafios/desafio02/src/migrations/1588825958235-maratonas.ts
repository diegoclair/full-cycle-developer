import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Maratonas1588825958235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'maratonas',
            columns: [
                {
                    name: 'id', //uuid
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'aula',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('maratonas')
    }

}

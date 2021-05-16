import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClass1620407852495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'classes',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },

                {
                    name: 'name',
                    type: 'varchar'
                },

                {
                    name: 'duration',
                    type: 'integer'
                },

                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },

                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes');
    }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMUnit1736963162984 implements MigrationInterface {
  name = 'CreateMUnit1736963162984';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_unit');
    await queryRunner.query(`CREATE TABLE m_unit (
    id SERIAL PRIMARY KEY,
    unit_code VARCHAR(15) DEFAULT NULL,
    unit_name VARCHAR(100) DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT DEFAULT NULL,
    updated_time TIMESTAMP DEFAULT NULL
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_unit');
    await queryRunner.query(`DROP Table m_unit`);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMTaxType1736963181698 implements MigrationInterface {
  name = 'CreateMTaxType1736963181698';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_tax_type');
    await queryRunner.query(`CREATE TABLE m_tax_type (
    id SERIAL PRIMARY KEY,
    tax_type_code VARCHAR(15) DEFAULT NULL,
    tax_type_name VARCHAR(100) DEFAULT NULL,
    tax_type_rate NUMERIC(10, 0) DEFAULT 0,
    created_by INT DEFAULT NULL,
    created_time TIMESTAMP DEFAULT NULL,
    updated_by INT DEFAULT NULL,
    updated_time TIMESTAMP DEFAULT NULL
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_tax_type');
    await queryRunner.query(`DROP TABLE m_tax_type`);
  }
}

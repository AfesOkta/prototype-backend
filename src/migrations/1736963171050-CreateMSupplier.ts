import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMSupplier1736963171050 implements MigrationInterface {
  name = 'CreateMSupplier1736963171050';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_supplier');
    await queryRunner.query(`
            CREATE TABLE m_supplier (
    id SERIAL PRIMARY KEY,
    supp_code VARCHAR(15) DEFAULT NULL,
    supp_name VARCHAR(250) DEFAULT NULL,
    supp_address VARCHAR(250) DEFAULT NULL,
    supp_phone VARCHAR(15) DEFAULT NULL,
    supp_email VARCHAR(100) DEFAULT NULL,
    supp_status INT DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT DEFAULT NULL,
    updated_time TIMESTAMP DEFAULT NULL
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_supplier');
    await queryRunner.query(`DROP TABLE m_supplier`);
  }
}

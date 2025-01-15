import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMTaxGroupHdr1736963190072 implements MigrationInterface {
  name = 'CreateMTaxGroupHdr1736963190072';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_tax_group_hdr');
    await queryRunner.query(`CREATE TABLE m_tax_group_hdr (
    id SERIAL PRIMARY KEY,
    tax_type_id INT DEFAULT NULL,
    tax_type_group_code VARCHAR(15) DEFAULT NULL,
    tax_type_group_name VARCHAR(100) DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_time TIMESTAMP DEFAULT NULL,
    updated_by INT DEFAULT NULL,
    updated_time TIMESTAMP DEFAULT NULL
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_tax_group_hdr');
    await queryRunner.query(`DROP Table m_tax_group_hdr`);
  }
}

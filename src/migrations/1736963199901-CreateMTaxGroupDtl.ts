import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMTaxGroupDtl1736963199901 implements MigrationInterface {
  name = 'CreateMTaxGroupDtl1736963199901';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_tax_group_dtl');
    await queryRunner.query(`CREATE TABLE m_tax_group_dtl (
    id SERIAL PRIMARY KEY,
    tax_group_hdr_id INT DEFAULT NULL,
    tax_type_id INT DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_time TIMESTAMP DEFAULT NULL,
    updated_by INT DEFAULT NULL,
    updated_time TIMESTAMP DEFAULT NULL,
    CONSTRAINT m_tax_group_dtl_fk FOREIGN KEY (tax_type_id) REFERENCES m_tax_type (id)
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_tax_group_dtl');
    await queryRunner.query(`DROP Table m_tax_group_dtl`);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMCashAccount1736963040031 implements MigrationInterface {
  name = 'CreateMCashAccount1736963040031';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_cash_account');
    await queryRunner.query(`CREATE TABLE m_cash_account (
    id SERIAL PRIMARY KEY,
    cash_account_code VARCHAR(15) DEFAULT NULL,
    cash_account_name VARCHAR(100) DEFAULT NULL,
    bank_id INT DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT DEFAULT NULL,
    updated_time TIMESTAMP DEFAULT NULL,
    CONSTRAINT m_cash_account_fk FOREIGN KEY (bank_id) REFERENCES m_bank (id)
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_cash_account');
    await queryRunner.query(`DROP Table m_cash_account`);
  }
}

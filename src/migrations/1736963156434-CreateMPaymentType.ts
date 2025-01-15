import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMPaymentType1736963156434 implements MigrationInterface {
  name = 'CreateMPaymentType1736963156434';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_payment_type');
    await queryRunner.query(`CREATE TABLE m_payment_type (
    id SERIAL PRIMARY KEY,
    payment_type_code VARCHAR(15) DEFAULT NULL,
    payment_type_name VARCHAR(100) DEFAULT NULL,
    cash_account_id INT NOT NULL,
    payment_type_status INT DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT DEFAULT NULL,
    updated_time TIMESTAMP DEFAULT NULL,
    CONSTRAINT m_payment_type_fk FOREIGN KEY (cash_account_id) REFERENCES m_cash_account (id)
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_payment_type');
    await queryRunner.query(`DROP TABLE m_payment_type`);
  }
}

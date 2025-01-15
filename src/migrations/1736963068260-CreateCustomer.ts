import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCustomer1736963068260 implements MigrationInterface {
  name = 'CreateCustomer1736963068260';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_customer');
    await queryRunner.query(`
            CREATE TABLE m_customer (
                id SERIAL PRIMARY KEY,
                cust_code VARCHAR(15) DEFAULT NULL,
                cust_name VARCHAR(100) DEFAULT NULL,
                cust_address VARCHAR(250) DEFAULT NULL,
                cust_phone VARCHAR(15) DEFAULT NULL,
                cust_email VARCHAR(100) DEFAULT NULL,
                cust_status INT DEFAULT NULL,
                created_by INT DEFAULT NULL,
                created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_by INT DEFAULT NULL,
                updated_time TIMESTAMP DEFAULT NULL
            );
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_customer');
    await queryRunner.query(`DROP Table m_customer`);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTCashbankDetail1737014138814 implements MigrationInterface {
  name = 'CreateTCashbankDetail1737014138814';
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: Create table t_cashbank_detail');
    await queryRunner.query(`CREATE TABLE t_cashbank_detail (
                id SERIAL PRIMARY KEY,
                cashbank_hdr_id INT DEFAULT NULL,
                customer_id INT DEFAULT NULL,
                supplier_id INT DEFAULT NULL,
                invoice_hdr_id INT DEFAULT NULL,
                amount DECIMAL(10,0) DEFAULT 0,
                created_by INT DEFAULT NULL,
                created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_by INT DEFAULT NULL,
                updated_time TIMESTAMP DEFAULT NULL,
                detailnote VARCHAR(250) DEFAULT NULL,
                CONSTRAINT t_cashbank_detail_customer_FK FOREIGN KEY (customer_id) REFERENCES m_customer (id),
                CONSTRAINT t_cashbank_detail_supplier_FK FOREIGN KEY (supplier_id) REFERENCES m_supplier (id)
            );

            -- Creating indexes manually, as PostgreSQL doesn't automatically create them with the same syntax as MySQL
            CREATE INDEX t_cashbank_detail_supplier_FK ON t_cashbank_detail (supplier_id);
            CREATE INDEX t_cashbank_detail_customer_FK ON t_cashbank_detail (customer_id);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: Drop table t_cashbank_detail');
    await queryRunner.query(`Drop Table t_cashbank_detail`);
  }
}

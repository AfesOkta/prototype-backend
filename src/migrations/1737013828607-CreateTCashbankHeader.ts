import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTCashbankHeader1737013828607 implements MigrationInterface {
  name = 'CreateTCashbankHeader1737013828607';
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table t_cashbank_header');
    await queryRunner.query(`CREATE TABLE t_cashbank_header (
            id SERIAL PRIMARY KEY,  -- Use SERIAL for auto-increment
            trdate TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
            trno VARCHAR(25) DEFAULT NULL,
            trcode INT DEFAULT NULL,
            trtype INT DEFAULT NULL,  -- No COMMENT inline in PostgreSQL, but can add a comment afterward
            headernote VARCHAR(250) DEFAULT NULL,
            amount DECIMAL(10, 0) DEFAULT 0,  -- DECIMAL for monetary values
            created_by INT DEFAULT NULL,
            created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Use TIMESTAMP instead of DATETIME
            updated_by INT DEFAULT NULL,
            updated_time TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
            approved_by INT DEFAULT NULL,
            approved_time TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
            voided_by INT DEFAULT NULL,
            voided_time TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
            cash_account_id INT DEFAULT NULL,
            CONSTRAINT t_cashbank_header_FK FOREIGN KEY (cash_account_id) REFERENCES m_cash_account(id)
        );

        -- Optional: Add comments in PostgreSQL using the COMMENT command
        COMMENT ON COLUMN t_cashbank_header.trtype IS '1 = kas & bank in \r\n2 = kas & bank out';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: Drop table t_cashbank_header');
    await queryRunner.query(`Drop Table t_cashbank_header`);
  }
}

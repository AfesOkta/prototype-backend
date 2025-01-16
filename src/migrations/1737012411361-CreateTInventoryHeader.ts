/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTInventoryHeader1737012411361 implements MigrationInterface {
  name = 'CreateTInventoryHeader1737012411361';
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table t_inventory_header');
    await queryRunner.query(`CREATE TABLE t_inventory_header (
        id SMALLINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,  -- Use SERIAL for auto-increment
        trdate TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
        trno VARCHAR(15) DEFAULT NULL,
        customer_id INT DEFAULT NULL,
        supplier_id INT DEFAULT NULL,
        due_date TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
        tax_id INT DEFAULT NULL,  -- No COMMENT in PostgreSQL, you can add later
        trstatus INT DEFAULT 0,  -- No COMMENT in PostgreSQL, you can add later
        headernote VARCHAR(250) DEFAULT NULL,
        taxable_amt DECIMAL(10, 0) DEFAULT 0,  -- DECIMAL instead of the same in MySQL
        gross_amt DECIMAL(10, 0) DEFAULT NULL,
        tax_amt DECIMAL(10, 0) DEFAULT 0,
        disc_amt_hdr DECIMAL(10, 0) DEFAULT NULL,
        disc_amt_dtl DECIMAL(10, 0) DEFAULT NULL,
        netto_amt VARCHAR(100) DEFAULT NULL,
        created_by INT DEFAULT NULL,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Use TIMESTAMP instead of DATETIME
        updated_by INT DEFAULT NULL,
        updated_time TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
        approved_by INT DEFAULT NULL,
        approved_time TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
        voided_by INT DEFAULT NULL,
        voided_time TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
        trcode INT DEFAULT NULL,
        trtype INT DEFAULT NULL,  -- No COMMENT in PostgreSQL, you can add later
        t_invoice_hdr_id INT DEFAULT NULL,  -- No COMMENT in PostgreSQL, you can add later
        CONSTRAINT t_inventory_header_customer_FK FOREIGN KEY (customer_id) REFERENCES m_customer(id),
        CONSTRAINT t_inventory_header_supplier_FK FOREIGN KEY (supplier_id) REFERENCES m_supplier(id)
    );

    -- Optional: Add comments in PostgreSQL using the COMMENT command
    COMMENT ON COLUMN t_inventory_header.tax_id IS '0 = no tax, 1 = include , 2 = exclude';
    COMMENT ON COLUMN t_inventory_header.trstatus IS '0 = unapprove, 1 = approve, 2 = void';
    COMMENT ON COLUMN t_inventory_header.taxable_amt IS 'nilai dpp (before tax)';
    COMMENT ON COLUMN t_inventory_header.trtype IS '1=adj in ; 2=adj out ; 3=sales return ; 4=purchase return';
    COMMENT ON COLUMN t_inventory_header.t_invoice_hdr_id IS 'Id Invoice (SI atau PI)';        
    `); 
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: Drop table t_inventory_header');
    await queryRunner.query(`Drop Table t_inventory_header`);
  }
}

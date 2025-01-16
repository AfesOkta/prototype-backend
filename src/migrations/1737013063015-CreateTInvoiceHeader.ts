import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTInvoiceHeader1737013063015 implements MigrationInterface {
  name = 'CreateTInvoiceHeader1737013063015';
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table t_invoice_header');
    await queryRunner.query(`CREATE TABLE t_invoice_header (
            id SMALLINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,  -- Use SERIAL for auto-increment
            trdate TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
            trno VARCHAR(15) DEFAULT NULL,
            trcode INT DEFAULT NULL,
            trtype INT DEFAULT NULL,  -- No COMMENT in PostgreSQL, but you can add a note later
            t_inventory_hdr_id INT DEFAULT NULL,  -- No COMMENT in PostgreSQL, but you can add a note later
            customer_id INT DEFAULT NULL,
            supplier_id INT DEFAULT NULL,
            due_date TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
            tax_id INT DEFAULT NULL,  -- No COMMENT in PostgreSQL, but you can add a note later
            trstatus INT DEFAULT 0,  -- No COMMENT in PostgreSQL, but you can add a note later
            headernote VARCHAR(250) DEFAULT NULL,
            taxable_amt DECIMAL(10, 0) DEFAULT 0,  -- DECIMAL for monetary values
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
            POS_ BOOLEAN DEFAULT NULL,  -- Use BOOLEAN instead of TINYINT(1) for PostgreSQL
            CONSTRAINT t_invoice_header_customer_FK FOREIGN KEY (customer_id) REFERENCES m_customer(id),
            CONSTRAINT t_invoice_header_supplier_FK FOREIGN KEY (supplier_id) REFERENCES m_supplier(id)
        );

        -- Optional: Add comments in PostgreSQL using the COMMENT command
        COMMENT ON COLUMN t_invoice_header.trtype IS '1=adj in ; 2=adj out ; 3=sales return ; 4=purchase return';
        COMMENT ON COLUMN t_invoice_header.t_inventory_hdr_id IS 'Id Invoice (SI atau PI)';
        COMMENT ON COLUMN t_invoice_header.tax_id IS '0 = no tax, 1 = include , 2 = exclude';
        COMMENT ON COLUMN t_invoice_header.trstatus IS '0 = unapprove, 1 = approve, 2 = void';
        COMMENT ON COLUMN t_invoice_header.taxable_amt IS 'nilai dpp (before tax)';

    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: Drop table t_invoice_header');
    await queryRunner.query(`Drop Table t_invoice_header`);
  }
}

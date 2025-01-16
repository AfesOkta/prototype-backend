import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTInvoiceDetail1737012831994 implements MigrationInterface {
  name = 'CreateTInvoiceDetail1737012831994';
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table t_invoice_detail');
    await queryRunner.query(`CREATE TABLE t_invoice_detail (
            id SERIAL PRIMARY KEY,  -- Use SERIAL for auto-increment
            invoice_hdr_id INT NOT NULL,
            product_id INT NOT NULL,
            unit_id INT NOT NULL,
            location_id INT NOT NULL,
            qty DECIMAL(10, 0) DEFAULT 0,  -- DECIMAL for monetary values
            unit_price DECIMAL(10, 0) DEFAULT 0,
            disc_type INT DEFAULT 1,  -- No COMMENT in PostgreSQL, but you can add a note later
            disc_pct DECIMAL(10, 0) DEFAULT 0,
            disc_amt DECIMAL(10, 0) DEFAULT 0,
            taxable_amt DECIMAL(10, 0) DEFAULT 0,
            tax_amt DECIMAL(10, 0) DEFAULT 0,
            gross_amt DECIMAL(10, 0) DEFAULT 0,
            netto_amt DECIMAL(10, 0) DEFAULT 0,
            disc_amt_hdr DECIMAL(10, 0) DEFAULT 0,
            detail_note VARCHAR(250) DEFAULT NULL,
            created_by INT DEFAULT NULL,
            created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Use TIMESTAMP instead of DATETIME
            updated_by INT DEFAULT NULL,
            updated_time TIMESTAMP DEFAULT NULL,  -- Use TIMESTAMP instead of DATETIME
            CONSTRAINT t_invoice_detail_location_FK FOREIGN KEY (location_id) REFERENCES m_location(id),
            CONSTRAINT t_invoice_detail_product_FK FOREIGN KEY (product_id) REFERENCES m_product(id),
            CONSTRAINT t_invoice_detail_unit_FK FOREIGN KEY (unit_id) REFERENCES m_unit(id)
        );

        -- Optional: Add comments in PostgreSQL using the COMMENT command
        COMMENT ON COLUMN t_invoice_detail.disc_type IS '1=amt, 2=pct';
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: Drop table t_invoice_detail');
    await queryRunner.query(`Drop Table t_invoice_detail`);
  }
}

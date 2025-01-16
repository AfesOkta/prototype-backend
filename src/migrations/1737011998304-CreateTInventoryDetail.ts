import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTInventoryDetail1737011998304 implements MigrationInterface {
  name = 'CreateTInventoryDetail1737011998304';
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table t_inventory_detail');
    await queryRunner.query(`CREATE TABLE t_inventory_detail (
        id SERIAL PRIMARY KEY,
        inventory_hdr_id INT NOT NULL,
        product_id INT NOT NULL,
        unit_id INT NOT NULL,
        location_id INT NOT NULL,
        qty DECIMAL(10,0) DEFAULT 0,
        unit_price DECIMAL(10,0) DEFAULT 0,
        disc_type INT DEFAULT 1, -- 1=amt, 2=pct
        disc_pct DECIMAL(10,0) DEFAULT 0,
        disc_amt DECIMAL(10,0) DEFAULT 0,
        taxable_amt DECIMAL(10,0) DEFAULT 0,
        tax_amt DECIMAL(10,0) DEFAULT 0,
        gross_amt DECIMAL(10,0) DEFAULT 0,
        netto_amt DECIMAL(10,0) DEFAULT 0,
        disc_amt_hdr DECIMAL(10,0) DEFAULT 0,
        detail_note VARCHAR(250) DEFAULT NULL,
        created_by INT DEFAULT NULL,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_by INT DEFAULT NULL,
        updated_time TIMESTAMP DEFAULT NULL,
        CONSTRAINT t_inventory_detail_location_FK FOREIGN KEY (location_id) REFERENCES m_location(id),
        CONSTRAINT t_inventory_detail_product_FK FOREIGN KEY (product_id) REFERENCES m_product(id),
        CONSTRAINT t_inventory_detail_unit_FK FOREIGN KEY (unit_id) REFERENCES m_unit(id)
    );

      -- Creating indexes manually, as PostgreSQL doesn't automatically create them with the same syntax as MySQL
      CREATE INDEX t_inventory_detail_location_FK ON t_inventory_detail (location_id);
      CREATE INDEX t_inventory_detail_product_FK ON t_inventory_detail (product_id);
      CREATE INDEX t_inventory_detail_unit_FK ON t_inventory_detail (unit_id);     

    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE t_inventory_detail');
    await queryRunner.query(`Drop Table t_inventory_detail`);
  }
}

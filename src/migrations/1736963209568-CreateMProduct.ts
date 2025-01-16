/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMProduct1736963209568 implements MigrationInterface {
  name = 'CreateMProduct1736963209568';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_product');
    await queryRunner.query(`CREATE TABLE m_product (
    id SERIAL PRIMARY KEY,
    product_code VARCHAR(25) DEFAULT NULL,
    product_name VARCHAR(250) DEFAULT NULL,
    product_barcode VARCHAR(100) DEFAULT NULL,
    product_type INT DEFAULT NULL,
    product_unit INT NOT NULL,
    product_purchase_price NUMERIC(10, 0) DEFAULT 0,
    product_sales_price NUMERIC(10, 0) DEFAULT 0,
    product_margin NUMERIC(10, 0) DEFAULT 0,
    product_cogs NUMERIC(10, 0) DEFAULT NULL,
    product_note VARCHAR(250) DEFAULT NULL,
    product_status INT DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by INT DEFAULT NULL,
    updated_time TIMESTAMP DEFAULT NULL,
    CONSTRAINT m_product_fk FOREIGN KEY (product_unit) REFERENCES m_unit (id)
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_product');
    await queryRunner.query(`Drop Table m_product`);
  }
}

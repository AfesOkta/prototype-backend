/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MUnit } from './m_unit.entity';
import { BaseEntity } from '../base/base_entity.entity';
@Entity('m_product')
export class MProduct extends BaseEntity {
  @Column({ name:"product_code", type: 'varchar', length: 15, nullable: true })
  productCode: string;

  @Column({ name:"product_name", type: 'varchar', length: 250, nullable: true })
  productName: string;

  @Column({ name:"product_barcode", type: 'varchar', length: 100, nullable: true })
  productBarcode: string;

  @Column({ name:"product_type", type: 'int', nullable: true })
  productType: number;

  @Column({ name:"product_unit", type: 'int', nullable: true })
  productUnit: number;

  @ManyToOne(() => MUnit)
  @JoinColumn({ name: 'product_unit' })
  unit: MUnit;

  @Column({ name:"product_purchase_price", type: 'decimal', precision: 18, scale: 2, nullable: true })
  productPurchasePrice: number;

  @Column({ name:"product_sales_price", type: 'decimal', precision: 18, scale: 2, nullable: true })
  productSalesPrice: number;

  @Column({ name:"product_margin", type: 'decimal', precision: 18, scale: 2, nullable: true })
  productMargin: number;

  @Column({ name:"product_cogs", type: 'decimal', precision: 18, scale: 2, nullable: true })
  productCogs: number;

  @Column({ name:"product_note", type: 'varchar', length: 250, nullable: true })
  productNote: number;

  @Column({ name:"product_status", type: 'int', nullable: true })
  productStatus: number;
}

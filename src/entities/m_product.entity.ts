import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MUnit } from './m_unit.entity';

@Entity('m_product')
export class MProduct extends BaseEntity {
  @Column({ type: 'varchar', length: 15, nullable: true })
  productCode: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  productName: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  productBarcode: string;

  @Column({ type: 'int', nullable: true })
  productType: number;

  @Column({ type: 'int', nullable: true })
  productUnit: number;

  @ManyToOne(() => MUnit)
  @JoinColumn({ name: 'product_unit' })
  unit: MUnit;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  productPurchasePrice: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  productSalesPrice: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  productMargin: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  productCogs: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  productNote: number;

  @Column({ type: 'int', nullable: true })
  productStatus: number;
}

import { BaseEntity } from 'src/base/base_entity.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TInventoryHdr } from './t_inventory_hdr.entity';
import { MUnit } from './m_unit.entity';
import { MProduct } from './m_product.entity';
import { MLocation } from './m_location.entity';

@Entity('t_inventory_dtl')
export class TInventoryDetail extends BaseEntity {
  @ManyToOne(() => TInventoryHdr)
  @JoinColumn({ name: 'inventory_hdr_id' })
  inventoryHdrId: TInventoryHdr;

  @ManyToOne(() => MProduct)
  @JoinColumn({ name: 'product_id' })
  productId: MProduct;

  @ManyToOne(() => MUnit)
  @JoinColumn({ name: 'unit_id' })
  unitId: MUnit;

  @ManyToOne(() => MLocation)
  @JoinColumn({ name: 'location_id' })
  locationId: MLocation;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  qty: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  unitPrice: number;

  @Column({ type: 'int', default: 1 })
  discType: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  discPct: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  discAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  taxableAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  taxAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  grossAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  nettoAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  discAmtHdr: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  detailNote: string;
}

import { BaseEntity } from 'src/base/base_entity.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TInventoryHdr } from './t_inventory_hdr.entity';
import { MUnit } from './m_unit.entity';
import { MProduct } from './m_product.entity';
import { MLocation } from './m_location.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('t_inventory_dtl')
export class TInventoryDetail extends BaseEntity {
  @ApiProperty({ type: () => TInventoryHdr, description: 'Inventory Header' })
  @ManyToOne(() => TInventoryHdr)
  @JoinColumn({ name: 'inventory_hdr_id' })
  inventoryHdrId: TInventoryHdr;

  @ApiProperty({ type: () => MProduct, description: 'Product' })
  @ManyToOne(() => MProduct)
  @JoinColumn({ name: 'product_id' })
  productId: MProduct;

  @ApiProperty({ type: () => MUnit, description: 'Unit' })
  @ManyToOne(() => MUnit)
  @JoinColumn({ name: 'unit_id' })
  unitId: MUnit;

  @ApiProperty({ type: () => MLocation, description: 'Location' })
  @ManyToOne(() => MLocation)
  @JoinColumn({ name: 'location_id' })
  locationId: MLocation;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '1.0', description: 'Quantity Order' })
  qty: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '1000', description: 'Quantity Price Unit' })
  unitPrice: number;

  @Column({ type: 'int', default: 1 })
  @ApiProperty({
    example: '1',
    description: 'Discount type;0: no discount; 1 : percentage; 2: amount',
  })
  disctype: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '2', description: 'Discount Percentage' })
  discPct: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '2000', description: 'Discount Amount' })
  discAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '500', description: 'Taxable Amount' })
  taxableAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '500', description: 'Tax Amount' })
  taxAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '2500', description: 'Gross Amount' })
  grossAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '2500', description: 'Netto Amount' })
  nettoAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '500', description: 'Discount Header' })
  discAmtHdr: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiProperty({ example: '-', description: 'Detail Note' })
  detailNote: string;
}

import { BaseEntity } from 'src/base/base_entity.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MProduct } from './m_product.entity';
import { TInvoiceHdr } from './t_invoice_hdr.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('t_invoice_detail')
export class TInvoiceDetail extends BaseEntity {
  @ApiProperty({ type: () => TInvoiceHdr, description: 'Invoice Header' })
  @ManyToOne(() => TInvoiceHdr)
  @JoinColumn({ name: 'invoice_hdr_id' })
  invoiceHdrId: TInvoiceHdr;

  @ApiProperty({ type: () => MProduct, description: 'Product' })
  @ManyToOne(() => MProduct)
  @JoinColumn({ name: 'product_id' })
  productId: MProduct;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '1', description: 'Quantity' })
  qty: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '5000', description: 'Unit Price' })
  unitPrice: number;

  @Column({ type: 'int', default: 1 })
  @ApiProperty({
    example: '0',
    description: 'Type Discount; 0: None;1:Disc Pct; 2: Disc Amount',
  })
  discType: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '0', description: 'Disc PCT' })
  discPct: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '0', description: 'Disc Amount' })
  discAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '1', description: 'Taxable amount' })
  taxableAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '0', description: 'Tax Amount' })
  taxAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '5000', description: 'Gross Amount' })
  grossAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '5000', description: 'Netto Amount' })
  nettoAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '0', description: 'Disc Amount Hdr' })
  discAmtHdr: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiProperty({ example: '-', description: 'Detail Note' })
  detailNote: string;
}

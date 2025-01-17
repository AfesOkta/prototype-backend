import { BaseEntity } from 'src/base/base_entity.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MProduct } from './m_product.entity';
import { TInvoiceHdr } from './t_invoice_hdr.entity';

@Entity('t_invoice_detail')
export class TInvoiceDetail extends BaseEntity {
  @ManyToOne(() => TInvoiceHdr)
  @JoinColumn({ name: 'invoice_hdr_id' })
  invoiceHdrId: TInvoiceHdr;

  @ManyToOne(() => MProduct)
  @JoinColumn({ name: 'product_id' })
  productId: MProduct;

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

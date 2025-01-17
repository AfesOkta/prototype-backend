import { BaseEntity } from 'src/base/base_entity.entity';
import { Entity, Column } from 'typeorm';

@Entity('t_invoice_hdr')
export class TInvoiceHdr extends BaseEntity {
  @Column({ type: 'varchar', length: 50, nullable: true })
  invoiceNo: string;

  @Column({ type: 'date', nullable: true })
  invoiceDate: Date;

  @Column({ type: 'int', default: 0 })
  customerId: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  totalAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  totalDisc: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  totalTax: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  totalNetto: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  totalPaid: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  totalChange: number;

  @Column({ type: 'int', default: 0 })
  paymentMethod: number;

  @Column({ type: 'int', default: 0 })
  paymentStatus: number;

  @Column({ type: 'int', default: 0 })
  status: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  note: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base/base_entity.entity';
import { Entity, Column } from 'typeorm';

@Entity('t_invoice_hdr')
export class TInvoiceHdr extends BaseEntity {
  @Column({ type: 'varchar', length: 50, nullable: true })
  @ApiProperty({ example: '202501260001', description: 'Transaks Nomer' })
  invoiceNo: string;

  @Column({ type: 'date', nullable: true })
  @ApiProperty({
    example: '2025-01-26 01:12:50',
    description: 'Tanggal Invoice',
  })
  invoiceDate: Date;

  @Column({ type: 'int', default: 0 })
  @ApiProperty({ example: '1', description: 'Customer Id' })
  customerId: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '5000', description: 'Total Amount' })
  totalAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '0', description: 'Total discount' })
  totalDisc: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '0', description: 'Total Tax' })
  totalTax: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '5000', description: 'Total Netto' })
  totalNetto: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '0', description: 'Total Pembayaran' })
  totalPaid: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '0', description: 'Total kembalian' })
  totalChange: number;

  @Column({ type: 'int', default: 0 })
  @ApiProperty({
    example: '0',
    description: 'Payment method; 0: cash; 1: Kredit',
  })
  paymentMethod: number;

  @Column({ type: 'int', default: 0 })
  @ApiProperty({ example: '0', description: 'Payment status' })
  paymentStatus: number;

  @Column({ type: 'int', default: 0 })
  @ApiProperty({ example: '0', description: 'Status transaksi' })
  status: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiProperty({ example: '-', description: 'Notes' })
  note: string;
}

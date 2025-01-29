import { BaseEntity } from 'src/base/base_entity.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MCustomer } from './m_customer.entity';
import { MSupplier } from './m_supplier.entity';
import { MTaxGroupHdr } from './m_tax_group_hdr.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('t_inventory_hdr')
export class TInventoryHdr extends BaseEntity {
  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  @ApiProperty({ example: '2025-01-26', description: 'Tanggal Inventory' })
  trDate: Date;

  @Column({ type: 'varchar', length: 15, nullable: true })
  @ApiProperty({ example: '202501260001', description: 'Transaction Number' })
  trNo: string;

  @ApiProperty({ type: () => MCustomer, description: 'Customer' })
  @ManyToOne(() => MCustomer)
  @JoinColumn({ name: 'customer_id' })
  customer: MCustomer;

  @ApiProperty({ type: () => MSupplier, description: 'Supplier' })
  @ManyToOne(() => MSupplier)
  @JoinColumn({ name: 'supplier_id' })
  supplier: MSupplier;

  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  @ApiProperty({ example: '2025-01-26', description: 'Due date' })
  dueDate: Date;

  @ApiProperty({ type: () => MTaxGroupHdr, description: 'Tax Group Header' })
  @ManyToOne(() => MTaxGroupHdr)
  @JoinColumn({ name: 'tax_id' })
  taxGroupHdr: MTaxGroupHdr;

  @ApiProperty({ example: '1', description: 'status transaksi' })
  @Column({ type: 'int', default: 0 })
  trStatus: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @ApiProperty({ example: '-', description: 'Header Note' })
  headerNote: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '2000', description: 'Taxable Amount' })
  taxableAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  @ApiProperty({ example: '20000', description: 'Grosss Amount' })
  grossAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  @ApiProperty({ example: '200', description: 'Tax Amount' })
  taxAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  @ApiProperty({ example: '0', description: 'Discount Amount Header' })
  discAmtHdr: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  @ApiProperty({ example: '2000', description: 'Discount Amount Detail' })
  discAmtDtl: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @ApiProperty({ example: '2000', description: 'Netto Amount' })
  nettoAmt: string;

  @Column({ type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'Approved By' })
  approvedBy: number;

  @Column({ type: 'date', nullable: true })
  @ApiProperty({
    example: '2025-01-26 01:12:50',
    description: 'Tanggal Approved',
  })
  approvedTime: Date;

  @Column({ type: 'int', nullable: true })
  @ApiProperty({
    example: '2025-01-26 01:12:50',
    description: 'Tanggal Approved',
  })
  voidedBy: number;

  @Column({ type: 'date', nullable: true })
  @ApiProperty({
    example: '2025-01-26 01:12:50',
    description: 'Tanggal Approved',
  })
  voidedTime: Date;

  @Column({ type: 'int', nullable: true })
  @ApiProperty({
    example: '2025-01-26 01:12:50',
    description: 'Tanggal Approved',
  })
  trCode: number;

  @Column({ type: 'int', nullable: true })
  @ApiProperty({
    example: '1',
    description: 'Type Transaksi; 1: sales;0:receiving',
  })
  trType: number;
}

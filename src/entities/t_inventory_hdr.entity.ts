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

@Entity('t_inventory_hdr')
export class TInventoryHdr extends BaseEntity {
  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  trDate: Date;

  @Column({ type: 'varchar', length: 15, nullable: true })
  trNo: string;

  @ManyToOne(() => MCustomer)
  @JoinColumn({ name: 'customer_id' })
  customer: MCustomer;

  @ManyToOne(() => MSupplier)
  @JoinColumn({ name: 'supplier_id' })
  supplier: MSupplier;

  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  dueDate: Date;

  @ManyToOne(() => MTaxGroupHdr)
  @JoinColumn({ name: 'tax_id' })
  taxGroupHdr: MTaxGroupHdr;

  @Column({ type: 'int', default: 0 })
  trStatus: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  headerNote: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  taxableAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  grossAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0 })
  taxAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  discAmtHdr: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, nullable: true })
  discAmtDtl: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  nettoAmt: string;

  @Column({ type: 'int', nullable: true })
  approvedBy: number;

  @Column({ type: 'date', nullable: true })
  approvedTime: Date;

  @Column({ type: 'int', nullable: true })
  voidedBy: number;

  @Column({ type: 'date', nullable: true })
  voidedTime: Date;

  @Column({ type: 'int', nullable: true })
  trCode: number;

  @Column({ type: 'int', nullable: true })
  trType: number;
}

import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { MBank } from './m_bank.entity';

@Entity('m_cash_account')
export class MCashAccount extends BaseEntity {
  @Column({ type: 'varchar', length: 15, nullable: true })
  cashAccountCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  cashAccountName: string;

  @Column({ type: 'int', nullable: true })
  bankId: number;

  @ManyToOne(() => MBank)
  @JoinColumn({ name: 'bank_id' })
  bank: MBank;
}

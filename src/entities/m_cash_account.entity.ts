/* eslint-disable prettier/prettier */
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MBank } from './m_bank.entity';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_cash_account')
export class MCashAccount extends BaseEntity {
  @Column({ name:"cash_account_code", type: 'varchar', length: 15, nullable: true })
  cashAccountCode: string;

  @Column({ name:"cash_account_name",type: 'varchar', length: 100, nullable: true })
  cashAccountName: string;

  @Column({ name:"bank_id", type: 'int', nullable: true })
  bankId: number;

  @ManyToOne(() => MBank)
  @JoinColumn({ name: 'bank_id' })
  bank: MBank;
}

/* eslint-disable prettier/prettier */
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MBank } from './m_bank.entity';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('m_cash_account')
export class MCashAccount extends BaseEntity {
  @Column({ name:"cash_account_code", type: 'varchar', length: 15, nullable: true })
  @ApiProperty({ example: 'C0001', description: 'Kode Cash Account' })    
  cashAccountCode: string;

  @Column({ name:"cash_account_name",type: 'varchar', length: 100, nullable: true })
  @ApiProperty({ example: 'Asset', description: 'Nama Cash Account' })    
  cashAccountName: string;

  @Column({ name:"bank_id", type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'ID Bank' })    
  bankId: number;

  @ApiProperty({ type: () => MBank, description: 'Bank' })
  @ManyToOne(() => MBank)
  @JoinColumn({ name: 'bank_id' })
  bank: MBank;
}

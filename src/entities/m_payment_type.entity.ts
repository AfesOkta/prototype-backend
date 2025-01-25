/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MCashAccount } from './m_cash_account.entity';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity('m_payment_type')
export class MPaymentType extends BaseEntity {
  @Column({
    name: 'payment_type_code',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  @ApiProperty({ example: 'P0001', description: 'Payment Code' })
  paymentTypeCode: string;

  @Column({
    name: 'payment_type_name',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  @ApiProperty({ example: 'Cash', description: 'Payment Type Name' })
  paymentTypeName: string;

  @Column({ name: 'cash_account_id', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'Cash Account Id' })
  cashAccountId: number;

  @ApiProperty({ type: () => MCashAccount, description: 'Cash Account' })
  @ManyToOne(() => MCashAccount)
  @JoinColumn({ name: 'cash_account_id' })
  cashAccount: MCashAccount;
}

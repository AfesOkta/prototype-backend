/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MCashAccount } from './m_cash_account.entity';
import { BaseEntity } from '../base/base_entity.entity';
@Entity('m_payment_type')
export class MPaymentType extends BaseEntity {
  @Column({ name:"payment_type_code",type: 'varchar', length: 15, nullable: true })
  paymentTypeCode: string;

  @Column({ name:"payment_type_code",type: 'varchar', length: 100, nullable: true })
  paymentTypeName: string;

  @Column({ name:"cash_account_id",type: 'int', nullable: true })
  cashAccountId: number;

  @ManyToOne(() => MCashAccount)
  @JoinColumn({ name: 'cash_account_id' })
  cashAccount: MCashAccount;
}

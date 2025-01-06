import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MCashAccount } from './m_cash_account.entity';

@Entity('m_payment_type')
export class MPaymentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  paymentTypeCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  paymentTypeName: string;

  @Column({ type: 'int', nullable: true })
  cashAccountId: number;

  @ManyToOne(() => MCashAccount)
  @JoinColumn({ name: 'cash_account_id' })
  cashAccount: MCashAccount;

  @Column({ type: 'int', nullable: true })
  createdBy: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdTime: Date;

  @Column({ type: 'int', nullable: true })
  updatedBy: number;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedTime: Date;
}

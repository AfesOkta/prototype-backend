import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MBank } from './m_bank.entity';

@Entity('m_cash_account')
export class MCashAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  cashAccountCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  cashAccountName: string;

  @Column({ type: 'int', nullable: true })
  bankId: number;

  @ManyToOne(() => MBank)
  @JoinColumn({ name: 'bank_id' })
  bank: MBank;

  @Column({ type: 'int', nullable: true })
  createdBy: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdTime: Date;

  @Column({ type: 'int', nullable: true })
  updatedBy: number;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedTime: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('m_customer')
export class MCustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  custCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  custName: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  custAddress: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  custPhone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  custEmail: string;

  @Column({ type: 'int', nullable: true })
  custStatus: number;

  @Column({ type: 'int', nullable: true })
  createdBy: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdTime: Date;

  @Column({ type: 'int', nullable: true })
  updatedBy: number;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedTime: Date;
}

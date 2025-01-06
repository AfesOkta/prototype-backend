import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('m_bank')
export class MBank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 5, nullable: true })
  bankCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  bankName: string;

  @Column({ type: 'int', nullable: true })
  createdBy: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdTime: Date;

  @Column({ type: 'int', nullable: true })
  updatedBy: number;

  @Column({ type: 'timestamp', nullable: true })
  updatedTime: Date;
}

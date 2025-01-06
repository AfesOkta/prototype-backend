import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('m_location')
export class MLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  locationCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  locationName: string;

  @Column({ type: 'int', nullable: true })
  createdBy: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdTime: Date;

  @Column({ type: 'int', nullable: true })
  updatedBy: number;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedTime: Date;
}

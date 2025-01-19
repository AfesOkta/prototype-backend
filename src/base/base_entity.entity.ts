import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy: number;

  @CreateDateColumn({
    name: 'created_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdTime: Date;

  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy: number;

  @UpdateDateColumn({ name: 'updated_time', type: 'timestamp', nullable: true })
  updatedTime: Date;
}

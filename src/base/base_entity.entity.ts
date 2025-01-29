import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 'ID', description: 'ID' })
  id: number;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'ID User created' })
  createdBy: number;

  @CreateDateColumn({
    name: 'created_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @ApiProperty({
    example: '2025-01-25 18:58:00',
    description: 'Tanggal Pembuatan',
  })
  createdTime: Date;

  @Column({ name: 'updated_by', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'ID User Update' })
  updatedBy: number;

  @UpdateDateColumn({ name: 'updated_time', type: 'timestamp', nullable: true })
  @ApiProperty({
    example: '2025-01-25 18:58:00',
    description: 'Tanggal Berubah',
  })
  updatedTime: Date;
}

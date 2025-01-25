/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../base/base_entity.entity';
import { Entity, Column } from 'typeorm';

@Entity('m_bank')
export class MBank extends BaseEntity {
  @Column({ name:"bank_code", type: 'varchar', length: 5, nullable: true })
  @ApiProperty({ example: 'B0001', description: 'Kode Bank' })
  bankCode: string;

  @Column({ name:"bank_name",type: 'varchar', length: 100, nullable: true })
  @ApiProperty({ example: 'Bank BCA', description: 'Nama Bank' })
  bankName: string;
}

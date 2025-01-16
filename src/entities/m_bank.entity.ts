/* eslint-disable prettier/prettier */
import { BaseEntity } from '../base/base_entity.entity';
import { Entity, Column } from 'typeorm';

@Entity('m_bank')
export class MBank extends BaseEntity {
  @Column({ type: 'varchar', length: 5, nullable: true })
  bankCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  bankName: string;
}

/* eslint-disable prettier/prettier */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
@Entity('m_location')
export class MLocation extends BaseEntity {
  @Column({ type: 'varchar', length: 15, nullable: true })
  locationCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  locationName: string;
}

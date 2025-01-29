/* eslint-disable prettier/prettier */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity('m_location')
export class MLocation extends BaseEntity {
  @Column({
    name: 'location_code',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  @ApiProperty({ example: 'L0001', description: 'Location Code' })
  locationCode: string;

  @Column({
    name: 'location_name',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  @ApiProperty({ example: 'Gudang Utama', description: 'Location Name' })
  locationName: string;
}

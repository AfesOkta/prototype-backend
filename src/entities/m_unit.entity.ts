import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('m_unit')
export class MUnit extends BaseEntity {
  @Column({ name: 'unit_code', type: 'varchar', length: 15, nullable: true })
  @ApiProperty({ example: 'PCS', description: 'Kode Unit' })
  unitCode: string;

  @Column({ name: 'unit_name', type: 'varchar', length: 100, nullable: true })
  @ApiProperty({ example: 'Pieces', description: 'Nama Unit' })
  unitName: string;
}

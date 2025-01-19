import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_unit')
export class MUnit extends BaseEntity {
  @Column({ name: 'unit_code', type: 'varchar', length: 15, nullable: true })
  unitCode: string;

  @Column({ name: 'unit_name', type: 'varchar', length: 100, nullable: true })
  unitName: string;
}

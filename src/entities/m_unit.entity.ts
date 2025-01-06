import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_unit')
export class MUnit extends BaseEntity {
  @Column({ type: 'varchar', length: 15, nullable: true })
  unitCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  unitName: string;
}

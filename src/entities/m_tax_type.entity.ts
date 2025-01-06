import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_tax_type')
export class MTaxType extends BaseEntity {
  @Column({ type: 'varchar', length: 15, nullable: true })
  taxTypeCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  taxTypeName: string;

  @Column({ type: 'int', nullable: true })
  taxTypeRate: number;
}

import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_tax_type')
export class MTaxType extends BaseEntity {
  @Column({
    name: 'tax_type_code',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  taxTypeCode: string;

  @Column({
    name: 'tax_type_name',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  taxTypeName: string;

  @Column({ name: 'tax_type_rate', type: 'int', nullable: true })
  taxTypeRate: number;
}

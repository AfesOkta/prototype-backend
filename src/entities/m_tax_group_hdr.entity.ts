import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_tax_group_hdr')
export class MTaxGroupHdr extends BaseEntity {
  @Column({ name: 'tax_type_id', type: 'int', nullable: true })
  taxTypeId: number;

  @Column({
    name: 'tax_type_group_code',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  taxTypeGroupCode: string;

  @Column({
    name: 'tax_type_group_name',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  taxTypeGroupName: string;
}

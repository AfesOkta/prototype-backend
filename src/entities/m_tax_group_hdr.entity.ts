import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_tax_group_hdr')
export class MTaxGroupHdr extends BaseEntity {
  @Column({ type: 'int', nullable: true })
  taxTypeId: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  taxTypeGroupCode: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  taxTypeGroupName: string;
}

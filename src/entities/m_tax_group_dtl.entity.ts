import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
import { MTaxType } from './m_tax_type.entity';
import { MTaxGroupHdr } from './m_tax_group_hdr.entity';

@Entity('m_tax_group_dtl')
export class MTaxGroupDtl extends BaseEntity {
  @Column({ type: 'int', nullable: true })
  taxGroupHdrId: number;

  @Column({ type: 'int', nullable: true })
  taxTypeId: number;

  @ManyToOne(() => MTaxType)
  @JoinColumn({ name: 'tax_type_id' })
  taxType: MTaxType;

  @ManyToOne(() => MTaxGroupHdr)
  @JoinColumn({ name: 'tax_group_hdr_id' })
  taxGroupHdr: MTaxGroupHdr;
}

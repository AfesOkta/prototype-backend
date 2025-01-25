import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
import { MTaxType } from './m_tax_type.entity';
import { MTaxGroupHdr } from './m_tax_group_hdr.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('m_tax_group_dtl')
export class MTaxGroupDtl extends BaseEntity {
  @Column({ name: 'tax_group_hdr_id', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'ID Tax Group Hdr' })
  taxGroupHdrId: number;

  @Column({ name: 'tax_type_id', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'ID Tax Type' })
  taxTypeId: number;

  @ApiProperty({ type: () => MTaxType, description: 'TaxType' })
  @ManyToOne(() => MTaxType)
  @JoinColumn({ name: 'tax_type_id' })
  taxType: MTaxType;

  @ApiProperty({ type: () => MTaxGroupHdr, description: 'TaxGroupHdr' })
  @ManyToOne(() => MTaxGroupHdr)
  @JoinColumn({ name: 'tax_group_hdr_id' })
  taxGroupHdr: MTaxGroupHdr;
}

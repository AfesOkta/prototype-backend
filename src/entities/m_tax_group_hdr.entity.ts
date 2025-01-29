import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('m_tax_group_hdr')
export class MTaxGroupHdr extends BaseEntity {
  @Column({ name: 'tax_type_id', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'ID Tax Type' })
  taxTypeId: number;

  @Column({
    name: 'tax_type_group_code',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  @ApiProperty({ example: 'T0001', description: 'Kode Tax Type Group' })
  taxTypeGroupCode: string;

  @Column({
    name: 'tax_type_group_name',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  @ApiProperty({ example: '1', description: 'Nama Tax Type Group' })
  taxTypeGroupName: string;
}

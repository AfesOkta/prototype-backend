import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('m_tax_type')
export class MTaxType extends BaseEntity {
  @Column({
    name: 'tax_type_code',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  @ApiProperty({ example: 'T0001', description: 'Kode Tax Type' })
  taxTypeCode: string;

  @Column({
    name: 'tax_type_name',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  @ApiProperty({ example: 'Sample', description: 'Nama Tax Type' })
  taxTypeName: string;

  @Column({ name: 'tax_type_rate', type: 'int', nullable: true })
  @ApiProperty({ example: '1.0', description: 'Rate Tax Type' })
  taxTypeRate: number;
}

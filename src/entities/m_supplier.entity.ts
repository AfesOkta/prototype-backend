/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('m_supplier')
export class MSupplier extends BaseEntity {
  @Column({ name: 'supp_code', type: 'varchar', length: 15, nullable: true })
  @ApiProperty({ example: 'S0001', description: 'Kode Supplier' })
  suppCode: string;

  @Column({ name: 'supp_name', type: 'varchar', length: 250, nullable: true })
  @ApiProperty({ example: 'John Doe', description: 'Nama Supplier' })
  suppName: string;

  @Column({
    name: 'supp_address',
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @ApiProperty({ example: 'Street By', description: 'Supplier Address' })
  suppAddress: string;

  @Column({ name: 'supp_phone', type: 'varchar', length: 15, nullable: true })
  @ApiProperty({ example: '00000000', description: 'Nomer Telp Supplier' })
  suppPhone: string;

  @Column({ name: 'supp_email', type: 'varchar', length: 100, nullable: true })
  @ApiProperty({ example: 'supp@email.com', description: 'Email Supplier' })
  suppEmail: string;

  @Column({ name: 'supp_status', type: 'int', nullable: true })
  @ApiProperty({
    example: '1',
    description: 'Status Supplier, 0: Tidak Aktif; 1: Aktif',
  })
  suppStatus: number;
}

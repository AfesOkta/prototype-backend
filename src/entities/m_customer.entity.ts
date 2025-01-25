import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity('m_customer')
export class MCustomer extends BaseEntity {
  @Column({ name: 'cust_code', type: 'varchar', length: 15, nullable: true })
  @ApiProperty({ example: 'C0001', description: 'Code Customer' })
  custCode: string;

  @Column({ name: 'cust_name', type: 'varchar', length: 100, nullable: true })
  @ApiProperty({ example: 'John Doe', description: 'Name Customer' })
  custName: string;

  @Column({
    name: 'cust_address',
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @ApiProperty({ example: '-', description: 'Address Customer' })
  custAddress: string;

  @Column({ name: 'cust_phone', type: 'varchar', length: 15, nullable: true })
  @ApiProperty({ example: '00000000', description: 'Phone Customer' })
  custPhone: string;

  @Column({ name: 'cust_email', type: 'varchar', length: 100, nullable: true })
  @ApiProperty({ example: 'cust@gmail.com', description: 'Email Customer' })
  custEmail: string;

  @Column({ name: 'cust_status', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'Status Customer' })
  custStatus: number;
}

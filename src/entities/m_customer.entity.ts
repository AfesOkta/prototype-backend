import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';
@Entity('m_customer')
export class MCustomer extends BaseEntity {
  @Column({ name: 'cust_code', type: 'varchar', length: 15, nullable: true })
  custCode: string;

  @Column({ name: 'cust_name', type: 'varchar', length: 100, nullable: true })
  custName: string;

  @Column({
    name: 'cust_address',
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  custAddress: string;

  @Column({ name: 'cust_phone', type: 'varchar', length: 15, nullable: true })
  custPhone: string;

  @Column({ name: 'cust_email', type: 'varchar', length: 100, nullable: true })
  custEmail: string;

  @Column({ name: 'cust_status', type: 'int', nullable: true })
  custStatus: number;
}

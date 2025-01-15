import { Entity, Column, BaseEntity } from 'typeorm';

@Entity('m_customer')
export class MCustomer extends BaseEntity {
  @Column({ type: 'varchar', length: 15, nullable: true })
  custCode: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  custName: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  custAddress: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  custPhone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  custEmail: string;

  @Column({ type: 'int', nullable: true })
  custStatus: number;
}

/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_supplier')
export class MSupplier extends BaseEntity {
  @Column({ name:"supp_code", type: 'varchar', length: 15, nullable: true })
  suppCode: string;

  @Column({ name:"supp_name", type: 'varchar', length: 250, nullable: true })
  suppName: string;

  @Column({ name:"supp_address", type: 'varchar', length: 250, nullable: true })
  suppAddress: string;

  @Column({ name:"supp_phone", type: 'varchar', length: 15, nullable: true })
  suppPhone: string;

  @Column({ name:"supp_email", type: 'varchar', length: 100, nullable: true })
  suppEmail: string;

  @Column({ name:"supp_status", type: 'int', nullable: true })
  suppStatus: number;
}

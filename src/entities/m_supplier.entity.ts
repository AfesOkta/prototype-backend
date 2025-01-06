import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/base_entity.entity';

@Entity('m_supplier')
export class MSupplier extends BaseEntity {
  @Column({ type: 'varchar', length: 15, nullable: true })
  suppCode: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  suppName: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  suppAddress: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  suppPhone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  suppEmail: string;

  @Column({ type: 'int', nullable: true })
  suppStatus: number;
}

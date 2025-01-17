import { BaseEntity } from 'src/base/base_entity.entity';
import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('t_cashbank_dtl')
export class TCashBankDtl extends BaseEntity {
  @Column({
    name: 'cashbank_code',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  cashbankCode: string;

  @Column({
    name: 'cashbank_dtl_type',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  cashbankDtlType: string;

  @Column({
    name: 'cashbank_dtl_amount',
    type: 'decimal',
    precision: 18,
    scale: 2,
    nullable: false,
  })
  cashbankDtlAmount: number;

  @Column({
    name: 'cashbank_dtl_desc',
    type: 'text',
    nullable: true,
  })
  cashbankDtlDesc: string;

  @Column({
    name: 'cashbank_dtl_status',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  cashbankDtlStatus: string;

  @Column({
    name: 'cashbank_dtl_deleted_by',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  cashbankDtlDeletedBy: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  cashbankDtlDeletedAt: Date;

  @Column({
    name: 'cashbank_dtl_is_deleted',
    type: 'boolean',
    nullable: false,
  })
  cashbankDtlIsDeleted: number;

  @Column({
    name: 'cashbank_dtl_is_active',
    type: 'boolean',
    nullable: false,
  })
  cashbankDtlIsActive: number;
}

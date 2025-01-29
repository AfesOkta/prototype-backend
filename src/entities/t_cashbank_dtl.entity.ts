import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: 'C0001', description: 'Cash/Bank Code' })
  cashbankCode: string;

  @Column({
    name: 'cashbank_dtl_type',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  @ApiProperty({ example: '-', description: 'Cash/Bank detail type' })
  cashbankDtlType: string;

  @Column({
    name: 'cashbank_dtl_amount',
    type: 'decimal',
    precision: 18,
    scale: 2,
    nullable: false,
  })
  @ApiProperty({ example: '50000', description: 'Amount Cash/Bank' })
  cashbankDtlAmount: number;

  @Column({
    name: 'cashbank_dtl_desc',
    type: 'text',
    nullable: true,
  })
  @ApiProperty({ example: '-', description: 'Description cash/bank' })
  cashbankDtlDesc: string;

  @Column({
    name: 'cashbank_dtl_status',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  @ApiProperty({ example: '-', description: 'Status cash/bank' })
  cashbankDtlStatus: string;

  @Column({
    name: 'cashbank_dtl_deleted_by',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @ApiProperty({ example: '1', description: 'User delete cashbank' })
  cashbankDtlDeletedBy: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty({
    example: '2025-01-26 00:42:01',
    description: 'Tanggal delete cash/bank',
  })
  cashbankDtlDeletedAt: Date;

  @Column({
    name: 'cashbank_dtl_is_deleted',
    type: 'boolean',
    nullable: false,
  })
  @ApiProperty({
    example: '1',
    description: 'status cash/bank deleted, 0: Non Deleted;1: Deleted',
  })
  cashbankDtlIsDeleted: number;

  @Column({
    name: 'cashbank_dtl_is_active',
    type: 'boolean',
    nullable: false,
  })
  @ApiProperty({
    example: '1',
    description: 'status cash/bank active, 0: non active;1: active',
  })
  cashbankDtlIsActive: number;
}

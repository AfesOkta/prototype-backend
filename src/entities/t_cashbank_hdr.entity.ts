import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base/base_entity.entity';
import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('t_cashbank_hdr')
export class TCashBankHdr extends BaseEntity {
  @Column({
    name: 'cashbank_code',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  @ApiProperty({ example: '2025012600001', description: 'Kode Cash/Bank' })
  cashbankCode: string;

  @Column({ name: 'cashbank_date', type: 'timestamp', nullable: false })
  @ApiProperty({ example: '2025-01-26', description: 'Tanggal Cash/Bank' })
  cashbankDate: Date;

  @Column({
    name: 'cashbank_type',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  @ApiProperty({ example: 'Tunai', description: 'Cash/Bank Type' })
  cashbankType: string;

  @Column({
    name: 'cashbank_amount',
    type: 'decimal',
    precision: 18,
    scale: 2,
    nullable: false,
  })
  @ApiProperty({ example: '50000', description: 'Total Amount' })
  cashbankAmount: number;

  @Column({ name: 'cashbank_desc', type: 'text', nullable: true })
  @ApiProperty({ example: '-', description: 'Description cash/bank' })
  cashbankDesc: string;

  @Column({
    name: 'cashbank_status',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  @ApiProperty({ example: 'Lunas', description: 'Status cash/bank' })
  cashbankStatus: string;

  @Column({
    name: 'cashbank_deleted_by',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @ApiProperty({ example: '1', description: 'User deleted' })
  cashbankDeletedBy: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty({
    example: '2025-01-26 00:49:59',
    description: 'Tanggal user deleted',
  })
  cashbankDeletedAt: Date;

  @Column({ name: 'cashbank_is_deleted', type: 'boolean', nullable: false })
  @ApiProperty({ example: 'True', description: 'Status deleted' })
  cashbankIsDeleted: boolean;

  @Column({ name: 'cashbank_is_active', type: 'boolean', nullable: false })
  @ApiProperty({ example: 'True', description: 'Status Active' })
  cashbankIsActive: boolean;

  @Column({ name: 'cashbank_is_reconciled', type: 'boolean', nullable: false })
  @ApiProperty({ example: 'True', description: 'Status reconsialised' })
  cashbankIsReconciled: boolean;

  @Column({
    name: 'cashbank_reconciled_by',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @ApiProperty({ example: '1', description: 'User reconsialised' })
  cashbankReconc;
}

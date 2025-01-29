/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MUnit } from './m_unit.entity';
import { BaseEntity } from '../base/base_entity.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity('m_product')
export class MProduct extends BaseEntity {
  @Column({ name: 'product_code', type: 'varchar', length: 15, nullable: true })
  @ApiProperty({ example: 'P0001', description: 'Product Code' })
  productCode: string;

  @Column({
    name: 'product_name',
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @ApiProperty({ example: 'Roti Sisir', description: 'Product Name' })
  productName: string;

  @Column({
    name: 'product_barcode',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  @ApiProperty({ example: '0123456789', description: 'Product Barcode' })
  productBarcode: string;

  @Column({ name: 'product_type', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'Product Type' })
  productType: number;

  @Column({ name: 'product_unit', type: 'int', nullable: true })
  @ApiProperty({ example: 'PCS', description: 'Product Unit' })
  productUnit: number;

  @ApiProperty({ type: () => MUnit, description: 'MUnit' })
  @ManyToOne(() => MUnit)
  @JoinColumn({ name: 'product_unit' })
  unit: MUnit;

  @Column({
    name: 'product_purchase_price',
    type: 'decimal',
    precision: 18,
    scale: 2,
    nullable: true,
  })
  @ApiProperty({ example: '1000', description: 'Product Purchase Price' })
  productPurchasePrice: number;

  @Column({
    name: 'product_sales_price',
    type: 'decimal',
    precision: 18,
    scale: 2,
    nullable: true,
  })
  @ApiProperty({ example: '1500', description: 'Product Sales Price' })
  productSalesPrice: number;

  @Column({
    name: 'product_margin',
    type: 'decimal',
    precision: 18,
    scale: 2,
    nullable: true,
  })
  @ApiProperty({ example: '5.0', description: 'Product margin' })
  productMargin: number;

  @Column({
    name: 'product_cogs',
    type: 'decimal',
    precision: 18,
    scale: 2,
    nullable: true,
  })
  @ApiProperty({ example: '200', description: 'Product COGS' })
  productCogs: number;

  @Column({
    name: 'product_note',
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @ApiProperty({ example: '-', description: 'Product Note' })
  productNote: number;

  @Column({ name: 'product_status', type: 'int', nullable: true })
  @ApiProperty({ example: '1', description: 'Product Status' })
  productStatus: number;
}

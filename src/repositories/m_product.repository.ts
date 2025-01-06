import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MProduct } from 'src/entities/m_product.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MProductRepository extends BaseRepository<MProduct> {
  constructor(private readonly dataSource: DataSource) {
    super(MProduct, dataSource);
  }

  // Custom query example: find by cash account code
  async findByCashAccountCode(code: string): Promise<MProduct | null> {
    return this.findOne({
      where: { productCode: code },
      relations: ['unit'],
    });
  }
}

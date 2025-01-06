import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MTaxType } from 'src/entities/m_tax_type.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MTaxTypeRepository extends BaseRepository<MTaxType> {
  constructor(private dataSource: DataSource) {
    super(MTaxType, dataSource);
  }

  async findByTaxTypeCode(taxTypeCode: string): Promise<MTaxType | null> {
    return this.findOne({ where: { taxTypeCode } });
  }

  async findByTaxCodeOrName(
    taxTypeCode: string,
    taxTypeName: string,
  ): Promise<MTaxType | null> {
    return this.findOne({
      where: [{ taxTypeCode }, { taxTypeName }],
    });
  }
}

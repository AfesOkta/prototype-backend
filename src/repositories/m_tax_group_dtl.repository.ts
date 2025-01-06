import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MTaxGroupDtl } from 'src/entities/m_tax_group_dtl.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MTaxGroupDtlRepository extends BaseRepository<MTaxGroupDtl> {
  constructor(private dataSource: DataSource) {
    super(MTaxGroupDtl, dataSource);
  }

  async findByTaxTypeAndTaxGroupHdr(
    taxTypeId: number,
    taxGroupHdrId: number,
  ): Promise<MTaxGroupDtl[]> {
    return this.find({
      where: {
        taxTypeId,
        taxGroupHdrId,
      },
      relations: ['taxType', 'taxGroupHdr'],
    });
  }

  async findByTaxType(taxTypeId: number): Promise<MTaxGroupDtl[]> {
    return this.find({
      where: {
        taxTypeId,
      },
      relations: ['taxType', 'taxGroupHdr'],
    });
  }

  async findByTaxGroupHdr(taxGroupHdrId: number): Promise<MTaxGroupDtl[]> {
    return this.find({
      where: {
        taxGroupHdrId,
      },
      relations: ['taxType', 'taxGroupHdr'],
    });
  }
}

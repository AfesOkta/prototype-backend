import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MTaxGroupHdr } from 'src/entities/m_tax_group_hdr.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MTaxGroupHdrRepository extends BaseRepository<MTaxGroupHdr> {
  constructor(private dataSource: DataSource) {
    super(MTaxGroupHdr, dataSource);
  }

  async findByTaxGroupCode(
    taxTypeGroupCode: string,
  ): Promise<MTaxGroupHdr | null> {
    return this.findOne({ where: { taxTypeGroupCode } });
  }

  async findByTaxGroupCodeOrName(
    taxTypeGroupCode: string,
    taxTypeGroupName: string,
  ): Promise<MTaxGroupHdr | null> {
    return this.findOne({
      where: [{ taxTypeGroupCode }, { taxTypeGroupName }],
    });
  }
}

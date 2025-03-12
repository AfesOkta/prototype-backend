import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/base/base_reepository.repository';
import { TInventoryDetail } from 'src/entities/t_inventory_dtl.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class TInventoryDtlRepository extends BaseRepository<TInventoryDetail> {
  constructor(private dataSource: DataSource) {
    super(TInventoryDetail, dataSource);
  }

  async findByInventoryHdr(
    inventory_hdr_id: BigInteger,
  ): Promise<TInventoryDetail[]> {
    return await this.dataSource
      .getRepository(TInventoryDetail)
      .createQueryBuilder('inventoryDetail')
      .where('inventoryDetail.inventory_hdr_id = :inventory_hdr_id', {
        inventory_hdr_id,
      })
      .getMany();
  }
}

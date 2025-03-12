import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/base/base_reepository.repository';
import { TInventoryHdr } from 'src/entities/t_inventory_hdr.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class TInventoryHdrRepository extends BaseRepository<TInventoryHdr> {
  constructor(private dataSource: DataSource) {
    super(TInventoryHdr, dataSource);
  }

  async findByInventoryCode(trNo: string): Promise<TInventoryHdr | null> {
    return this.findOne({ where: { trNo } });
  }
}

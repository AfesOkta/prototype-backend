import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MSupplier } from 'src/entities/m_supplier.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MSupplierRepository extends BaseRepository<MSupplier> {
  constructor(private dataSource: DataSource) {
    super(MSupplier, dataSource);
  }

  async findBySupplierCode(suppCode: string): Promise<MSupplier | null> {
    return this.findOne({ where: { suppCode } });
  }
}

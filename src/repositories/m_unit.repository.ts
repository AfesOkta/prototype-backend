import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MUnit } from 'src/entities/m_unit.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MUnitRepository extends BaseRepository<MUnit> {
  constructor(private dataSource: DataSource) {
    super(MUnit, dataSource);
  }

  async findByUnitCodeOrName(
    unitCode: string,
    unitName: string,
  ): Promise<MUnit | null> {
    return this.findOne({
      where: [{ unitCode }, { unitName }],
    });
  }
}

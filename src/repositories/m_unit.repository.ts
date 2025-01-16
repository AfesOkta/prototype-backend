/* eslint-disable prettier/prettier */
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
  
  async findExistUnit(id: number): Promise<boolean> {
    const count = await this.dataSource
      .getRepository(MUnit)
      .createQueryBuilder('unit')
      .innerJoin('unit.m_products', 'product')
      .where('unit.id = :id', { id })
      .getCount();

    return count > 0;
  }
}

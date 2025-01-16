/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MUnit } from 'src/entities/m_unit.entity';
import { MUnitRepository } from 'src/repositories/m_unit.repository';

@Injectable()
export class MUnitService extends BaseService<MUnit> {
  constructor(private readonly unitRepository: MUnitRepository) {
    super(unitRepository);
  }

  async getAllUnit(): Promise<MUnit[]> {
    return this.unitRepository.find();
  }

  async getUnitById(id: number): Promise<MUnit | null> {
    return this.unitRepository.findOne({ where: { id } });
  }

  async createUnit(data: Partial<MUnit>): Promise<MUnit> {
    const unit = this.unitRepository.create(data);
    return this.unitRepository.save(unit);
  }

  async getUnitByCodeOrName(
    unitCode: string,
    unitName: string,
  ): Promise<MUnit | null> {
    return this.unitRepository.findByUnitCodeOrName(unitCode, unitName);
  }

  async updateUnit(id: number, data: Partial<MUnit>): Promise<MUnit | null> {
    const unit = await this.unitRepository.findOne({
      where: { id },
    });
    if (!unit) {
      return null;
    }

    Object.assign(unit, data);
    return this.unitRepository.save(unit);
  }

  async deleteUnit(id: number): Promise<void> {
    const existsUnit = await this.unitRepository.findExistUnit(id);
    if(existsUnit) {
      throw new Error('Unit is already used in product');
    }
    await this.unitRepository.delete(id);
  }
}

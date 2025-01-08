import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MLocation } from 'src/entities/m_location.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MLocationRepository extends BaseRepository<MLocation> {
  constructor(private readonly dataSource: DataSource) {
    super(MLocation, dataSource);
  }

  // Custom query example: find by cash account code
  async findLocationByCode(code: string): Promise<MLocation | null> {
    return this.findOne({ where: { locationCode: code } });
  }
}

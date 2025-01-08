import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MLocation } from 'src/entities/m_location.entity';
import { MLocationRepository } from 'src/repositories/m_location.repository';

@Injectable()
export class MLocationService extends BaseService<MLocation> {
  constructor(private readonly locationRepository: MLocationRepository) {
    super(locationRepository);
  }

  async getAllLocation(): Promise<MLocation[]> {
    return this.locationRepository.find();
  }

  async getLocationById(id: number): Promise<MLocation | null> {
    return this.locationRepository.findOne({ where: { id } });
  }

  async createLocation(data: Partial<MLocation>): Promise<MLocation> {
    const Location = this.locationRepository.create(data);
    return this.locationRepository.save(Location);
  }

  async getLocationByCode(LocationCode: string): Promise<MLocation | null> {
    return this.locationRepository.findLocationByCode(LocationCode);
  }

  async updateLocation(
    id: number,
    data: Partial<MLocation>,
  ): Promise<MLocation | null> {
    const Location = await this.locationRepository.findOne({ where: { id } });
    if (!Location) {
      return null;
    }

    Object.assign(Location, data);
    return this.locationRepository.save(Location);
  }

  async deleteLocation(id: number): Promise<void> {
    await this.locationRepository.delete(id);
  }
}

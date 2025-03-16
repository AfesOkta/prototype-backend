import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { TInventoryHdr } from 'src/entities/t_inventory_hdr.entity';
import { TInventoryHdrRepository } from 'src/repositories/t_inventory_hdr.repository';

@Injectable()
export class TInventoryService extends BaseService<TInventoryHdr> {
  constructor(protected readonly repository: TInventoryHdrRepository) {
    super(repository);
  }

  async createInventoryHeader(
    data: Partial<TInventoryHdr>,
  ): Promise<TInventoryHdr> {
    const inventoryHeader = this.repository.create(data);
    return this.repository.save(inventoryHeader);
  }

  async findAllInventoryHeaders(): Promise<TInventoryHdr[]> {
    return this.repository.find();
  }

  async findInventoryHeaderById(id: number): Promise<TInventoryHdr> {
    return this.repository.findOne({ where: { id } });
  }

  async updateInventoryHeader(
    id: number,
    data: Partial<TInventoryHdr>,
  ): Promise<TInventoryHdr> {
    await this.repository.update(id, data);
    return this.findInventoryHeaderById(id);
  }

  async deleteInventoryHeader(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

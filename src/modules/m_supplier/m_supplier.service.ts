import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MSupplier } from 'src/entities/m_supplier.entity';
import { MSupplierRepository } from 'src/repositories/m_supplier.repository';

@Injectable()
export class MSupplierService extends BaseService<MSupplier> {
  constructor(private readonly supplierRepository: MSupplierRepository) {
    super(supplierRepository);
  }

  async getAllSupplier(): Promise<MSupplier[]> {
    return this.supplierRepository.find();
  }

  async getSupplierById(id: number): Promise<MSupplier | null> {
    return this.supplierRepository.findOne({ where: { id } });
  }

  async createSupplier(data: Partial<MSupplier>): Promise<MSupplier> {
    const Supplier = this.supplierRepository.create(data);
    return this.supplierRepository.save(Supplier);
  }

  async getSupplierByCode(SupplierCode: string): Promise<MSupplier | null> {
    return this.supplierRepository.findSupplierByCode(SupplierCode);
  }

  async updateSupplier(
    id: number,
    data: Partial<MSupplier>,
  ): Promise<MSupplier | null> {
    const Supplier = await this.supplierRepository.findOne({ where: { id } });
    if (!Supplier) {
      return null;
    }

    Object.assign(Supplier, data);
    return this.supplierRepository.save(Supplier);
  }

  async deleteSupplier(id: number): Promise<void> {
    await this.supplierRepository.delete(id);
  }
}

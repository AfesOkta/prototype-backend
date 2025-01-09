import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MTaxType } from 'src/entities/m_tax_type.entity';
import { MTaxTypeRepository } from 'src/repositories/m_tax_type.repository';

@Injectable()
export class MTaxTypeService extends BaseService<MTaxType> {
  constructor(private readonly taxTypeRepository: MTaxTypeRepository) {
    super(taxTypeRepository);
  }

  async getAllTaxType(): Promise<MTaxType[]> {
    return this.taxTypeRepository.find();
  }

  async getTaxTypeById(id: number): Promise<MTaxType | null> {
    return this.taxTypeRepository.findOne({ where: { id } });
  }

  async createTaxType(data: Partial<MTaxType>): Promise<MTaxType> {
    const TaxType = this.taxTypeRepository.create(data);
    return this.taxTypeRepository.save(TaxType);
  }

  async getTaxTypeByCodeOrName(
    taxTypeGroupCode: string,
    taxTypeGroupName: string,
  ): Promise<MTaxType | null> {
    return this.taxTypeRepository.findByTaxCodeOrName(
      taxTypeGroupCode,
      taxTypeGroupName,
    );
  }

  async updateTaxType(
    id: number,
    data: Partial<MTaxType>,
  ): Promise<MTaxType | null> {
    const TaxType = await this.taxTypeRepository.findOne({
      where: { id },
    });
    if (!TaxType) {
      return null;
    }

    Object.assign(TaxType, data);
    return this.taxTypeRepository.save(TaxType);
  }

  async deleteTaxType(id: number): Promise<void> {
    await this.taxTypeRepository.delete(id);
  }
}

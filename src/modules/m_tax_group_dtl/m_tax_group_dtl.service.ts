import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MTaxGroupDtl } from 'src/entities/m_tax_group_dtl.entity';
import { MTaxGroupDtlRepository } from 'src/repositories/m_tax_group_dtl.repository';

@Injectable()
export class MTaxGroupDtlService extends BaseService<MTaxGroupDtl> {
  constructor(private readonly taxGroupDtlRepository: MTaxGroupDtlRepository) {
    super(taxGroupDtlRepository);
  }

  async getAllTaxGroupDtl(): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlRepository.find();
  }

  async getTaxGroupDtlById(id: number): Promise<MTaxGroupDtl | null> {
    return this.taxGroupDtlRepository.findOne({ where: { id } });
  }

  async createTaxGroupDtl(data: Partial<MTaxGroupDtl>): Promise<MTaxGroupDtl> {
    const TaxGroupDtl = this.taxGroupDtlRepository.create(data);
    return this.taxGroupDtlRepository.save(TaxGroupDtl);
  }

  async findTaxGroupDtlByType(taxType: number): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlRepository.findByTaxType(taxType);
  }

  async findTaxGroupDtlByHdr(taxGroupHdrId: number): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlRepository.findByTaxGroupHdr(taxGroupHdrId);
  }

  async updateTaxGroupDtl(
    id: number,
    data: Partial<MTaxGroupDtl>,
  ): Promise<MTaxGroupDtl | null> {
    const TaxGroupDtl = await this.taxGroupDtlRepository.findOne({
      where: { id },
    });
    if (!TaxGroupDtl) {
      return null;
    }

    Object.assign(TaxGroupDtl, data);
    return this.taxGroupDtlRepository.save(TaxGroupDtl);
  }

  async deleteTaxGroupDtl(id: number): Promise<void> {
    await this.taxGroupDtlRepository.delete(id);
  }
}

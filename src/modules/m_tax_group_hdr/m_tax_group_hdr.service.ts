import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MTaxGroupHdr } from 'src/entities/m_tax_group_hdr.entity';
import { MTaxGroupHdrRepository } from 'src/repositories/m_tax_group_hdr.repository';

@Injectable()
export class MTaxGroupHdrService extends BaseService<MTaxGroupHdr> {
  constructor(private readonly taxGroupHdrRepository: MTaxGroupHdrRepository) {
    super(taxGroupHdrRepository);
  }

  async getAllTaxGroupHdr(): Promise<MTaxGroupHdr[]> {
    return this.taxGroupHdrRepository.find();
  }

  async getTaxGroupHdrById(id: number): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrRepository.findOne({ where: { id } });
  }

  async createTaxGroupHdr(data: Partial<MTaxGroupHdr>): Promise<MTaxGroupHdr> {
    const TaxGroupHdr = this.taxGroupHdrRepository.create(data);
    return this.taxGroupHdrRepository.save(TaxGroupHdr);
  }

  async getTaxGroupHdrByCode(
    taxTypeGroupCode: string,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrRepository.findTaxGroupByCode(taxTypeGroupCode);
  }

  async getTaxGroupHdrByCodeOrName(
    taxTypeGroupCode: string,
    taxTypeGroupName: string,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrRepository.findTaxGroupByCodeOrName(
      taxTypeGroupCode,
      taxTypeGroupName,
    );
  }

  async updateTaxGroupHdr(
    id: number,
    data: Partial<MTaxGroupHdr>,
  ): Promise<MTaxGroupHdr | null> {
    const TaxGroupHdr = await this.taxGroupHdrRepository.findOne({
      where: { id },
    });
    if (!TaxGroupHdr) {
      return null;
    }

    Object.assign(TaxGroupHdr, data);
    return this.taxGroupHdrRepository.save(TaxGroupHdr);
  }

  async deleteTaxGroupHdr(id: number): Promise<void> {
    await this.taxGroupHdrRepository.delete(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MTaxGroupDtlService } from './m_tax_group_dtl.service';
import { MTaxGroupDtl } from 'src/entities/m_tax_group_dtl.entity';

@Controller('taxGroupDtl')
export class MTaxGroupDtlController {
  constructor(private readonly taxGroupDtlService: MTaxGroupDtlService) {}

  @Get()
  async getAllTaxGroupDtls(): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlService.getAllTaxGroupDtl();
  }

  @Get(':id')
  async getAllTaxGroupDtlById(
    @Param('id') id: number,
  ): Promise<MTaxGroupDtl | null> {
    return this.taxGroupDtlService.getTaxGroupDtlById(id);
  }

  @Post()
  async createPayment(
    @Body() TaxGroupDtlData: Partial<MTaxGroupDtl>,
  ): Promise<MTaxGroupDtl> {
    return this.taxGroupDtlService.createTaxGroupDtl(TaxGroupDtlData);
  }

  @Get('code/:taxType')
  async getTaxGroupDtlByType(
    @Param('taxType') taxType: number,
  ): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlService.findTaxGroupDtlByType(taxType);
  }

  @Get('code/:hdr')
  async getTaxGroupDtlByHdr(
    @Param('hdr') hdr: number,
  ): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlService.findTaxGroupDtlByHdr(hdr);
  }

  // Update a Supplier
  @Put(':id')
  async updateSupplier(
    @Param('id') id: number,
    @Body() SupplierData: Partial<MTaxGroupDtl>,
  ): Promise<MTaxGroupDtl | null> {
    return this.taxGroupDtlService.updateTaxGroupDtl(id, SupplierData);
  }

  // Delete a Supplier
  @Delete(':id')
  async deleteTaxGroupDtl(@Param('id') id: number): Promise<void> {
    return this.taxGroupDtlService.deleteTaxGroupDtl(id);
  }
}

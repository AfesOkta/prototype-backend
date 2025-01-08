import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MTaxGroupHdrService } from './m_tax_group_hdr.service';
import { MTaxGroupHdr } from 'src/entities/m_tax_group_hdr.entity';

@Controller('taxGroupHdr')
export class MTaxGroupHdrController {
  constructor(private readonly taxGroupHdrService: MTaxGroupHdrService) {}

  @Get()
  async getAllTaxGroupHdrs(): Promise<MTaxGroupHdr[]> {
    return this.taxGroupHdrService.getAllTaxGroupHdr();
  }

  @Get(':id')
  async getAllTaxGroupHdrById(
    @Param('id') id: number,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrService.getTaxGroupHdrById(id);
  }

  @Post()
  async createPayment(
    @Body() TaxGroupHdrData: Partial<MTaxGroupHdr>,
  ): Promise<MTaxGroupHdr> {
    return this.taxGroupHdrService.createTaxGroupHdr(TaxGroupHdrData);
  }

  @Get('code/:TaxGroupHdrCode')
  async getTaxGroupHdrByCode(
    @Param('TaxGroupHdrCode') TaxGroupHdrCode: string,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrService.getTaxGroupHdrByCode(TaxGroupHdrCode);
  }

  @Get('code')
  async getTaxGroupHdrByCodeOrName(
    @Param('TaxGroupHdrCode') TaxGroupHdrCode: string,
    @Param('TaxTypeGroupName') TaxTypeGroupName: string,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrService.getTaxGroupHdrByCodeOrName(
      TaxGroupHdrCode,
      TaxTypeGroupName,
    );
  }

  // Update a TaxGroupHdr
  @Put(':id')
  async updateTaxGroupHdr(
    @Param('id') id: number,
    @Body() TaxGroupHdrData: Partial<MTaxGroupHdr>,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrService.updateTaxGroupHdr(id, TaxGroupHdrData);
  }

  // Delete a TaxGroupHdr
  @Delete(':id')
  async deleteTaxGroupHdr(@Param('id') id: number): Promise<void> {
    return this.taxGroupHdrService.deleteTaxGroupHdr(id);
  }
}

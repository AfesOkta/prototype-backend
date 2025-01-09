import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MTaxTypeService } from './m_tax_type.service';
import { MTaxType } from 'src/entities/m_tax_type.entity';

@Controller('taxType')
export class MTaxTypeController {
  constructor(private readonly taxTypeService: MTaxTypeService) {}

  @Get()
  async getAllTaxTypes(): Promise<MTaxType[]> {
    return this.taxTypeService.getAllTaxType();
  }

  @Get(':id')
  async getAllTaxTypeById(@Param('id') id: number): Promise<MTaxType | null> {
    return this.taxTypeService.getTaxTypeById(id);
  }

  @Post()
  async createPayment(
    @Body() TaxTypeData: Partial<MTaxType>,
  ): Promise<MTaxType> {
    return this.taxTypeService.createTaxType(TaxTypeData);
  }

  @Get('code')
  async getTaxTypeByCodeOrName(
    @Param('TaxTypeCode') TaxTypeCode: string,
    @Param('TaxTypeGroupName') TaxTypeGroupName: string,
  ): Promise<MTaxType | null> {
    return this.taxTypeService.getTaxTypeByCodeOrName(
      TaxTypeCode,
      TaxTypeGroupName,
    );
  }

  // Update a TaxType
  @Put(':id')
  async updateTaxType(
    @Param('id') id: number,
    @Body() TaxTypeData: Partial<MTaxType>,
  ): Promise<MTaxType | null> {
    return this.taxTypeService.updateTaxType(id, TaxTypeData);
  }

  // Delete a TaxType
  @Delete(':id')
  async deleteTaxType(@Param('id') id: number): Promise<void> {
    return this.taxTypeService.deleteTaxType(id);
  }
}

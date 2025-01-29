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
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('taxType')
export class MTaxTypeController {
  constructor(private readonly taxTypeService: MTaxTypeService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data tax types' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MTaxType],
  })
  async getAllTaxTypes(): Promise<MTaxType[]> {
    return this.taxTypeService.getAllTaxType();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ambil data tax types berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax types' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MTaxType,
  })
  async getAllTaxTypeById(@Param('id') id: number): Promise<MTaxType | null> {
    return this.taxTypeService.getTaxTypeById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Buat data tax types baru' })
  @ApiBody({ type: MTaxType })
  @ApiResponse({
    status: 201,
    description: 'tax types berhasil dibuat.',
    type: MTaxType,
  })
  async createTaxTypes(
    @Body() TaxTypeData: Partial<MTaxType>,
  ): Promise<MTaxType> {
    return this.taxTypeService.createTaxType(TaxTypeData);
  }

  @Get('code')
  @ApiOperation({ summary: 'Ambil data tax types berdasarkan kode or nama' })
  @ApiParam({
    name: 'TaxTypeCode',
    type: String,
    description: 'Kode tax types',
  })
  @ApiParam({
    name: 'TaxTypeGroupName',
    type: String,
    description: 'Nama tax types',
  })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MTaxType,
  })
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
  @ApiOperation({ summary: 'Perbarui data tax types berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax types' })
  @ApiBody({ type: MTaxType })
  @ApiResponse({
    status: 200,
    description: 'Tax types berhasil diperbarui.',
    type: MTaxType,
  })
  async updateTaxType(
    @Param('id') id: number,
    @Body() TaxTypeData: Partial<MTaxType>,
  ): Promise<MTaxType | null> {
    return this.taxTypeService.updateTaxType(id, TaxTypeData);
  }

  // Delete a TaxType
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data tax types berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax types' })
  @ApiResponse({ status: 200, description: 'tax types berhasil dihapus.' })
  async deleteTaxType(@Param('id') id: number): Promise<void> {
    return this.taxTypeService.deleteTaxType(id);
  }
}

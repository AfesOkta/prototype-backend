import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MTaxTypeService } from './m_tax_type.service';
import { MTaxType } from 'src/entities/m_tax_type.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('tax-type')
@Controller('api/v1/tax-type')
export class MTaxTypeController {
  constructor(private readonly taxTypeService: MTaxTypeService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
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

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
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

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
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

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
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
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
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
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data tax types berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax types' })
  @ApiResponse({ status: 200, description: 'tax types berhasil dihapus.' })
  async deleteTaxType(@Param('id') id: number): Promise<void> {
    return this.taxTypeService.deleteTaxType(id);
  }
}

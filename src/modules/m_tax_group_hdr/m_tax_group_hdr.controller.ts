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
import { MTaxGroupHdrService } from './m_tax_group_hdr.service';
import { MTaxGroupHdr } from 'src/entities/m_tax_group_hdr.entity';
import {
  ApiBody,
  ApiParam,
  ApiResponse,
  ApiOperation,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('taxgroup-hdr')
@Controller('/api/v1/taxgroup-hdr')
export class MTaxGroupHdrController {
  constructor(private readonly taxGroupHdrService: MTaxGroupHdrService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'Ambil semua data tax group header' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MTaxGroupHdr],
  })
  async getAllTaxGroupHdrs(): Promise<MTaxGroupHdr[]> {
    return this.taxGroupHdrService.getAllTaxGroupHdr();
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiOperation({ summary: 'Ambil data tax group header berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax group header' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MTaxGroupHdr,
  })
  async getAllTaxGroupHdrById(
    @Param('id') id: number,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrService.getTaxGroupHdrById(id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Buat data tax group header baru' })
  @ApiBody({ type: MTaxGroupHdr })
  @ApiResponse({
    status: 201,
    description: 'Tax group berhasil dibuat.',
    type: MTaxGroupHdr,
  })
  async createTaxGroupHeader(
    @Body() TaxGroupHdrData: Partial<MTaxGroupHdr>,
  ): Promise<MTaxGroupHdr> {
    return this.taxGroupHdrService.createTaxGroupHdr(TaxGroupHdrData);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get('code/:TaxGroupHdrCode')
  @ApiOperation({ summary: 'Ambil data tax group header berdasarkan kode' })
  @ApiParam({
    name: 'TaxGroupHdrCode',
    type: String,
    description: 'Kode tax group header',
  })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MTaxGroupHdr,
  })
  async getTaxGroupHdrByCode(
    @Param('TaxGroupHdrCode') TaxGroupHdrCode: string,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrService.getTaxGroupHdrByCode(TaxGroupHdrCode);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get('code')
  @ApiOperation({
    summary: 'Ambil data tax group header berdasarkan kode atau nama',
  })
  @ApiParam({
    name: 'TaxGroupHdrCode',
    type: String,
    description: 'Kode tax group header',
  })
  @ApiParam({
    name: 'TaxTypeGroupName',
    type: String,
    description: 'Nama tax group header',
  })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MTaxGroupHdr,
  })
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
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data tax group header berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax group header' })
  @ApiBody({ type: MTaxGroupHdr })
  @ApiResponse({
    status: 200,
    description: 'Tax group header berhasil diperbarui.',
    type: MTaxGroupHdr,
  })
  async updateTaxGroupHdr(
    @Param('id') id: number,
    @Body() TaxGroupHdrData: Partial<MTaxGroupHdr>,
  ): Promise<MTaxGroupHdr | null> {
    return this.taxGroupHdrService.updateTaxGroupHdr(id, TaxGroupHdrData);
  }

  // Delete a TaxGroupHdr
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({
    summary: 'Hapus data tax group header berdasarkan ID',
  })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax group header' })
  @ApiResponse({
    status: 200,
    description: 'Tax group header berhasil dihapus.',
  })
  async deleteTaxGroupHdr(@Param('id') id: number): Promise<void> {
    return this.taxGroupHdrService.deleteTaxGroupHdr(id);
  }
}

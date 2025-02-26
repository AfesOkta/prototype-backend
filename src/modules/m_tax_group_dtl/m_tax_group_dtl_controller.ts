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
import { MTaxGroupDtlService } from './m_tax_group_dtl.service';
import { MTaxGroupDtl } from 'src/entities/m_tax_group_dtl.entity';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('taxgroup-dtl')
@Controller('/api/v1/taxgroup-dtl')
export class MTaxGroupDtlController {
  constructor(private readonly taxGroupDtlService: MTaxGroupDtlService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'Ambil semua data tax group detail' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MTaxGroupDtl],
  })
  async getAllTaxGroupDtls(): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlService.getAllTaxGroupDtl();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiOperation({ summary: 'Ambil data tax group detail berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax group detail' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MTaxGroupDtl,
  })
  async getAllTaxGroupDtlById(
    @Param('id') id: number,
  ): Promise<MTaxGroupDtl | null> {
    return this.taxGroupDtlService.getTaxGroupDtlById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Buat data tax group detail baru' })
  @ApiBody({ type: MTaxGroupDtl })
  @ApiResponse({
    status: 201,
    description: 'tax group detail berhasil dibuat.',
    type: MTaxGroupDtl,
  })
  async createTaxGroupDtl(
    @Body() TaxGroupDtlData: Partial<MTaxGroupDtl>,
  ): Promise<MTaxGroupDtl> {
    return this.taxGroupDtlService.createTaxGroupDtl(TaxGroupDtlData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('code/:taxType')
  @ApiOperation({
    summary: 'Ambil data tax group detail berdasarkan id tax type',
  })
  @ApiParam({ name: 'taxType', type: Number, description: 'Id tax type' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MTaxGroupDtl,
  })
  async getTaxGroupDtlByType(
    @Param('taxType') taxType: number,
  ): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlService.findTaxGroupDtlByType(taxType);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('code/:hdr')
  @ApiOperation({
    summary: 'Ambil data tax group detail berdasarkan id header',
  })
  @ApiParam({ name: 'hdr', type: Number, description: 'Id header' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MTaxGroupDtl,
  })
  async getTaxGroupDtlByHdr(
    @Param('hdr') hdr: number,
  ): Promise<MTaxGroupDtl[]> {
    return this.taxGroupDtlService.findTaxGroupDtlByHdr(hdr);
  }

  // Update a Supplier
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data tax group detail berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax group detail' })
  @ApiBody({ type: MTaxGroupDtl })
  @ApiResponse({
    status: 200,
    description: 'Csah Account berhasil diperbarui.',
    type: MTaxGroupDtl,
  })
  async updateTaxGroupDtl(
    @Param('id') id: number,
    @Body() SupplierData: Partial<MTaxGroupDtl>,
  ): Promise<MTaxGroupDtl | null> {
    return this.taxGroupDtlService.updateTaxGroupDtl(id, SupplierData);
  }

  // Delete a Supplier
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data tax group detail berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID tax group detail' })
  @ApiResponse({
    status: 200,
    description: 'Tax group detail berhasil dihapus.',
  })
  async deleteTaxGroupDtl(@Param('id') id: number): Promise<void> {
    return this.taxGroupDtlService.deleteTaxGroupDtl(id);
  }
}

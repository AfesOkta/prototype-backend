import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MSupplierService } from './m_supplier.service';
import { MSupplier } from 'src/entities/m_supplier.entity';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('suppliers')
export class MSupplierController {
  constructor(private readonly supplierService: MSupplierService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data supplier' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MSupplier],
  })
  async getAllSuppliers(): Promise<MSupplier[]> {
    return this.supplierService.getAllSupplier();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ambil data supplier berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID supplier' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MSupplier,
  })
  async getAllSupplierById(@Param('id') id: number): Promise<MSupplier | null> {
    return this.supplierService.getSupplierById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Buat data supplier baru' })
  @ApiBody({ type: MSupplier })
  @ApiResponse({
    status: 201,
    description: 'supplier berhasil dibuat.',
    type: MSupplier,
  })
  async createSupplier(
    @Body() SupplierData: Partial<MSupplier>,
  ): Promise<MSupplier> {
    return this.supplierService.createSupplier(SupplierData);
  }

  @Get('code/:SupplierCode')
  @ApiOperation({ summary: 'Ambil data supplier berdasarkan kode supplier' })
  @ApiParam({
    name: 'SupplierCode',
    type: String,
    description: 'Kode supplier',
  })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MSupplier,
  })
  async getSupplierByCode(
    @Param('SupplierCode') SupplierCode: string,
  ): Promise<MSupplier | null> {
    return this.supplierService.getSupplierByCode(SupplierCode);
  }

  // Update a Supplier
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data supplier berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID supplier' })
  @ApiBody({ type: MSupplier })
  @ApiResponse({
    status: 200,
    description: 'Csah Account berhasil diperbarui.',
    type: MSupplier,
  })
  async updateSupplier(
    @Param('id') id: number,
    @Body() SupplierData: Partial<MSupplier>,
  ): Promise<MSupplier | null> {
    return this.supplierService.updateSupplier(id, SupplierData);
  }

  // Delete a Supplier
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data supplier berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Id supplier' })
  @ApiResponse({ status: 200, description: 'supplier berhasil dihapus.' })
  async deleteSupplier(@Param('id') id: number): Promise<void> {
    return this.supplierService.deleteSupplier(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MUnitService } from './m_unit.service';
import { MUnit } from 'src/entities/m_unit.entity';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('unit')
export class MUnitController {
  constructor(private readonly UnitService: MUnitService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data unit' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MUnit],
  })
  async getAllUnits(): Promise<MUnit[]> {
    return this.UnitService.getAllUnit();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ambil data unit berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID unit' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MUnit,
  })
  async getAllUnitById(@Param('id') id: number): Promise<MUnit | null> {
    return this.UnitService.getUnitById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Buat data unit baru' })
  @ApiBody({ type: MUnit })
  @ApiResponse({
    status: 201,
    description: 'unit berhasil dibuat.',
    type: MUnit,
  })
  async createUnit(@Body() UnitData: Partial<MUnit>): Promise<MUnit> {
    return this.UnitService.createUnit(UnitData);
  }

  @Get('code')
  @ApiOperation({ summary: 'Ambil data unit berdasarkan kode atau nama' })
  @ApiParam({ name: 'UnitCode', type: String, description: 'Kode unit' })
  @ApiParam({ name: 'UnitName', type: String, description: 'Nama unit' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MUnit,
  })
  async getUnitByCodeOrName(
    @Param('UnitCode') UnitCode: string,
    @Param('UnitName') UnitName: string,
  ): Promise<MUnit | null> {
    return this.UnitService.getUnitByCodeOrName(UnitCode, UnitName);
  }

  // Update a Unit
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data unit berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID unit' })
  @ApiBody({ type: MUnit })
  @ApiResponse({
    status: 200,
    description: 'Unit berhasil diperbarui.',
    type: MUnit,
  })
  async updateUnit(
    @Param('id') id: number,
    @Body() UnitData: Partial<MUnit>,
  ): Promise<MUnit | null> {
    return this.UnitService.updateUnit(id, UnitData);
  }

  // Delete a Unit
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data unit berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID unit' })
  @ApiResponse({ status: 200, description: 'unit berhasil dihapus.' })
  async deleteUnit(@Param('id') id: number): Promise<void> {
    return this.UnitService.deleteUnit(id);
  }
}

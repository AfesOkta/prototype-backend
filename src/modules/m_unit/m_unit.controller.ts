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

@Controller('unit')
export class MUnitController {
  constructor(private readonly UnitService: MUnitService) {}

  @Get()
  async getAllUnits(): Promise<MUnit[]> {
    return this.UnitService.getAllUnit();
  }

  @Get(':id')
  async getAllUnitById(@Param('id') id: number): Promise<MUnit | null> {
    return this.UnitService.getUnitById(id);
  }

  @Post()
  async createUnit(@Body() UnitData: Partial<MUnit>): Promise<MUnit> {
    return this.UnitService.createUnit(UnitData);
  }

  @Get('code')
  async getUnitByCodeOrName(
    @Param('UnitCode') UnitCode: string,
    @Param('UnitName') UnitName: string,
  ): Promise<MUnit | null> {
    return this.UnitService.getUnitByCodeOrName(UnitCode, UnitName);
  }

  // Update a Unit
  @Put(':id')
  async updateUnit(
    @Param('id') id: number,
    @Body() UnitData: Partial<MUnit>,
  ): Promise<MUnit | null> {
    return this.UnitService.updateUnit(id, UnitData);
  }

  // Delete a Unit
  @Delete(':id')
  async deleteUnit(@Param('id') id: number): Promise<void> {
    return this.UnitService.deleteUnit(id);
  }
}

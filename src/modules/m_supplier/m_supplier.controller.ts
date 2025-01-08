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

@Controller('suppliers')
export class MSupplierController {
  constructor(private readonly supplierService: MSupplierService) {}

  @Get()
  async getAllSuppliers(): Promise<MSupplier[]> {
    return this.supplierService.getAllSupplier();
  }

  @Get(':id')
  async getAllSupplierById(@Param('id') id: number): Promise<MSupplier | null> {
    return this.supplierService.getSupplierById(id);
  }

  @Post()
  async createPayment(
    @Body() SupplierData: Partial<MSupplier>,
  ): Promise<MSupplier> {
    return this.supplierService.createSupplier(SupplierData);
  }

  @Get('code/:SupplierCode')
  async getSupplierByCode(
    @Param('SupplierCode') SupplierCode: string,
  ): Promise<MSupplier | null> {
    return this.supplierService.getSupplierByCode(SupplierCode);
  }

  // Update a Supplier
  @Put(':id')
  async updateSupplier(
    @Param('id') id: number,
    @Body() SupplierData: Partial<MSupplier>,
  ): Promise<MSupplier | null> {
    return this.supplierService.updateSupplier(id, SupplierData);
  }

  // Delete a Supplier
  @Delete(':id')
  async deleteSupplier(@Param('id') id: number): Promise<void> {
    return this.supplierService.deleteSupplier(id);
  }
}

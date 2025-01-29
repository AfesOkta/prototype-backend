import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MCustomerService } from './m_customer.service';
import { MCustomer } from 'src/entities/m_customer.entity';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('customers')
export class MCustomerController {
  constructor(private readonly customerService: MCustomerService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data Customer' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MCustomer],
  })
  async getAllCustomers(): Promise<MCustomer[]> {
    return this.customerService.getAllCustomer();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ambil data customer berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Id customer' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MCustomer,
  })
  async getAllCustomerById(@Param('id') id: number): Promise<MCustomer | null> {
    return this.customerService.getCustomerById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Buat data customer baru' })
  @ApiBody({ type: MCustomer })
  @ApiResponse({
    status: 201,
    description: 'Customer berhasil dibuat.',
    type: MCustomer,
  })
  async createCustomer(
    @Body() customerData: Partial<MCustomer>,
  ): Promise<MCustomer> {
    return this.customerService.createCustomer(customerData);
  }

  @Get('code/:CustomerCode')
  @ApiOperation({ summary: 'Ambil data customer berdasarkan kode customer' })
  @ApiParam({
    name: 'CustomerCode',
    type: String,
    description: 'kode customer',
  })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MCustomer,
  })
  async getCustomerByCode(
    @Param('CustomerCode') CustomerCode: string,
  ): Promise<MCustomer | null> {
    return this.customerService.getCustomerByCode(CustomerCode);
  }

  // Update a Customer
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data customer berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Id customer' })
  @ApiBody({ type: MCustomer })
  @ApiResponse({
    status: 200,
    description: 'Csah Account berhasil diperbarui.',
    type: MCustomer,
  })
  async updateCustomer(
    @Param('id') id: number,
    @Body() CustomerData: Partial<MCustomer>,
  ): Promise<MCustomer | null> {
    return this.customerService.updateBank(id, CustomerData);
  }

  // Delete a Customer
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data customer berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Id customer' })
  @ApiResponse({ status: 200, description: 'Customer berhasil dihapus.' })
  async deleteCustomer(@Param('id') id: number): Promise<void> {
    return this.customerService.deleteCustomer(id);
  }
}

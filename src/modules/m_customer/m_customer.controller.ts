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

@Controller('customers')
export class MCustomerController {
  constructor(private readonly customerService: MCustomerService) {}

  @Get()
  async getAllCustomers(): Promise<MCustomer[]> {
    return this.customerService.getAllCustomer();
  }

  @Get(':id')
  async getAllCustomerById(@Param('id') id: number): Promise<MCustomer | null> {
    return this.customerService.getCustomerById(id);
  }

  @Post()
  async createCustomer(
    @Body() customerData: Partial<MCustomer>,
  ): Promise<MCustomer> {
    return this.customerService.createCustomer(customerData);
  }

  @Get('code/:CustomerCode')
  async getCustomerByCode(
    @Param('CustomerCode') CustomerCode: string,
  ): Promise<MCustomer | null> {
    return this.customerService.getCustomerByCode(CustomerCode);
  }

  // Update a Customer
  @Put(':id')
  async updateCustomer(
    @Param('id') id: number,
    @Body() CustomerData: Partial<MCustomer>,
  ): Promise<MCustomer | null> {
    return this.customerService.updateBank(id, CustomerData);
  }

  // Delete a Customer
  @Delete(':id')
  async deleteCustomer(@Param('id') id: number): Promise<void> {
    return this.customerService.deleteCustomer(id);
  }
}

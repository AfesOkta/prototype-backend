import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MPaymentType } from 'src/entities/m_payment_type.entity';
import { MPaymentTypeService } from './m_payment_type.service';

@Controller('paymentTypes')
export class MPaymentTypeController {
  constructor(private readonly paymenTypeService: MPaymentTypeService) {}

  @Get()
  async getAllPaymentTypes(): Promise<MPaymentType[]> {
    return this.paymenTypeService.getAllPaymentType();
  }

  @Get(':id')
  async getAllPaymentTypeById(
    @Param('id') id: number,
  ): Promise<MPaymentType | null> {
    return this.paymenTypeService.getPaymentTypeById(id);
  }

  @Post()
  async createPayment(
    @Body() PaymentTypeData: Partial<MPaymentType>,
  ): Promise<MPaymentType> {
    return this.paymenTypeService.createPaymentType(PaymentTypeData);
  }

  @Get('code/:PaymentTypeCode')
  async getPaymentTypeByCode(
    @Param('PaymentTypeCode') PaymentTypeCode: string,
  ): Promise<MPaymentType | null> {
    return this.paymenTypeService.getPaymentTypeByCode(PaymentTypeCode);
  }

  // Update a PaymentType
  @Put(':id')
  async updatePaymentType(
    @Param('id') id: number,
    @Body() PaymentTypeData: Partial<MPaymentType>,
  ): Promise<MPaymentType | null> {
    return this.paymenTypeService.updatePaymentType(id, PaymentTypeData);
  }

  // Delete a PaymentType
  @Delete(':id')
  async deletePaymentType(@Param('id') id: number): Promise<void> {
    return this.paymenTypeService.deletePaymentType(id);
  }
}

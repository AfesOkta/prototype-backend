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
import { MPaymentType } from 'src/entities/m_payment_type.entity';
import { MPaymentTypeService } from './m_payment_type.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('payment-types')
@Controller('/api/v1/paymentTypes')
export class MPaymentTypeController {
  constructor(private readonly paymenTypeService: MPaymentTypeService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'Ambil semua data payment type' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MPaymentType],
  })
  async getAllPaymentTypes(): Promise<MPaymentType[]> {
    return this.paymenTypeService.getAllPaymentType();
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiOperation({ summary: 'Ambil data payment type berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID payment type' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MPaymentType,
  })
  async getAllPaymentTypeById(
    @Param('id') id: number,
  ): Promise<MPaymentType | null> {
    return this.paymenTypeService.getPaymentTypeById(id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Buat data payment type baru' })
  @ApiBody({ type: MPaymentType })
  @ApiResponse({
    status: 201,
    description: 'payment type berhasil dibuat.',
    type: MPaymentType,
  })
  async createPayment(
    @Body() PaymentTypeData: Partial<MPaymentType>,
  ): Promise<MPaymentType> {
    return this.paymenTypeService.createPaymentType(PaymentTypeData);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get('code/:PaymentTypeCode')
  @ApiOperation({ summary: 'Ambil data payment type berdasarkan kode' })
  @ApiParam({
    name: 'PaymentTypeCode',
    type: String,
    description: 'Kode payment type',
  })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MPaymentType,
  })
  async getPaymentTypeByCode(
    @Param('PaymentTypeCode') PaymentTypeCode: string,
  ): Promise<MPaymentType | null> {
    return this.paymenTypeService.getPaymentTypeByCode(PaymentTypeCode);
  }

  // Update a PaymentType
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data payment type berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Id payment type' })
  @ApiBody({ type: MPaymentType })
  @ApiResponse({
    status: 200,
    description: 'Csah Account berhasil diperbarui.',
    type: MPaymentType,
  })
  async updatePaymentType(
    @Param('id') id: number,
    @Body() PaymentTypeData: Partial<MPaymentType>,
  ): Promise<MPaymentType | null> {
    return this.paymenTypeService.updatePaymentType(id, PaymentTypeData);
  }

  // Delete a PaymentType
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data payment type berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID payment type' })
  @ApiResponse({ status: 200, description: 'payment type berhasil dihapus.' })
  async deletePaymentType(@Param('id') id: number): Promise<void> {
    return this.paymenTypeService.deletePaymentType(id);
  }
}

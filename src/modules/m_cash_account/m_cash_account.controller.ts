import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MCashAccountService } from './m_cash_account.service';
import { MCashAccount } from '../../entities/m_cash_account.entity';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('cash-accounts')
export class MCashAccountController {
  constructor(private readonly cashAccountService: MCashAccountService) {}

  @Post()
  @ApiOperation({ summary: 'Buat data cash account baru' })
  @ApiBody({ type: MCashAccount })
  @ApiResponse({
    status: 201,
    description: 'Cash Account berhasil dibuat.',
    type: MCashAccount,
  })
  async createCashAccount(
    @Body() data: Partial<MCashAccount>,
  ): Promise<MCashAccount> {
    return this.cashAccountService.createCashAccount(data);
  }

  @Get()
  @ApiOperation({ summary: 'Ambil semua data Cash Account' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MCashAccount],
  })
  async getAllCashAccounts(): Promise<MCashAccount[]> {
    return this.cashAccountService.getAllCashAccounts();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ambil data cash account berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID cash account' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MCashAccount,
  })
  async getCashAccountById(
    @Param('id') id: number,
  ): Promise<MCashAccount | null> {
    return this.cashAccountService.getCashAccountById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data cash account berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID Cash Account' })
  @ApiBody({ type: MCashAccount })
  @ApiResponse({
    status: 200,
    description: 'Csah Account berhasil diperbarui.',
    type: MCashAccount,
  })
  async updateCashAccount(
    @Param('id') id: number,
    @Body() data: Partial<MCashAccount>,
  ): Promise<MCashAccount | null> {
    return this.cashAccountService.updateCashAccount(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data cash account berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID Cash Account' })
  @ApiResponse({ status: 200, description: 'Cash Account berhasil dihapus.' })
  async deleteCashAccount(@Param('id') id: number): Promise<void> {
    return this.cashAccountService.deleteCashAccount(id);
  }
}

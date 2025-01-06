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

@Controller('cash-accounts')
export class MCashAccountController {
  constructor(private readonly cashAccountService: MCashAccountService) {}

  @Post()
  async createCashAccount(
    @Body() data: Partial<MCashAccount>,
  ): Promise<MCashAccount> {
    return this.cashAccountService.createCashAccount(data);
  }

  @Get()
  async getAllCashAccounts(): Promise<MCashAccount[]> {
    return this.cashAccountService.getAllCashAccounts();
  }

  @Get(':id')
  async getCashAccountById(
    @Param('id') id: number,
  ): Promise<MCashAccount | null> {
    return this.cashAccountService.getCashAccountById(id);
  }

  @Put(':id')
  async updateCashAccount(
    @Param('id') id: number,
    @Body() data: Partial<MCashAccount>,
  ): Promise<MCashAccount | null> {
    return this.cashAccountService.updateCashAccount(id, data);
  }

  @Delete(':id')
  async deleteCashAccount(@Param('id') id: number): Promise<void> {
    return this.cashAccountService.deleteCashAccount(id);
  }
}

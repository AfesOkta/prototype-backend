import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { MBank } from 'src/entities/m_bank.entity';
import { MBankService } from 'src/modules/m_bank/m_bank.service';

@Controller('banks')
export class MBankController {
  constructor(private readonly bankService: MBankService) {}

  @Get()
  async getAllBanks(): Promise<MBank[]> {
    return this.bankService.getAllBanks();
  }

  @Get(':id')
  async getAllBankById(@Param('id') id: number): Promise<MBank | null> {
    return this.bankService.getBankById(id);
  }

  @Post()
  async createBank(@Body() bankData: Partial<MBank>): Promise<MBank> {
    return this.bankService.createBank(bankData);
  }

  @Get('code/:bankCode')
  async getBankByCode(
    @Param('bankCode') bankCode: string,
  ): Promise<MBank | null> {
    return this.bankService.getBankByCode(bankCode);
  }

  // Update a bank
  @Put(':id')
  async updateBank(
    @Param('id') id: number,
    @Body() bankData: Partial<MBank>,
  ): Promise<MBank | null> {
    return this.bankService.updateBank(id, bankData);
  }

  // Delete a bank
  @Delete(':id')
  async deleteBank(@Param('id') id: number): Promise<void> {
    return this.bankService.deleteBank(id);
  }
}

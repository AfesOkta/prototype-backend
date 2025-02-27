import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MBank } from 'src/entities/m_bank.entity';
import { MBankService } from 'src/modules/m_bank/m_bank.service';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('banks')
@Controller('api/v1/banks')
export class MBankController {
  constructor(private readonly bankService: MBankService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'Ambil semua data bank' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MBank],
  })
  async getAllBanks(): Promise<MBank[]> {
    return this.bankService.getAllBanks();
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiOperation({ summary: 'Ambil data bank berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID Bank' })
  @ApiResponse({ status: 200, description: 'Data ditemukan.', type: MBank })
  async getAllBankById(@Param('id') id: number): Promise<MBank | null> {
    return this.bankService.getBankById(id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Buat data bank baru' })
  @ApiBody({ type: MBank })
  @ApiResponse({
    status: 201,
    description: 'Bank berhasil dibuat.',
    type: MBank,
  })
  async createBank(@Body() bankData: Partial<MBank>): Promise<MBank> {
    return this.bankService.createBank(bankData);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get('code/:bankCode')
  @ApiOperation({ summary: 'Ambil data bank berdasarkan code' })
  @ApiParam({ name: 'bankCode', type: String, description: 'Kode Bank' })
  @ApiResponse({ status: 200, description: 'Data ditemukan.', type: MBank })
  async getBankByCode(
    @Param('bankCode') bankCode: string,
  ): Promise<MBank | null> {
    return this.bankService.getBankByCode(bankCode);
  }

  // Update a bank
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data bank berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID Bank' })
  @ApiBody({ type: MBank })
  @ApiResponse({
    status: 200,
    description: 'Bank berhasil diperbarui.',
    type: MBank,
  })
  async updateBank(
    @Param('id') id: number,
    @Body() bankData: Partial<MBank>,
  ): Promise<MBank | null> {
    return this.bankService.updateBank(id, bankData);
  }

  // Delete a bank
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data bank berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID Bank' })
  @ApiResponse({ status: 200, description: 'Bank berhasil dihapus.' })
  async deleteBank(@Param('id') id: number): Promise<void> {
    await this.bankService.deleteBank(id);
  }
}

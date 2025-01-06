import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MBank } from 'src/entities/m_bank.entity';
import { MBankRepository } from 'src/repositories/m_bank.repository';

@Injectable()
export class MBankService extends BaseService<MBank> {
  constructor(private readonly mBankRepository: MBankRepository) {
    super(mBankRepository); // Mengirimkan repository ke BaseService
  }

  async getAllBanks(): Promise<MBank[]> {
    return this.mBankRepository.find();
  }

  async getBankById(id: number): Promise<MBank | null> {
    return this.mBankRepository.findOne({ where: { id } });
  }

  // Method untuk membuat data bank baru
  async createBank(data: Partial<MBank>): Promise<MBank> {
    const bank = this.mBankRepository.create(data);
    return this.mBankRepository.save(bank);
  }

  // Method untuk mencari bank berdasarkan kode
  async getBankByCode(bankCode: string): Promise<MBank | null> {
    return this.mBankRepository.findByBankCode(bankCode);
  }

  async updateBank(id: number, data: Partial<MBank>): Promise<MBank | null> {
    const bank = await this.mBankRepository.findOne({ where: { id } });
    if (!bank) {
      return null;
    }

    Object.assign(bank, data);
    return this.mBankRepository.save(bank);
  }

  async deleteBank(id: number): Promise<void> {
    await this.mBankRepository.delete(id);
  }
}

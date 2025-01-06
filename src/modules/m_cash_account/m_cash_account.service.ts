import { Injectable } from '@nestjs/common';
import { MCashAccountRepository } from '../../repositories/m_cash_account.repository';
import { MCashAccount } from '../../entities/m_cash_account.entity';

@Injectable()
export class MCashAccountService {
  constructor(private readonly cashAccountRepository: MCashAccountRepository) {}

  // Create
  async createCashAccount(data: Partial<MCashAccount>): Promise<MCashAccount> {
    const cashAccount = this.cashAccountRepository.create(data);
    return this.cashAccountRepository.save(cashAccount);
  }

  // Read all
  async getAllCashAccounts(): Promise<MCashAccount[]> {
    return this.cashAccountRepository.find({ relations: ['bank'] });
  }

  // Read by ID
  async getCashAccountById(id: number): Promise<MCashAccount | null> {
    return this.cashAccountRepository.findOne({
      where: { id },
      relations: ['bank'],
    });
  }

  // Update
  async updateCashAccount(
    id: number,
    data: Partial<MCashAccount>,
  ): Promise<MCashAccount | null> {
    const cashAccount = await this.getCashAccountById(id);
    if (!cashAccount) {
      return null; // Not found
    }
    Object.assign(cashAccount, data);
    return this.cashAccountRepository.save(cashAccount);
  }

  // Delete
  async deleteCashAccount(id: number): Promise<void> {
    await this.cashAccountRepository.delete(id);
  }
}

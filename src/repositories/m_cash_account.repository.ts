import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MCashAccount } from '../entities/m_cash_account.entity';
import { BaseRepository } from '../base/base_reepository.repository';

@Injectable()
export class MCashAccountRepository extends BaseRepository<MCashAccount> {
  constructor(private readonly dataSource: DataSource) {
    super(MCashAccount, dataSource);
  }

  // Custom query example: find by cash account code
  async findByCashAccountCode(code: string): Promise<MCashAccount | null> {
    return this.findOne({
      where: { cashAccountCode: code },
      relations: ['bank'],
    });
  }
}

import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MBank } from '../entities/m_bank.entity';
import { BaseRepository } from '../base/base_reepository.repository';

@Injectable()
export class MBankRepository extends BaseRepository<MBank> {
  constructor(private dataSource: DataSource) {
    super(MBank, dataSource);
  }

  // Tambahkan metode custom jika diperlukan
  async findByBankCode(bankCode: string): Promise<MBank | null> {
    return this.findOne({ where: { bankCode } });
  }
}

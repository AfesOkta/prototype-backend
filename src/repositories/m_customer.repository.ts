import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MCustomer } from 'src/entities/m_customer.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MCustomerRepository extends BaseRepository<MCustomer> {
  constructor(private readonly dataSource: DataSource) {
    super(MCustomer, dataSource);
  }

  // Custom query example: find by cash account code
  async findCustomerByCode(code: string): Promise<MCustomer | null> {
    return this.findOne({ where: { custCode: code } });
  }
}

import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MCustomer } from 'src/entities/m_customer.entity';
import { MCustomerRepository } from 'src/repositories/m_customer.repository';

@Injectable()
export class MCustomerService extends BaseService<MCustomer> {
  constructor(private readonly mCustomerRepository: MCustomerRepository) {
    super(mCustomerRepository);
  }

  async getAllCustomer(): Promise<MCustomer[]> {
    return this.mCustomerRepository.find();
  }

  async getCustomerById(id: number): Promise<MCustomer | null> {
    return this.mCustomerRepository.findOne({ where: { id } });
  }

  async createCustomer(data: Partial<MCustomer>): Promise<MCustomer> {
    const customer = this.mCustomerRepository.create(data);
    return this.mCustomerRepository.save(customer);
  }

  async getCustomerByCode(customerCode: string): Promise<MCustomer | null> {
    return this.mCustomerRepository.findCustomerByCode(customerCode);
  }

  async updateBank(
    id: number,
    data: Partial<MCustomer>,
  ): Promise<MCustomer | null> {
    const bank = await this.mCustomerRepository.findOne({ where: { id } });
    if (!bank) {
      return null;
    }

    Object.assign(bank, data);
    return this.mCustomerRepository.save(bank);
  }

  async deleteCustomer(id: number): Promise<void> {
    await this.mCustomerRepository.delete(id);
  }
}

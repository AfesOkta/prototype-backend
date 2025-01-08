import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MPaymentType } from 'src/entities/m_payment_type.entity';
import { MPaymentTypeRepository } from 'src/repositories/m_payment_type.repository';

@Injectable()
export class MPaymentTypeService extends BaseService<MPaymentType> {
  constructor(private readonly paymentTypeRepository: MPaymentTypeRepository) {
    super(paymentTypeRepository);
  }

  async getAllPaymentType(): Promise<MPaymentType[]> {
    return this.paymentTypeRepository.find();
  }

  async getPaymentTypeById(id: number): Promise<MPaymentType | null> {
    return this.paymentTypeRepository.findOne({ where: { id } });
  }

  async createPaymentType(data: Partial<MPaymentType>): Promise<MPaymentType> {
    const PaymentType = this.paymentTypeRepository.create(data);
    return this.paymentTypeRepository.save(PaymentType);
  }

  async getPaymentTypeByCode(
    paymentTypeCode: string,
  ): Promise<MPaymentType | null> {
    return this.paymentTypeRepository.findPaymenttypeByCode(paymentTypeCode);
  }

  async updatePaymentType(
    id: number,
    data: Partial<MPaymentType>,
  ): Promise<MPaymentType | null> {
    const PaymentType = await this.paymentTypeRepository.findOne({
      where: { id },
    });
    if (!PaymentType) {
      return null;
    }

    Object.assign(PaymentType, data);
    return this.paymentTypeRepository.save(PaymentType);
  }

  async deletePaymentType(id: number): Promise<void> {
    await this.paymentTypeRepository.delete(id);
  }
}

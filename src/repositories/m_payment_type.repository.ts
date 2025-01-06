import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base_reepository.repository';
import { MPaymentType } from 'src/entities/m_payment_type.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class MPaymentTypeRepository extends BaseRepository<MPaymentType> {
  constructor(private readonly dataSource: DataSource) {
    super(MPaymentType, dataSource);
  }

  // Custom query example: find by cash account code
  async findByCashAccountCode(code: string): Promise<MPaymentType | null> {
    return this.findOne({
      where: { paymentTypeCode: code },
      relations: ['cashAccount'],
    });
  }
}

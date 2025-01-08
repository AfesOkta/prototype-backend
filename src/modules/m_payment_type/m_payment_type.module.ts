import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MPaymentType } from 'src/entities/m_payment_type.entity';
import { MPaymentTypeController } from './m_payment_type.controller';
import { MPaymentTypeRepository } from 'src/repositories/m_payment_type.repository';
import { MPaymentTypeService } from './m_payment_type.service';

@Module({
  imports: [TypeOrmModule.forFeature([MPaymentType])],
  controllers: [MPaymentTypeController],
  providers: [MPaymentTypeService, MPaymentTypeRepository],
  exports: [MPaymentTypeService],
})
export class MPaymentTypeModule {}

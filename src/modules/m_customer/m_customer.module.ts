import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MCustomer } from 'src/entities/m_customer.entity';
import { MCustomerService } from './m_customer.service';
import { MCustomerRepository } from 'src/repositories/m_customer.repository';
import { MCustomerController } from './m_customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MCustomer])],
  providers: [MCustomerService, MCustomerRepository],
  controllers: [MCustomerController],
  exports: [MCustomerService],
})
export class MCustomerModule {}

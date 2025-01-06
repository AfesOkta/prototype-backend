import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MBank } from 'src/entities/m_bank.entity';
import { MBankRepository } from 'src/repositories/m_bank.repository';
import { MBankService } from 'src/modules/m_bank/m_bank.service';
import { MBankController } from './m_bank.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MBank])],
  providers: [MBankService, MBankRepository],
  controllers: [MBankController],
  exports: [MBankService],
})
export class MBankModule {}

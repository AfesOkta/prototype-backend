import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MCashAccount } from '../../entities/m_cash_account.entity';
import { MBank } from '../../entities/m_bank.entity';
import { MCashAccountRepository } from '../../repositories/m_cash_account.repository';
import { MCashAccountService } from './m_cash_account.service';
import { MCashAccountController } from './m_cash_account.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MCashAccount, MBank])],
  providers: [MCashAccountRepository, MCashAccountService],
  controllers: [MCashAccountController],
  exports: [MCashAccountService],
})
export class MCashAccountModule {}

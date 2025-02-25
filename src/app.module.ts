/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MBankModule } from './modules/m_bank/m_bank.module';
import { MCashAccountModule } from './modules/m_cash_account/m_cash_account.module';
import { MCustomerModule } from './modules/m_customer/m_customer.module';
import { MLocationModule } from './modules/m_location/m_location.module';
import { MPaymentTypeModule } from './modules/m_payment_type/m_payment_type.module';
import { MProductModule } from './modules/m_product/m_product.module';
import { MSupplierModule } from './modules/m_supplier/m_supplier.module';
import { MTaxGroupDtlModule } from './modules/m_tax_group_dtl/m_tax_group_dtl.module';
import { MTaxGroupHdrModule } from './modules/m_tax_group_hdr/m_tax_group_hdr.module';
import { MTaxTypeModule } from './modules/m_tax_type/m_tax_type.module';
import { MUnitModule } from './modules/m_unit/m_unit.module';
import { ormConfig } from './data-source';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return ormConfig;
      }
    }),
    MBankModule,
    MCashAccountModule,
    MCustomerModule,
    MLocationModule,
    MPaymentTypeModule,
    MProductModule,
    MSupplierModule,
    MTaxGroupDtlModule,
    MTaxGroupHdrModule,
    MTaxTypeModule,
    MUnitModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}

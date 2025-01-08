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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: process.env.DATABASE_SYNC === 'true',
      }),
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
  ],
})
export class AppModule {}

import { DataSource } from 'typeorm';
import 'dotenv/config';
// import { join } from 'node:path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import { MBank } from './entities/m_bank.entity';
// import { MCashAccount } from './entities/m_cash_account.entity';
// import { MCustomer } from './entities/m_customer.entity';
// import { MLocation } from './entities/m_location.entity';
// import { MPaymentType } from './entities/m_payment_type.entity';
// import { MProduct } from './entities/m_product.entity';
// import { MSupplier } from './entities/m_supplier.entity';
// import { MTaxGroupDtl } from './entities/m_tax_group_dtl.entity';
// import { MTaxGroupHdr } from './entities/m_tax_group_hdr.entity';
// import { MUnit } from './entities/m_unit.entity';
// import { MTaxType } from './entities/m_tax_type.entity';

export const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  // entities: [
  //   MBank,
  //   MCashAccount,
  //   MCustomer,
  //   MLocation,
  //   MPaymentType,
  //   MUnit,
  //   MProduct,
  //   MSupplier,
  //   MTaxType,
  //   MTaxGroupHdr,
  //   MTaxGroupDtl,
  // ],
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // entities: [User, Post, Profile],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  subscribers: [],
  logging: true,
};

export default new DataSource({ ...ormConfig });

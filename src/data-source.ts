/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config(); // Load environment variables

// DataSource configuration
const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // Your database type (PostgreSQL in this case)
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['./src/entities/*.entity{.ts,.js}'], // Add your entities here
  synchronize: false, // Set to false in production; use migrations instead
  logging: true, // Optional, for logging SQL queries
  migrations: ['./src/migrations/**/*{.ts,.js}'], // Path to your migration files
  migrationsRun: true, // Automatically run migrations at startup
};

export default typeOrmConfig;

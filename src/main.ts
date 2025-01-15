import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { ormConfig } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.RUN_MIGRATIONS === 'true') {
    console.log('Running migrations...');
    const dataSource = new DataSource(ormConfig);
    await dataSource.initialize();

    // Menangkap daftar migrasi yang akan dijalankan
    const pendingMigrations = await dataSource.showMigrations();
    if (!pendingMigrations) {
      console.log('No migrations to run.');
    } else {
      // Log daftar migrasi sebelum dijalankan
      console.log('Pending migrations:');
      const migrationFiles = await dataSource.query(
        'SELECT * FROM "migrations"',
      );
      migrationFiles.forEach((migration) => {
        console.log(`- ${migration.name}`);
      });

      // Menjalankan migrasi
      await dataSource.runMigrations();

      console.log('Migrations completed.');
    }
  }
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

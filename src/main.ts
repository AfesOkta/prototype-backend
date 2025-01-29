import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { ormConfig } from './data-source';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  // Konfigurasi Swagger
  const config = new DocumentBuilder()
    .setTitle('Minipos API')
    .setDescription('API untuk mengelola data Minipos')
    .setVersion('1.0')
    .addTag('banks', 'API untuk mengelola data bank')
    .addTag('cash/bank account', 'API untuk mengelola data cash/bank Account')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMbankTable1736962696816 implements MigrationInterface {
  name = 'CreateMbankTable1736962696816';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_bank');
    await queryRunner.query(`CREATE TABLE m_bank (
            id SERIAL PRIMARY KEY,
            bank_code VARCHAR(5) DEFAULT NULL,
            bank_name VARCHAR(100) DEFAULT NULL,
            created_by INT DEFAULT NULL,
            created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_by INT DEFAULT NULL,
            updated_time TIMESTAMP DEFAULT NULL
        );
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_bank');
    await queryRunner.query(`DROP TABLE "mbank`);
  }
}

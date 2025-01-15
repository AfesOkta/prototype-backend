import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMLocation1736963145661 implements MigrationInterface {
  name = 'CreateMLocation1736963145661';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: create table m_location');
    await queryRunner.query(`CREATE TABLE m_location (
	id SERIAL PRIMARY KEY,
	location_code VARCHAR(15) DEFAULT NULL,
	location_name VARCHAR(100) DEFAULT NULL,
	created_by INT DEFAULT NULL,
	created_time TIMESTAMP DEFAULT NULL,
	updated_by INT DEFAULT NULL,
	updated_time TIMESTAMP DEFAULT NULL
);
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Running migration: DROP TABLE m_location');
    await queryRunner.query(`DROP Table m_location`);
  }
}

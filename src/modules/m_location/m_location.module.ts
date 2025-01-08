import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MLocation } from 'src/entities/m_location.entity';
import { MLocationController } from './m_location.controller';
import { MLocationRepository } from 'src/repositories/m_location.repository';
import { MLocationService } from './m_location.service';

@Module({
  imports: [TypeOrmModule.forFeature([MLocation])],
  controllers: [MLocationController],
  providers: [MLocationService, MLocationRepository],
  exports: [MLocationService],
})
export class MLocationModule {}

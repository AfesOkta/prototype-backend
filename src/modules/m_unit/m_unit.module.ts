import { Module } from '@nestjs/common';
import { MUnitController } from './m_unit.controller';
import { MUnitService } from './m_unit.service';
import { MUnitRepository } from 'src/repositories/m_unit.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MUnit } from 'src/entities/m_unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MUnit])],
  controllers: [MUnitController],
  providers: [MUnitService, MUnitRepository],
  exports: [MUnitService],
})
export class MUnitModule {}

import { Module } from '@nestjs/common';
import { MTaxTypeController } from './m_tax_type.controller';
import { MTaxTypeService } from './m_tax_type.service';
import { MTaxTypeRepository } from 'src/repositories/m_tax_type.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MTaxType } from 'src/entities/m_tax_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MTaxType])],
  controllers: [MTaxTypeController],
  providers: [MTaxTypeService, MTaxTypeRepository],
  exports: [MTaxTypeService],
})
export class MTaxTypeModule {}

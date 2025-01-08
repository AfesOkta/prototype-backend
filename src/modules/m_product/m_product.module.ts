import { Module } from '@nestjs/common';
import { MProductService } from './m_product.service';
import { MProductRepository } from 'src/repositories/m_product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MProduct } from 'src/entities/m_product.entity';
import { MProductController } from './m_product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MProduct])],
  controllers: [MProductController],
  providers: [MProductService, MProductRepository],
  exports: [MProductService],
})
export class MProductModule {}

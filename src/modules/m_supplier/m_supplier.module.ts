import { Module } from '@nestjs/common';
import { MSupplierController } from './m_supplier.controller';
import { MSupplierService } from './m_supplier.service';
import { MSupplierRepository } from 'src/repositories/m_supplier.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MSupplier } from 'src/entities/m_supplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MSupplier])],
  controllers: [MSupplierController],
  providers: [MSupplierService, MSupplierRepository],
  exports: [MSupplierService],
})
export class MSupplierModule {}

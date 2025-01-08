import { Module } from '@nestjs/common';
import { MTaxGroupDtlController } from './m_tax_group_dtl_controller';
import { MTaxGroupDtlService } from './m_tax_group_dtl.service';
import { MTaxGroupDtlRepository } from 'src/repositories/m_tax_group_dtl.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MTaxGroupDtl } from 'src/entities/m_tax_group_dtl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MTaxGroupDtl])],
  controllers: [MTaxGroupDtlController],
  providers: [MTaxGroupDtlService, MTaxGroupDtlRepository],
  exports: [MTaxGroupDtlService],
})
export class MTaxGroupDtlModule {}

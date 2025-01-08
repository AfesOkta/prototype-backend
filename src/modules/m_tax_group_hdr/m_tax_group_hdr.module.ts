import { Module } from '@nestjs/common';
import { MTaxGroupHdrController } from './m_tax_group_hdr.controller';
import { MTaxGroupHdrService } from './m_tax_group_hdr.service';
import { MTaxGroupHdrRepository } from 'src/repositories/m_tax_group_hdr.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MTaxGroupHdr } from 'src/entities/m_tax_group_hdr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MTaxGroupHdr])],
  controllers: [MTaxGroupHdrController],
  providers: [MTaxGroupHdrService, MTaxGroupHdrRepository],
  exports: [MTaxGroupHdrService],
})
export class MTaxGroupHdrModule {}

import { Module } from '@nestjs/common';
import { TInventoryController } from './t_inventory.controller';
import { TInventoryService } from './t_inventory.service';
import { TInventoryHdrRepository } from 'src/repositories/t_inventory_hdr.repository';

@Module({
  controllers: [TInventoryController],
  providers: [TInventoryService, TInventoryHdrRepository],
})
export class TInventoryModule {}

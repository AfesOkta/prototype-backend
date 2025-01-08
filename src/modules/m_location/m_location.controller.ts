import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MLocationService } from './m_location.service';
import { MLocation } from 'src/entities/m_location.entity';

@Controller('locations')
export class MLocationController {
  constructor(private readonly locationService: MLocationService) {}

  @Get()
  async getAllLocations(): Promise<MLocation[]> {
    return this.locationService.getAllLocation();
  }

  @Get(':id')
  async getAllLocationById(@Param('id') id: number): Promise<MLocation | null> {
    return this.locationService.getLocationById(id);
  }

  @Post()
  async createLocation(
    @Body() LocationData: Partial<MLocation>,
  ): Promise<MLocation> {
    return this.locationService.createLocation(LocationData);
  }

  @Get('code/:LocationCode')
  async getLocationByCode(
    @Param('LocationCode') LocationCode: string,
  ): Promise<MLocation | null> {
    return this.locationService.getLocationByCode(LocationCode);
  }

  // Update a Location
  @Put(':id')
  async updateLocation(
    @Param('id') id: number,
    @Body() LocationData: Partial<MLocation>,
  ): Promise<MLocation | null> {
    return this.locationService.updateLocation(id, LocationData);
  }

  // Delete a Location
  @Delete(':id')
  async deleteLocation(@Param('id') id: number): Promise<void> {
    return this.locationService.deleteLocation(id);
  }
}

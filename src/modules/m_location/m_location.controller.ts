import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MLocationService } from './m_location.service';
import { MLocation } from 'src/entities/m_location.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('locations')
@Controller('/api/v1/locations')
export class MLocationController {
  constructor(private readonly locationService: MLocationService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'Ambil semua data Location' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MLocation],
  })
  async getAllLocations(): Promise<MLocation[]> {
    return this.locationService.getAllLocation();
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiOperation({ summary: 'Ambil data location berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Id location' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MLocation,
  })
  async getAllLocationById(@Param('id') id: number): Promise<MLocation | null> {
    return this.locationService.getLocationById(id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Buat data location baru' })
  @ApiBody({ type: MLocation })
  @ApiResponse({
    status: 201,
    description: 'location berhasil dibuat.',
    type: MLocation,
  })
  async createLocation(
    @Body() LocationData: Partial<MLocation>,
  ): Promise<MLocation> {
    return this.locationService.createLocation(LocationData);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get('code/:LocationCode')
  @ApiOperation({ summary: 'Ambil data location berdasarkan kode location' })
  @ApiParam({ name: 'id', type: Number, description: 'Kode location' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MLocation,
  })
  async getLocationByCode(
    @Param('LocationCode') LocationCode: string,
  ): Promise<MLocation | null> {
    return this.locationService.getLocationByCode(LocationCode);
  }

  // Update a Location
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data location berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Id location' })
  @ApiBody({ type: MLocation })
  @ApiResponse({
    status: 200,
    description: 'Location berhasil diperbarui.',
    type: MLocation,
  })
  async updateLocation(
    @Param('id') id: number,
    @Body() LocationData: Partial<MLocation>,
  ): Promise<MLocation | null> {
    return this.locationService.updateLocation(id, LocationData);
  }

  // Delete a Location
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data location berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'Id location' })
  @ApiResponse({ status: 200, description: 'Location berhasil dihapus.' })
  async deleteLocation(@Param('id') id: number): Promise<void> {
    return this.locationService.deleteLocation(id);
  }
}

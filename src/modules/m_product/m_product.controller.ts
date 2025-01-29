import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MProductService } from './m_product.service';
import { MProduct } from 'src/entities/m_product.entity';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class MProductController {
  constructor(private readonly productService: MProductService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data product' })
  @ApiResponse({
    status: 200,
    description: 'Berhasil mengambil data.',
    type: [MProduct],
  })
  async getAllProducts(): Promise<MProduct[]> {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ambil data product berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID product' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MProduct,
  })
  async getAllProductById(@Param('id') id: number): Promise<MProduct | null> {
    return this.productService.getProductById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Buat data product baru' })
  @ApiBody({ type: MProduct })
  @ApiResponse({
    status: 201,
    description: 'product berhasil dibuat.',
    type: MProduct,
  })
  async createProduct(
    @Body() ProductData: Partial<MProduct>,
  ): Promise<MProduct> {
    return this.productService.createProduct(ProductData);
  }

  @Get('code/:ProductCode')
  @ApiOperation({ summary: 'Ambil data product berdasarkan kode product' })
  @ApiParam({ name: 'ProductCode', type: String, description: 'Kode product' })
  @ApiResponse({
    status: 200,
    description: 'Data ditemukan.',
    type: MProduct,
  })
  async getProductByCode(
    @Param('ProductCode') ProductCode: string,
  ): Promise<MProduct | null> {
    return this.productService.getProductByCode(ProductCode);
  }

  // Update a Product
  @Put(':id')
  @ApiOperation({ summary: 'Perbarui data product berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID product' })
  @ApiBody({ type: MProduct })
  @ApiResponse({
    status: 200,
    description: 'product berhasil diperbarui.',
    type: MProduct,
  })
  async updateProduct(
    @Param('id') id: number,
    @Body() ProductData: Partial<MProduct>,
  ): Promise<MProduct | null> {
    return this.productService.updateProduct(id, ProductData);
  }

  // Delete a Product
  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data product berdasarkan ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID product' })
  @ApiResponse({ status: 200, description: 'product berhasil dihapus.' })
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}

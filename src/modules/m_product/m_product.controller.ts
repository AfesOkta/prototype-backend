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

@Controller('products')
export class MProductController {
  constructor(private readonly productService: MProductService) {}

  @Get()
  async getAllProducts(): Promise<MProduct[]> {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  async getAllProductById(@Param('id') id: number): Promise<MProduct | null> {
    return this.productService.getProductById(id);
  }

  @Post()
  async createPayment(
    @Body() ProductData: Partial<MProduct>,
  ): Promise<MProduct> {
    return this.productService.createProduct(ProductData);
  }

  @Get('code/:ProductCode')
  async getProductByCode(
    @Param('ProductCode') ProductCode: string,
  ): Promise<MProduct | null> {
    return this.productService.getProductByCode(ProductCode);
  }

  // Update a Product
  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() ProductData: Partial<MProduct>,
  ): Promise<MProduct | null> {
    return this.productService.updateProduct(id, ProductData);
  }

  // Delete a Product
  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}

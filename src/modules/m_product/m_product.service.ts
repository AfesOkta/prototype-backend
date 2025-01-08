import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base_service.service';
import { MProduct } from 'src/entities/m_product.entity';
import { MProductRepository } from 'src/repositories/m_product.repository';

@Injectable()
export class MProductService extends BaseService<MProduct> {
  constructor(private readonly productRepository: MProductRepository) {
    super(productRepository);
  }

  async getAllProduct(): Promise<MProduct[]> {
    return this.productRepository.find();
  }

  async getProductById(id: number): Promise<MProduct | null> {
    return this.productRepository.findOne({ where: { id } });
  }

  async createProduct(data: Partial<MProduct>): Promise<MProduct> {
    const Product = this.productRepository.create(data);
    return this.productRepository.save(Product);
  }

  async getProductByCode(ProductCode: string): Promise<MProduct | null> {
    return this.productRepository.findProductByCode(ProductCode);
  }

  async updateProduct(
    id: number,
    data: Partial<MProduct>,
  ): Promise<MProduct | null> {
    const Product = await this.productRepository.findOne({ where: { id } });
    if (!Product) {
      return null;
    }

    Object.assign(Product, data);
    return this.productRepository.save(Product);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}

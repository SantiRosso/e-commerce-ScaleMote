import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//entities
import { Products } from './entities/products.entity';
//dtos
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async findAll() {
    const result = await this.productsRepository.find();

    if (!result.length) {
      return new HttpException('No products', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async findById(id: number) {
    const productFound = await this.productsRepository.find({
      where: {
        id,
      },
    });

    if (!productFound.length) {
      return new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return productFound;
  }

  async create(product: CreateProductDto) {
    const newProduct = this.productsRepository.create(product);
    await this.productsRepository.save(newProduct);
    return newProduct;
  }

  async update(id: number, updateFields: UpdateProductDto) {
    const result = await this.productsRepository.update({ id }, updateFields);

    if (result.affected === 0) {
      return new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: number) {
    const result = await this.productsRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}

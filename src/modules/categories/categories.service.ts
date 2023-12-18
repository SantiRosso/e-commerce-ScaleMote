import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//entities
import { Categories } from './entities/categories.entity';
import { CreateCategoryDto } from './dtos/createCategory.dto';
import { UpdateCategoryDto } from './dtos/updateCategory.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async findAll() {
    const result = await this.categoriesRepository.find();

    if (!result.length) {
      return new HttpException('No Categories', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async findById(id: number) {
    const productFound = await this.categoriesRepository.find({
      where: {
        id,
      },
    });

    if (!productFound.length) {
      return new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return productFound;
  }

  async create(product: CreateCategoryDto) {
    const newCategory = this.categoriesRepository.create(product);
    await this.categoriesRepository.save(newCategory);
    return newCategory;
  }

  async update(id: number, updateFields: UpdateCategoryDto) {
    const result = await this.categoriesRepository.update({ id }, updateFields);

    if (result.affected === 0) {
      return new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: number) {
    const result = await this.categoriesRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}

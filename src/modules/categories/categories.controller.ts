import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
//dtos
import { CreateCategoryDto } from './dtos/createCategory.dto';
import { UpdateCategoryDto } from './dtos/updateCategory.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.categoriesService.findById(Number(id));
  }

  @Post()
  async create(@Body() newCategory: CreateCategoryDto) {
    return await this.categoriesService.create(newCategory);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFields: UpdateCategoryDto,
  ) {
    return await this.categoriesService.update(Number(id), updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.categoriesService.delete(Number(id));
  }
}

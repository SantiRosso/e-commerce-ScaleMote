import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
//dtos
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Controller('users')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.productsService.findById(Number(id));
  }

  @Post()
  async create(@Body() newUser: CreateProductDto) {
    return await this.productsService.create(newUser);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFields: UpdateProductDto,
  ) {
    return await this.productsService.update(Number(id), updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.productsService.delete(Number(id));
  }
}

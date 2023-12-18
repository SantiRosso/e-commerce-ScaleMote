import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './entities/categories.entity';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
  exports: [],
})
export class CategoriesModule {}

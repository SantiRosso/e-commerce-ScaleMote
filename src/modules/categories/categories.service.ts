import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//entities
import { Categories } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}
}

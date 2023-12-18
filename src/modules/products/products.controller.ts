import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('users')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
}

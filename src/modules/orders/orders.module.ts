import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entites/orders.entity';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [],
})
export class OrdersModule {}

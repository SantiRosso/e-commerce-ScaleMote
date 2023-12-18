import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
//entities
import { Categories } from 'src/modules/categories/entities/categories.entity';
import { Orders } from 'src/modules/orders/entites/orders.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: string;
  @Column()
  stock: number;
  //relación de uno a muchos con el modelo de categoría
  @ManyToOne(() => Categories, (category) => category.products)
  category: Categories;
  //relación de muchos a muchos con el modelo de pedidos
  @ManyToMany(() => Orders, (order) => order.products)
  orders: Orders[];
}

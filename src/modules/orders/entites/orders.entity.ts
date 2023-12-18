import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
//entities
import { Products } from 'src/modules/products/entities/products.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantity: number;
  @Column()
  totalPrice: string;
  //relación de uno a muchos con el modelo de usuarios
  //relación de muchos a muchos con el modelo de productos
  @ManyToMany(() => Products, { eager: true })
  @JoinTable()
  products: Products[];
}

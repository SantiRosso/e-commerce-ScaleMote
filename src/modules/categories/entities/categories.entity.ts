import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Products } from 'src/modules/products/entities/products.entity';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  //relación de uno a muchos con el modelo de productos
  @OneToMany(() => Products, (product) => product.category)
  products: Products[];
}

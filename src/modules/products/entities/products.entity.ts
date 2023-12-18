import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categories } from 'src/modules/categories/entities/categories.entity';

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
  //relación de muchos a muchos con el modelo de productos
}

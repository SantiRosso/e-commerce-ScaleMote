import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  //relación de uno a muchos con el modelo de categoría
}

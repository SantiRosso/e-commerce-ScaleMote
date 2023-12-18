import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  //relación de uno a muchos con el modelo de productos
}

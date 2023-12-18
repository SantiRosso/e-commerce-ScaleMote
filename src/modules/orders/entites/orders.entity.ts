import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

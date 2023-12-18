import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  price: string;
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  stock: number;
}

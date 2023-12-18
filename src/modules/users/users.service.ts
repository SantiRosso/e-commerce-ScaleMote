import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//entities
import { Users } from './entities/users.entity';
//dtos
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async findAll() {
    const result = await this.usersRepository.find();

    if (!result.length) {
      return new HttpException('No users', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async findById(id: number) {
    const userFound = await this.usersRepository.find({
      where: {
        id,
      },
    });

    if (!userFound.length) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userFound;
  }

  async create(user: CreateUserDto) {
    const newUser = this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async update(id: number, updateFields: UpdateUserDto) {
    const result = await this.usersRepository.update({ id }, updateFields);

    if (result.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: number) {
    const result = await this.usersRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
//dtos
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.usersService.findById(Number(id));
  }

  @Post()
  async create(@Body() newUser: CreateUserDto) {
    return await this.usersService.create(newUser);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdateUserDto) {
    return await this.usersService.update(Number(id), updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.usersService.delete(Number(id));
  }
}

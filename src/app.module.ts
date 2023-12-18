import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
require('dotenv').config();
const { DB_PASSWORD, DB_PORT, DB_USER, DB_NAME, DB_HOST } = process.env;
//modules
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: Number(DB_PORT),
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

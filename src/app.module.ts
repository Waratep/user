import { Module } from '@nestjs/common';
import { UserService } from './module/user/user.service';
import { UserModule } from './module/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './module/user/entity/user.entity';
import { UserController } from './module/user/user.controller';
import { UserLogic } from './module/user/user.logic';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE_NAME,
      entities: [User],
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserLogic],
})
export class AppModule {}

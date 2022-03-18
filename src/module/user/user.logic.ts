import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ICreateUser } from './interface/create-user.interface';
import { IDeleteUser } from './interface/delete-user.interface';
import { IUser } from './interface/get-user.interface';
import { IUpdateUser } from './interface/update-user.interface';
import { UserService } from './user.service';

@Injectable()
export class UserLogic {
  constructor(private readonly userService: UserService) {}

  async createUser(user: CreateUserDto): Promise<ICreateUser> {
    return await this.userService.insert(user);
  }

  async updateUser(id: number, user: UpdateUserDto): Promise<IUpdateUser> {
    return await this.userService.update(id, user);
  }

  getAllUser(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  getUserById(id: number): Promise<IUser> {
    return this.userService.findById(id);
  }

  async deleteUserById(id: number): Promise<IDeleteUser> {
    await this.userService.delete(id);

    return { status: true };
  }
}

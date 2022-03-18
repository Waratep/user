import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
import { ICreateUser } from './interface/create-user.interface';
import { IUser } from './interface/get-user.interface';
import { IUpdateUser } from './interface/update-user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async insert(user: CreateUserDto): Promise<ICreateUser> {
    const inserted = await this.usersRepository.insert(user);

    return { id: inserted.identifiers[0].id };
  }

  async update(id: number, user: UpdateUserDto): Promise<IUpdateUser> {
    await this.usersRepository.update({ id }, user);

    return { id };
  }

  findAll(): Promise<IUser[]> {
    return this.usersRepository.find();
  }

  findById(id: number): Promise<IUser> {
    return this.usersRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

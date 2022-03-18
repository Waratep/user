import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, CreateUserResponseDto } from './dto/create-user.dto';
import { DeleteUserResponseDto } from './dto/delete-user.dto';
import { GetUserResponseDto } from './dto/get-user.dto';
import { UpdateUserDto, UpdateUserResponseDto } from './dto/update-user.dto';
import { ICreateUser } from './interface/create-user.interface';
import { IDeleteUser } from './interface/delete-user.interface';
import { IUser } from './interface/get-user.interface';
import { IUpdateUser } from './interface/update-user.interface';
import { UserLogic } from './user.logic';

@ApiTags('v1/User')
@Controller('user')
export class UserController {
  constructor(private readonly userLogic: UserLogic) {}

  @ApiOperation({ summary: 'Create user.' })
  @ApiOkResponse({
    description: 'create user.',
    type: CreateUserResponseDto,
  })
  @Post()
  async createUser(@Body() payload: CreateUserDto): Promise<ICreateUser> {
    return this.userLogic.createUser(payload);
  }

  @ApiOperation({ summary: 'Get users.' })
  @ApiOkResponse({
    description: 'get users.',
    type: [GetUserResponseDto],
  })
  @Get()
  getUsers(): Promise<IUser[]> {
    return this.userLogic.getAllUser();
  }

  @ApiOperation({ summary: 'Get user.' })
  @ApiOkResponse({
    description: 'get user.',
    type: GetUserResponseDto,
  })
  @Get(':id')
  getUserById(@Param('id') id: number): Promise<IUser> {
    return this.userLogic.getUserById(Number(id));
  }

  @ApiOperation({ summary: 'Edit user.' })
  @ApiOkResponse({
    description: 'edit user.',
    type: UpdateUserResponseDto,
  })
  @Patch(':id')
  editUserById(
    @Param('id') id: number,
    @Body() payload: UpdateUserDto,
  ): Promise<IUpdateUser> {
    return this.userLogic.updateUser(Number(id), payload);
  }

  @ApiOperation({ summary: 'Delete user.' })
  @ApiOkResponse({
    description: 'delete user.',
    type: DeleteUserResponseDto,
  })
  @Delete(':id')
  deleteUserById(@Param('id') id: number): Promise<IDeleteUser> {
    return this.userLogic.deleteUserById(Number(id));
  }
}

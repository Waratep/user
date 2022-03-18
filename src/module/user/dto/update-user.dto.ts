import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'first name',
    type: String,
    required: false,
    example: 'TEST',
  })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({
    description: 'last name',
    type: String,
    required: false,
    example: 'TEST',
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({
    description: 'user id',
    type: String,
    example: '13be547abef32',
    required: false,
  })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiProperty({
    description: 'displayName',
    type: String,
    required: false,
    example: 'TEST',
  })
  @IsOptional()
  @IsString()
  displayName?: string;

  @ApiProperty({
    description: 'picture url',
    type: String,
    required: false,
    example: 'test.url.image.com',
  })
  @IsOptional()
  @IsString()
  pictureUrl?: string;

  @ApiProperty({
    description: 'phone',
    type: String,
    required: false,
    example: '0901234587',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'email',
    type: String,
    required: false,
    example: 'TEST@TEST.COM',
  })
  @IsOptional()
  @IsString()
  email?: string;
}

export class UpdateUserResponseDto {
  @ApiProperty({
    description: 'id of user record.',
    type: Number,
    example: 1,
  })
  @IsNumber()
  id: number;
}

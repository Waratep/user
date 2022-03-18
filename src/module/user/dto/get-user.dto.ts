import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetUserResponseDto {
  @ApiProperty({
    description: 'id of user record.',
    type: Number,
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'first name',
    type: String,
    example: 'TEST',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'last name',
    type: String,
    example: 'TEST',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'user id',
    type: String,
    example: '13be547abef32',
  })
  @IsString()
  userId: string;

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
    example: '0901234587',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'email',
    type: String,
    example: 'TEST@TEST.COM',
  })
  @IsString()
  email: string;
}

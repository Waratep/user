import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class DeleteUserResponseDto {
  @ApiProperty({
    description: 'status',
    type: Boolean,
    example: 1,
  })
  @IsBoolean()
  status: boolean;
}

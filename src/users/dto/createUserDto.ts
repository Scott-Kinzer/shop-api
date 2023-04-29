import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Bob',
  })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    example: 'pass',
  })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    example: 'email@gmail.com',
  })
  @IsNotEmpty()
  readonly email: string;
}

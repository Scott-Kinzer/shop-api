import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({
    example: 'Bob',
  })
  username: string;

  @ApiProperty({
    example: 'pass',
  })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Bob',
        password: 'pass',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };
}

export class LogoutUserResponse {
  @ApiProperty({
    example: {
      msg: 'Session ended',
    },
  })
  msg: string;
}

export class SignUpResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Bob' })
  username: string;

  @ApiProperty({ example: 'pass' })
  password: string;

  @ApiProperty({ example: 'email@gmail.com' })
  email: string;

  @ApiProperty({ example: 'date' })
  updatedAt: string;

  @ApiProperty({ example: 'date' })
  createdAt: string;
}

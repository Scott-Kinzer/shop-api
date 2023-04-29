import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { LocalGuard } from 'src/auth/local.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
  LoginUserRequest,
  LoginUserResponse,
  LogoutUserResponse,
  SignUpResponse,
} from './types';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOkResponse({
    type: SignUpResponse,
  })
  @Post('/sign-up')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  createUser(
    @Body() userBody: CreateUserDto,
  ): Promise<User | { warning: string }> {
    return this.userService.create(userBody);
  }

  @ApiBody({
    type: LoginUserRequest,
  })
  @ApiOkResponse({
    type: LoginUserResponse,
  })
  @Post('/sign-in')
  @UseGuards(LocalGuard)
  @HttpCode(HttpStatus.OK)
  @Header('Content-type', 'application/json')
  signInUser(@Request() req) {
    return {
      user: req.user,
    };
  }

  @Get('/login-check')
  @UseGuards(AuthGuard)
  loginCheck(@Request() req) {
    return req.user;
  }

  @ApiOkResponse({
    type: LogoutUserResponse,
  })
  @Get('/sign-out')
  signOut(@Request() req) {
    req.session.destroy();
    return { msg: 'Session ended' };
  }
}

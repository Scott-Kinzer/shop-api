import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/createUserDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(filter: {
    where: {
      id?: string;
      username?: string;
      email?: string;
    };
  }): Promise<User> {
    return this.userModel.findOne({ ...filter });
  }

  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warning: string }> {
    const user = new User();

    const isExistingByName = await this.findOne({
      where: {
        username: createUserDto.username,
      },
    });

    const isExistingByEmail = await this.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (isExistingByName) {
      return {
        warning: 'User with this name already exists',
      };
    }

    if (isExistingByEmail) {
      return {
        warning: 'User with this email already exists',
      };
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = hashedPassword;

    return user.save();
  }
}

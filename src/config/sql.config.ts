import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const SQL_CONFIG = registerAs('database', () => ({
  dialect: <Dialect>process.env.SQL_DIALECT,
  logging: process.env.SQL_LOGGING === 'true' ? true : false,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntites: true,
  synchronize: true,
}));

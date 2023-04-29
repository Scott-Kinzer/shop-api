import { registerAs } from '@nestjs/config';
import { SQL_CONFIG } from './sql.config';

export const DATABASE_CONFIG = registerAs('database', () => ({
  sql: {
    ...SQL_CONFIG(),
  },
}));

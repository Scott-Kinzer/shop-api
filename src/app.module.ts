import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelize.config.service';
import { DATABASE_CONFIG } from './config/conf';
import { AuthModule } from './auth/auth.module';
import { BoilerPartsModule } from './boiler-parts/boiler-parts.module';

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [DATABASE_CONFIG],
    }),
    AuthModule,
    BoilerPartsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

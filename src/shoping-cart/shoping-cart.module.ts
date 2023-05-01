import { Module } from '@nestjs/common';
import { ShopingCartService } from './shoping-cart.service';
import { ShopingCartController } from './shoping-cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShopingCart } from './shoping-cart.model';
import { UsersModule } from 'src/users/users.module';
import { BoilerPartsModule } from 'src/boiler-parts/boiler-parts.module';

@Module({
  imports: [
    SequelizeModule.forFeature([ShopingCart]),
    UsersModule,
    BoilerPartsModule,
  ],
  providers: [ShopingCartService],
  controllers: [ShopingCartController],
})
export class ShopingCartModule {}

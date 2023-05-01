import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ShopingCartService } from './shoping-cart.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Controller('shoping-cart')
export class ShopingCartController {
  constructor(private readonly shopingCartService: ShopingCartService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  getAll(@Param('id') id: string) {
    return this.shopingCartService.findAll(id);
  }

  @UseGuards(AuthGuard)
  @Post('/add')
  addToCart(@Body() body: AddToCartDto) {
    return this.shopingCartService.add(body);
  }

  @UseGuards(AuthGuard)
  @Patch('/count/:id')
  updateCount(
    @Body() { count }: { count: number },
    @Param('id') partId: string,
  ) {
    return this.shopingCartService.updateCount(count, +partId);
  }

  @UseGuards(AuthGuard)
  @Patch('/total-price/:id')
  updateTotalPrice(
    @Body() { total_price }: { total_price: number },
    @Param('id') partId: string,
  ) {
    return this.shopingCartService.updateTotalPrice(total_price, +partId);
  }

  @UseGuards(AuthGuard)
  @Delete('/one/:id')
  removeOne(@Param('id') id: string) {
    return this.shopingCartService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Delete('all/:id')
  removeAll(@Param('id') userId: string) {
    return this.shopingCartService.removeAll(userId);
  }
}

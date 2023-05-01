import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartService: BoilerPartsService) {}

  @UseGuards(AuthGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.boilerPartService.paginateAndFilter(query);
  }

  @UseGuards(AuthGuard)
  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.boilerPartService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Get('bestsellers')
  getBestSellers() {
    return this.boilerPartService.bestsellers();
  }

  @UseGuards(AuthGuard)
  @Get('new')
  getNew() {
    return this.boilerPartService.new();
  }

  @UseGuards(AuthGuard)
  @Post('search')
  search(@Body() body: { search: string }) {
    return this.boilerPartService.searchByString(body.search);
  }

  @UseGuards(AuthGuard)
  @Post('name')
  getByName(@Body() body: { name: string }) {
    return this.boilerPartService.findOneByName(body.name);
  }
}

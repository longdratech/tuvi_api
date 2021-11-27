import {
  Body, Controller, Delete, Get, Param, Patch, Post
} from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly tableFoodService: FoodService) {}

  @Post()
  create(@Body() createTableFoodDto: CreateFoodDto) {
    return this.tableFoodService.create(createTableFoodDto);
  }

  @Get()
  findAll() {
    return this.tableFoodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableFoodService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updates: UpdateFoodDto,
  ) {
    return this.tableFoodService.update(+id, updates);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableFoodService.remove(+id);
  }
}

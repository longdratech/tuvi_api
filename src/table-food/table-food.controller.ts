import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableFoodService } from './table-food.service';
import { CreateTableFoodDto } from './dto/create-table-food.dto';
import { UpdateTableFoodDto } from './dto/update-table-food.dto';

@Controller('table-food')
export class TableFoodController {
  constructor(private readonly tableFoodService: TableFoodService) {}

  @Post()
  create(@Body() createTableFoodDto: CreateTableFoodDto) {
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
  update(@Param('id') id: string, @Body() updateTableFoodDto: UpdateTableFoodDto) {
    return this.tableFoodService.update(+id, updateTableFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableFoodService.remove(+id);
  }
}

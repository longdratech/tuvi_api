import { Module } from '@nestjs/common';
import { TableFoodService } from './table-food.service';
import { TableFoodController } from './table-food.controller';
import { PrismaService } from './../prisma.service';

@Module({
  controllers: [TableFoodController],
  providers: [PrismaService, TableFoodService],
})
export class TableFoodModule {}

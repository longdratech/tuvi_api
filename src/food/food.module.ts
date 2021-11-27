import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FoodController],
  providers: [PrismaService, FoodService]
})
export class FoodModule {}

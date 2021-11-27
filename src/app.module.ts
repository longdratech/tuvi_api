import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FoodModule } from './food/food.module';
import { PrismaService } from './prisma.service';
import { TableFoodModule } from './table-food/table-food.module';

@Module({
  imports: [FoodModule, TableFoodModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { OrderModule } from './order/order.module';
import { TableOrderModule } from './table-order/table-order.module';
import { MenuModule } from './menu/menu.module';
import { CategoryModule } from './category/category.module';

@Module({
  controllers: [AppController],
  providers: [PrismaService],
  imports: [OrderModule, TableOrderModule, MenuModule, CategoryModule],
})
export class AppModule {}

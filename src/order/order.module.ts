import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderGateway } from './order.gateway';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [OrderGateway, OrderService, PrismaService]
})
export class OrderModule {}

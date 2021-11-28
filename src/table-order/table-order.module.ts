import { Module } from '@nestjs/common';
import { TableOrderService } from './table-order.service';
import { TableOrderController } from './table-order.controller';

@Module({
  controllers: [TableOrderController],
  providers: [TableOrderService]
})
export class TableOrderModule {}

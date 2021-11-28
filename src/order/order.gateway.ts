import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Server } from 'socket.io';

@WebSocketGateway(8000, { transports: ['websocket'] })
export class OrderGateway {
  constructor(private readonly orderService: OrderService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('createOrder')
  create(@MessageBody() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @SubscribeMessage('findAllOrder')
  findAll() {
    return this.orderService.findAll();
  }

  @SubscribeMessage('findOneOrder')
  findOne(@MessageBody() data: any) {
    return this.server.emit(data);
  }

  @SubscribeMessage('updateOrder')
  update(@MessageBody() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(updateOrderDto.id, updateOrderDto);
  }

  @SubscribeMessage('removeOrder')
  remove(@MessageBody() id: number) {
    return this.orderService.remove(id);
  }
}

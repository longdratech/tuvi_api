import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateOrderDto) {
    try {
    } catch (err) {
      console.error(err);
      throw new BadRequestException(err);
    }
  }

  findAll() {
    return `This action returns all order`;
  }

  async findOne(id: number) {
    try {
    } catch (err) {
      console.error(err);
      throw new BadRequestException(err);
    }
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

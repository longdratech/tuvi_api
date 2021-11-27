import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateFoodDto) {
    return await this.prisma.tableFood.create({ data: body });
  }

  findAll() {
    return `This action returns all tableFood`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableFood`;
  }

  update(id: number, updates: UpdateFoodDto) {
    return `This action updates a #${id} tableFood`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableFood`;
  }
}

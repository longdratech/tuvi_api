import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreateTableFoodDto } from './dto/create-table-food.dto';
import { UpdateTableFoodDto } from './dto/update-table-food.dto';

@Injectable()
export class TableFoodService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTableFoodDto: CreateTableFoodDto) {
    try {
      console.log(createTableFoodDto);
      return await this.prisma.tableFood.create({ data: createTableFoodDto });
    } catch (err) {
      console.error(err);
      throw new BadRequestException(err);
    }
  }

  findAll() {
    return `This action returns all tableFood`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableFood`;
  }

  update(id: number, updateTableFoodDto: UpdateTableFoodDto) {
    return `This action updates a #${id} tableFood`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableFood`;
  }
}

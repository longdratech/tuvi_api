import { Injectable } from '@nestjs/common';
import { CreateTableOrderDto } from './dto/create-table-order.dto';
import { UpdateTableOrderDto } from './dto/update-table-order.dto';

@Injectable()
export class TableOrderService {
  constructor() {

  }
  
  create(createTableOrderDto: CreateTableOrderDto) {
    return 'This action adds a new tableOrder';
  }

  findAll() {
    return `This action returns all tableOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableOrder`;
  }

  update(id: number, updateTableOrderDto: UpdateTableOrderDto) {
    return `This action updates a #${id} tableOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableOrder`;
  }
}

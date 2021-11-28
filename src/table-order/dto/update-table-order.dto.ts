import { PartialType } from '@nestjs/mapped-types';
import { CreateTableOrderDto } from './create-table-order.dto';

export class UpdateTableOrderDto extends PartialType(CreateTableOrderDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateTableFoodDto } from './create-table-food.dto';

export class UpdateTableFoodDto extends PartialType(CreateTableFoodDto) {}

import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTableFoodDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  readonly num: number;
}

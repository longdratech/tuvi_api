import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  readonly total: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  readonly tableFoodId: number;
}

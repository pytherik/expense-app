import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ReportType } from '../data';
import { Exclude } from 'class-transformer';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}

export class UpdateReportDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;
}

export class ReportResponseDto {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  @Exclude()
  updated_at: Date;
  type: ReportType;
}
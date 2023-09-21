import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { ReportType } from './data';
import { AppService } from './app.service';
import {
  CreateReportDto,
  ReportResponseDto,
  UpdateReportDto,
} from './dto/report.dto';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getAllReports(reportType);
  }
  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    console.log(typeof id);
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportById(id, reportType);
  }

  @Post()
  createReport(
    @Body() body: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createReport(reportType, body);
  }

  @Put(':id')
  updateReport(
    @Param('id') id: string,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Body() body: UpdateReportDto,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateReport(id, reportType, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id);
  }
}

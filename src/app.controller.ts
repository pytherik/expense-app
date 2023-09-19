import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { data, ReportType } from './data';
interface TransferData {
  source: string;
  amount: number;
}

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    console.log(type);
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }
  @Get(':id')
  getAllReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }
  @Post()
  createReport(
    @Body() { amount, source }: TransferData,
    @Param('type') type: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType,
    };
    data.report.push(newReport);
    console.log(newReport);
    return 'created';
  }
  @Put(':id')
  updateReport(
    @Body() { source, amount }: TransferData,
    @Param('id') id: string,
    @Param('type') type: string,
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const updatedReport = data.report.filter((report) => {
      if (report.id === id) {
        report.source = source;
        report.amount = amount;
        report.updated_at = new Date();
        report.type = reportType;
        return report;
      }
    });
    console.log(updatedReport);
    return 'updated ' + id;
  }
  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return 'deleted ' + id;
  }
}

import { Injectable } from '@nestjs/common';
import { data, ReportType, Report, UpdateReport } from './data';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from './dto/report.dto';

@Injectable()
export class AppService {
  getAllReports(reportType: ReportType): ReportResponseDto[] {
    return data.report.filter((report) => report.type === reportType);
  }

  getReportById(id: string, reportType: ReportType): ReportResponseDto {
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  createReport(
    type: ReportType,
    { source, amount }: Report,
  ): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }

  updateReport(
    id: string,
    reportType: ReportType,
    body: UpdateReport,
  ): ReportResponseDto {
    const reportToUpdate = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    if (!reportToUpdate) return;
    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return data.report[reportIndex];
  }

  deleteReport(id: string) {
    data.report = data.report.filter((report) => report.id !== id);
    return;
    //alt const reportIndex = data.report.findIndex((report) => report.id === id);
    // if (reportIndex === -1) return;
    // data.report.splice(reportIndex, 1);
    // return 'deleted ' + id;
  }
}

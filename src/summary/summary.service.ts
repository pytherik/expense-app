import { Injectable } from '@nestjs/common';
import { ReportService } from '../report/report.service';
import { ReportType } from '../data';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  calculateSummary() {
    const totalExpense = this.reportService
      .getAllReports(ReportType.EXPENSE)
      .reduce((total, report) => (total += report.amount), 0);
    const totalIncome = this.reportService
      .getAllReports(ReportType.INCOME)
      .reduce((total, report) => (total += report.amount), 0);
    return {
      totalIncome: totalIncome,
      totalExpense: totalExpense,
      total: totalIncome - totalExpense,
    };
  }
}
